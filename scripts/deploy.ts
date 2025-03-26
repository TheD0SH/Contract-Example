// scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("Lock.sol");
  const contract = await Contract.deploy(); // add constructor args if needed
  await contract.deployed();

  console.log("Deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
