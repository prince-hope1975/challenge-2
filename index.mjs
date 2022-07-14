import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [Deployer, user, third, fourth] = await stdlib.newTestAccounts(6, startingBalance);
const whitelist = async (who) => {
  try {
    console.log("Attaching to contract")
    const ctc = who.contract(backend, ctcDeployer.getInfo());
    const accc = await ctc.apis.Users.whitelist();
    console.log(
      "\nBalance in wallet", accc,
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo\n"
    );
  } catch (error) {
    console.log(error);
  }
};
console.log("Hello, Alice and Bob!");

console.log("Launching...");
const ctcDeployer = Deployer.contract(backend);

console.log("Starting backends...");
try {
  await Promise.all([
    backend.Deployer(ctcDeployer, {
      inform: () => {
        console.log("contract has been initialized and is working fine");
        throw 42;
      },
      // implement Alice's interact object here
    }),
  ]);
} catch (error) {
  if(error!== 42)
  console.log(error)
}

await whitelist(fourth);
await whitelist(third)
await whitelist(user)
await whitelist(user)



console.log("Goodbye, Users!");
