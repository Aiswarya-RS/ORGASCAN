const mongoose = require('mongoose');

const diagnosisSchema = new mongoose.Schema({
  patientName: String,
  disease: String,
  confidence: String,
  sha256Hash: String,
  blockNumber: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =
  mongoose.model(
    'Diagnosis',
    diagnosisSchema
  );