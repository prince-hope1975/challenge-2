"reach 0.1";

export const main = Reach.App(() => {
  const D = Participant("Deployer", {
    // Specify Alice's interact interface here
    inform: Fun([], Null),
    token: Token,
    bal: UInt
  });
  const Users = API("Users", {
    whitelist: Fun([], UInt),
    contractOver: Fun([], Bool),
    
  });
  init();
  // The first one to publish deploys the contract
  D.only(()=>{
    const token = declassify(interact.token)
    const bal = declassify(interact.bal)
  })
  D.publish(token,bal)
  commit()
  D.pay([[bal, token]]);
  D.interact.inform()
  D.interact.inform()
  const whitelistedAddresses = new Set();
  const startingArr = Array.replicate(5, D)

  // The second one to publish always attaches
  const [condition, users, whitelist] = parallelReduce([true, 0, startingArr])
    .invariant(balance() == 0)
    .while(condition && users < 4)
    // .define(() => {})
    .api(
      Users.whitelist,
      () => {
        check(!whitelistedAddresses.member(this), "Already a member");
        // check(users < 4, "Limit Exceeded cannot register for whitelist");
      },
      () => 0,
      (k) => {
        k(users);

        whitelistedAddresses.insert(this);
        const addrArr = whitelist.set(users, this);

        return [condition, users + 1, addrArr];
      }
    )
    .timeout(relativeTime(2500), () => {
      const [[], k] = call(Users.contractOver);
      k(false);
      return [false, users, whitelist];
    });
  const share = balance(token) / 5;
  whitelist.forEach((addr) => {
   
       transfer(share, token).to(addr);
       return
    
  });

  transfer([[balance(token), token]]).to(D)
  transfer(balance()).to(D)
  commit();
  // write your program here
  exit();
});
