const { ApiPromise, WsProvider } = require("@polkadot/api");

const main = async () => {
  const provider = new WsProvider("wss://rpc.polkadot.io");
  const api = await ApiPromise.create({ provider });

  const [chain, nodeName, nodeVersion, getBlock] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
    api.rpc.chain.getBlock(),
  ]);

  console.log("<-- BlockInfo -->");
  console.log(
    `BlockInfo ${getBlock} of ${nodeName} v${nodeVersion} on ${chain}`
  );
};

main()
  .catch(console.error)
  .finally(() => process.exit());
