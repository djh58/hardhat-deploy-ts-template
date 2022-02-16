# The best Hardhat Typescript Template

## Quickstart

- `yarn build` clears cache and compiles smart contracts
- `yarn hardhat --network [network name] deploy --tags [tag(s)]` runs the deploy scripts to the specified network with the specified tags
- `yarn hardhat test [test file(s)]` runs the unit tests specified
- `yarn size` reports the size of your compiled smart contracts in KB

## Tech used

This is a template to do EVM smart contract development with all my favorite toolings and no fluff:

### Typescript

Goes without saying, will make your developer experience so, so much better than vanilla JS

### Typechain

Generates typings for your contracts after compiling automatically (in `./typechain`)

### Hardhat-deploy

Allows for more modular deployments. See [their docs](https://github.com/wighawag/hardhat-deploy) for more on how to unleash its power

### Mocha, chai, chai-ethers, chai-as-promised

Allows for easy testing with improved compatability with asynchronous functions and smart contracts (reverts, BigNumber, etc.)

### Hadhat-contract-sizer

Size matters on the blockchain. See [their docs](https://github.com/ItsNickBarry/hardhat-contract-sizer) for configuration details, but you can simply run `yarn size` and you'll get a breakdown of how big each contract is.

### Prettier

Configured for both your Solidity and Typescript code

### .env parsing

In `./utils/config.ts` you can configure your environment variables to have default values so things don't break midway through your script because you forgot an environment variable.

### Hooks

#### Precommit

Via Husky, check styling

#### On PR

Check that contracts compile and tests pass
