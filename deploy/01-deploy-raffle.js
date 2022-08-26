const { getNamedAccounts, deployments, network } = require("hardhat")

// deploy/00_deploy_my_contract.js
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    await deploy("MyContract", {
        from: deployer,
        args: ["Hello"],
        log: true,
    })
}
module.exports.tags = ["MyContract"]
