"reach 0.1";

export const main = Reach.App(() => {
  const D = Participant("Deployer", {
    // Specify Alice's interact interface here
    inform: Fun([Bytes(128)], Null),
    token: Token,
    noOfAddressesToWhitelist: UInt,
  });
  const Users = API("Users", {
    whitelist: Fun([], Bool),
    contractOver: Fun([] ,Bool)
  });
  init();
  // The first one to publish deploys the contract
  D.only(()=>{
    const token = declassify(interact.token)
  })
  D.publish(token); 
  D.interact.inform(Bytes(128).pad("Received token"));
  commit()
  const whitelisted = Array.replicate(5, D);
  D.pay([[1000, token]]);
  check(balance(token) == 1000)
  const whitelistedAddresses = new Set();

  // The second one to publish always attaches
  const [condition, users, whitelist, tokenBalance] = parallelReduce([
    true,
    0,
    whitelisted,
    1000
  ])
    .invariant(balance(token) == tokenBalance)
    .while(condition )
    .define(() => {
      // const size = whitelistedAddresses.Map.size();
    })
    .api(
      Users.whitelist,
      () => {
        check(!whitelistedAddresses.member(this), "Already a member");
        // check(users<1, "Limit Exceeded cannot register for whitelist")
      },
      () => 0,
      (k) => {
        if (users < 5) {
          k(true);
          whitelistedAddresses.insert(this);
        } else {
          k(false);
        }
        const addressArray = users < 5 ? whitelist.set(users, this) : whitelist;
        return [condition, users + 1, addressArray, tokenBalance];
      }
    )
    .timeout(relativeTime(250), () => {
      const [[], k] = call(Users.contractOver);
      k(false);
      return [condition, users, whitelist, tokenBalance];
    });
    //  const share = balance(token) / 5;
    //  whitelist.forEach((addr) => {
    //    transfer(share, token).to(addr);
    //  });
    transfer(balance(token),token).to(D)
    transfer(balance()).to(D)
    commit()
  // write your program here
  exit();
});
