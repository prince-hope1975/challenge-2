"reach 0.1";

export const main = Reach.App(() => {
  const D = Participant("Deployer", {
    // Specify Alice's interact interface here
    inform: Fun([], Null),
  });
  const Users = API("Users", {
    whitelist: Fun([], Bool),
    contractOver: Fun([] ,Bool)
  });
  init();
  // The first one to publish deploys the contract
  D.publish();
  D.interact.inform()
  const whitelistedAddresses = new Set();

  // The second one to publish always attaches
  const [condition, users] = parallelReduce([true,0])
    .invariant(balance() == 0)
    .while(condition )
    .define(() => {})
    .api(Users.whitelist, () => {
      check(!(whitelistedAddresses.member(this)), "Already a member");
      check(users<1, "Limit Exceeded cannot register for whitelist")
    },
    ()=>0,
    (k)=>{
      k(true)
      whitelistedAddresses.insert(this);

      return [condition,users +1]
    }
    )
    .timeout(relativeTime(250), () => {
        const [[], k] = call(Users.contractOver);
        k(false);
      return [condition, users];
    });
    commit()
  // write your program here
  exit();
});
