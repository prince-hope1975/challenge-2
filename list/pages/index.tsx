import { useEffect, useState } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
import {
  ALGO_WalletConnect as WalletConnect,
  ALGO_MyAlgoConnect as myAlgoConnect,
} from "@reach-sh/stdlib";
import Link from "next/link.js";
import { useGlobalContext } from "../context";
import { ImSpinner2 } from "react-icons/im";
const assetId = { _hex: "0x05f2353e", _isBigNumber: true };
const contractInfo = { _hex: "0x05f23bb1", _isBigNumber: true };
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);

const App = () => {
  useEffect(() => {
    const whitelistSpot = window.localStorage.getItem("whitelistSpot");
    if (!whitelistSpot) {
      window.localStorage.setItem("whitelistSpot", "?");
    }
    const spot = window.localStorage.getItem("whitelistSpot");
    setSpot(spot);
  }, []);
  const [wallet, setWallet] = useState({} as any);
  const [token, setToken] = useState();
  const [mySpot, setSpot] = useState(("" as string) || null);
  const [isConnected, setIsConnected] = useState(false);
  const { setModalMessage, setShowModal } = useGlobalContext();
  const displayMessage = (show: boolean, message?: string | JSX.Element) => {
    setShowModal(show);
    setModalMessage(message);
  };

  const deploy = async () => {
    const ctcDeployer = wallet?.contract(backend);
    try {
      await Promise.all([
        backend.Deployer(ctcDeployer, {
          // @ts-ignore
          token: reach.bigNumberToNumber(assetId),
          bal: await wallet.balanceOf(assetId),
          inform: () => {
            console.log("contract has been initialized and is working fine");
            throw 42;
          },
          // implement Alice's interact object here
        }),
      ]);
      console.log(await ctcDeployer.getInfo());
    } catch (error) {
      if (error !== 42) console.log(error);
      console.log(await ctcDeployer.getInfo());
    }
    console.log(await ctcDeployer.getInfo());
  };
  const createToken = async () => {
    const token = await reach.launchToken(wallet, "Reach", "RCH");
    setToken(token);
    console.log(token);
  };
  const whitelist = async () => {
    try {
      console.log("Attaching to contract");
      displayMessage(true, <Loading text="opting into asset Please wait" />);
      // @ts-ignore
      const optin = await wallet.tokenAccept(reach.bigNumberToNumber(assetId));
      displayMessage(false);
      const ctc = wallet.contract(
        backend,
        reach.bigNumberToNumber(contractInfo)
      );
      displayMessage(
        true,
        <Loading text="Checking if whitelist is available" />
      );

      const accc = await ctc.apis.Users.whitelist();
      console.log(
        "\nBalance in wallet",
        // @ts-ignore
        reach.formatCurrency(await reach.balanceOf(wallet)),
        "Algo\n"
      );
       displayMessage(
         true,
         <Loading text="Successfully whitelisted" />
       );
       setSpot(accc)

    } catch (error) {
    displayMessage(true, <Loading error text="An error occured, Unable to whitelist" />);

      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const acct = await reach.getDefaultAccount();
      setWallet(acct);
      setIsConnected(true);
      console.log(acct);
    } catch (e) {
      console.log(e);
    }
  };
  const Loading = ({ text, error }: { text: string, error?:boolean }) => {
    return (
      <div className={`flex flex-col items-center gap-4 w-full h-full p-3 ${error?"bg-red-500 rounded text-white":""}`}>
        <ImSpinner2 className="animate-spin  text-2xl" />
        {text}
      </div>
    );
  };

  return (
    <div className="w-screen  h-screen bg-gray-100 flex gap-4">
      <header className="w-full h-[4rem] p-2 left-0 m-0 bg-white shadow-md flex items-center  fixed bg-gradient-to-l from-indigo-500  to-white justify-between text-white text-lg uppercase cursor-pointer ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-pD2YlOth1fNEMAZJeWBJaP6kGH8KVVagQ&usqp=CAU"
          alt="whitelistdapp"
          className="w-14 h-14 "
        />
        {isConnected ? (
          <div className="bg-white text-purple-700 py-2 px-3 hover:bg-slate-100  rounded shadow-sm">
            WhiteList Dapp{" "}
          </div>
        ) : (
          <div
            onClick={connectWallet}
            className="bg-white text-purple-700 py-2 px-3 hover:bg-slate-100  rounded shadow-sm"
          >
            Connect{" "}
          </div>
        )}
      </header>
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-center bg-cover gap-14"
        style={{
          backgroundImage: `url("https://musictech.com/wp-content/uploads/2021/12/DistroKid-Sellouts@2000x1500.jpg")`,
        }}
      >

        <div className="mx-3 text-purple-800 text-xl h-40 flex items-center px-5 rounded-md shadow-xl bg-white/70 backdrop-blur-sm capitalize">
          {" "}
          {mySpot} / 5 spots Available, try your luck
        </div>
        <button
          className="p-3 rounded text-white font-bold text-lg animate-bounce bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={whitelist}
        >
          Click here Join Whitelist
        </button>
      </div>
    </div>
  );
};

export default App;
