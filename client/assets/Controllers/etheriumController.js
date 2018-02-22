app.controller('etheriumController', function ($scope) {
    $scope.name = 'etheriumController';

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];
    const ABI = [
        {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "Guess",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        }
    ]
    var SmartContractABI = web3.eth.contract(ABI);
    var SmartContract = SmartContractABI.at('0x8755003810d7511ed1c743ff768c21a8e9ec8f83');

    console.log(SmartContract);


    $scope.Guess = (Number) => {
        console.log(Number)
        SmartContract.Guess(Number,(err,result)=>{
            if(err){
                console.log(err)
            } else {
                console.log('Transferring Eth')
            }
        })
     }
})
