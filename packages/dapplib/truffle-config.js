require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture strategy cruise museum unique gown light army gate'; 
let testAccounts = [
"0x382a06f1d7b86b5e381bd613215f89807c05f48ea6a5fe5f5309713d05497a10",
"0x459c17d72d841fa924c761cac9c42ebccaf8db93fbf064ad06f449d32971e931",
"0x7e630f64b4e8c24c6fc6a8f186ff9497dee01bb19441606aa2bd1dea285a0928",
"0x36cefcb762f863bf769d14ca88b69a0c313231d833f47d7db3fa7ddd58f448a1",
"0x4cd7dfd173abf4e8bf371da8a8601211d32e88083a69f01c70accfdb34dfc55c",
"0x065931f6a3ae454baa0f29b88378e7ccf90e56bc33ae906aae6f79f5983f8cef",
"0x4e0029ab93e0d9550c066764c4d64081af9e76b4dcb640cf412390ea76b95f39",
"0x98ddfa5cb839ee72af7ea902f4eeac038a15bfaa6db5fe16ea1c20b05520ea48",
"0x845a759fec4bf76bf1a1dd1487d92a28c505791bbf62675e0bafa14934c02a44",
"0x3d2e2c2549a9a5b7f66abe94872a95b83caa94edfe959a4028d33989a5b2f321"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
