import { ethers, deployments, getNamedAccounts } from "hardhat";
import { expect } from "./chai-setup";
import { Signer } from "ethers";

describe("Unit Tests", () => {
  let deployer: Signer;
  let signers: Signer[];
  let user1: Signer;
  let user2: Signer;
  let user3: Signer;
  beforeEach("Deploy and initialize", async () => {
    // do stuff here
  });

  describe("more stuff", () => {
    it("unit test", async () => {
      // blah blah blah
    });
  });
});
