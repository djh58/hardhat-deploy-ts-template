import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, DeployResult } from "hardhat-deploy/types";
import { BigNumber } from "ethers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const res: DeployResult = await deploy("Test", {
    from: deployer,
    log: true,
    autoMine: true,
  });
};
export default func;
func.tags = ["test"];
