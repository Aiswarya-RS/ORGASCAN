const { ethers } = require('ethers');
const crypto = require('crypto');

const ABI = require('./DiagnosisStorage.json');

let provider, wallet, contract;

function initBlockchain() {

    provider =
        new ethers.providers.JsonRpcProvider(
            process.env.ETH_RPC_URL
        );

    wallet =
        new ethers.Wallet(
            process.env.PRIVATE_KEY,
            provider
        );

    contract =
        new ethers.Contract(
            process.env.CONTRACT_ADDRESS,
            ABI,
            wallet
        );

    console.log("Blockchain service initialized");
}

async function storeDiagnosisOnChain(diagnosisData) {

    const payload =
        JSON.stringify(diagnosisData);

    const sha256 =
        crypto.createHash('sha256')
        .update(payload)
        .digest('hex');

    const tx =
        await contract.storeDiagnosis(sha256);

    const receipt = await tx.wait();

    return {
        sha256Hash: sha256,
        txHash: receipt.hash,
        blockNumber: receipt.blockNumber
    };
}

module.exports = {
    initBlockchain,
    storeDiagnosisOnChain
};