const {
    storeDiagnosisOnChain
} = require('../blockchain/blockchain');

const Diagnosis =
    require('../models/Diagnosis');

async function storeDiagnosis(req, res) {

    try {

        const diagnosisData =
            req.body;

        const blockchainResult =
            await storeDiagnosisOnChain(
                diagnosisData
            );

        const diagnosis =
            new Diagnosis({

                patientName:
                    diagnosisData.patientName,

                disease:
                    diagnosisData.disease,

                confidence:
                    diagnosisData.confidence,

                sha256Hash:
                    blockchainResult.sha256Hash,

                blockNumber:
                    blockchainResult.blockNumber
            });

        await diagnosis.save();

        res.status(200).json({
            success: true,
            result: blockchainResult
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = {
    storeDiagnosis
};