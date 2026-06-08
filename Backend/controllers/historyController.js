const Diagnosis =
    require('../models/Diagnosis');

async function getAllDiagnoses(req, res) {

    try {

        const diagnoses =
            await Diagnosis.find()
            .sort({ createdAt: -1 });

        res.status(200).json(
            diagnoses
        );

    } catch (error) {

        res.status(500).json({
            error:
                error.message
        });
    }
}

module.exports = {
    getAllDiagnoses
};