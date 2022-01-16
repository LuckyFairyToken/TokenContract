LuckyFairy (FAE) Smart Contract

# Local deployment with Hardhat

## Prerequiste 
* Install Hardhat
```
npm install
npx hardhat node
```

## Deployment (Testnet)

* create .secrets.json from .secrets.json.example
* put first private key from hardat node inside testnetAccount variable
* if needed, add AVAX fuji testnet to metamask
* Make sure to replace the SushiSwap router address to the Fuji Testnet address in scripts/1_deploy_token.js

```
npx hardhat run --network testnet scripts/1_deploy_token.js --show-stack-traces
```

## Deployment (Mainnet)

* create .secrets.json from .secrets.json.example
* put first private key from your deployment wallet into mainnetAccount variable
* id needed, add AVAX mainnet to Metamask

```
npx hardhat run --network mainnet scripts/1_deploy_token.js --show-stack-traces
```