# The best Hardhat Typescript Template
This is a template to do EVM smart contract development with all my favorite toolings and no fluff:

## Typescript
Goes without saying, will make your developer experience so, so much better than vanilla JS

## Typechain
Generates typings for your contracts after compiling automatically (in `./typechain`)

## Hardhat-deploy
Allows for more modular deployments. See (their docs)[https://github.com/wighawag/hardhat-deploy] for more on how to unleash its power

## Mocha, chai, chai-ethers, chai-as-promised
Allows for easy testing with improved compatability with asynchronous functions and smart contracts (reverts, BigNumber, etc.)

## Hadhat-contract-sizer
Size matters on the blockchain. See (their docs)[https://github.com/ItsNickBarry/hardhat-contract-sizer] for configuration details, but you can simply run `yarn size` and you'll get a breakdown of how big each contract is. 

## Prettier
Configured for both your Solidity and Typescript code 

## .env parsing
In `./utils/config.ts` you can configure your environment variables to have default values so things don't break midway through your script because you forgot an environment variable. 


