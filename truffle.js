/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider"); 

var infura_apikey = "*********";   // put your apikey here
var mnemonic = "**********";       // puy your MetaMask words string here

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }, 
  networks: { 
    development: { 
      host: "localhost", 
      port: 7545, 
      network_id: "*" // Match any network id 
    }, 
    ropsten: { 
  	  provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey), 
  	  gas: 1750786,
  	  gasPrice: 41*10**9,
  	  network_id: 3
    } 
  } 
};
