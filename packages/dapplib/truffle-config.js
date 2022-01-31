require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture street cost mushroom purity hundred light army general'; 
let testAccounts = [
"0xb68b32af4de778d12e740eee7a99219869bd5cf19e6da1d6117ab7369d2d5643",
"0x06271ba60e8cd8412bd5c61345aee029c262c05a0dc57742428afd91710e88ab",
"0x1fbad1017e6030e9e5dc853609c21c3cbffa62f6db255c18cec06102b176dd4e",
"0xb1d1b1d7572d38b5d705197b55e8fc0035d4d8e13f1f5d388ad9ff1e973a7bf2",
"0x8970a0447509ca08e571a10930275f9119584a04577ec4dd587e3bdc1e8a320c",
"0x76530bfa52947dea1061019491b658454821c3fa4733a42e6422238fc9d7d54a",
"0x50cbffb18ec89f5e75120b827686c16ad178b6472443b066cebf169b6748a8a5",
"0x3cce27dd3bdac537f2232c02d28ab17967c5ec65fa6af110f473748434c8f02d",
"0xc9c7c5c48c8488dcfda79df5095315b1509acbdefb38a7bbf2cd6c5463ce8150",
"0x11cf5e7255878d54c12946a0141435abd50977f42f10e6194f80bb45100d547c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


