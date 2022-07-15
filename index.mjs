import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const accounts = await stdlib.newTestAccounts(10, startingBalance);
const [Deployer, user, third, fourth, fifth] = accounts;
const token = await stdlib.launchToken(Deployer, "Reach", "RSH");
console.log("Token created with id : ", token);
const whitelist = async (who) => {
  try {
    console.log("Attaching to contract");
    const optin = await who.tokenAccept(token.id);
    const ctc = who.contract(backend, ctcDeployer.getInfo());
    const accc = await ctc.apis.Users.whitelist();
    console.log(
      "\nBalance in wallet",
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
console.log(stdlib.connector)
console.log("Starting backends...");
try {
  await Promise.all([
    backend.Deployer(ctcDeployer, {
      token: token.id,
      inform: () => {
        console.log("contract has been initialized and is working fine");
        throw 42;
      },
      // implement Alice's interact object here
    }),
  ]);
} catch (error) {
  if (error !== 42) console.log(error);
}
await whitelist(accounts[1]);
await whitelist(accounts[2]);
await whitelist(accounts[3]);
await whitelist(accounts[4]);
await whitelist(accounts[5]);
// await whitelist(accounts[6]);
// await whitelist(accounts[7]);

await accounts.forEach(async (element) => {
  try {
    console.log(
      "\nBalance in wallet",
      stdlib.formatCurrency(await element.balanceOf(token.id)),
      token.name,
      "\n"
    );
  } catch (error) {
    console.log(error);
  }
});

console.log("Goodbye, Users!");
