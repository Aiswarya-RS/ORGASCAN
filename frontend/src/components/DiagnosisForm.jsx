import { useState } from "react";
import axios from "axios";

function DiagnosisForm() {

  const [patientName, setPatientName] = useState("");
  const [disease, setDisease] = useState("");
  const [confidence, setConfidence] = useState("");
  const [response, setResponse] = useState(null);

  const submitDiagnosis = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/diagnosis/store",
        {
          patientName,
          disease,
          confidence
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setResponse(res.data);

    } catch (error) {

      console.log(error);

      alert("Error storing diagnosis");

    }
  };

  return (
    <div>

      <h2>Store Diagnosis</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) =>
          setPatientName(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Disease"
        value={disease}
        onChange={(e) =>
          setDisease(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Confidence"
        value={confidence}
        onChange={(e) =>
          setConfidence(e.target.value)
        }
      />

      <br /><br />

      <button onClick={submitDiagnosis}>
        Store on Blockchain
      </button>

      {response && (
        <div>

          <h3>Blockchain Result</h3>

          <p>
            Hash: {response.result.sha256Hash}
          </p>

          <p>
            Block: {response.result.blockNumber}
          </p>

        </div>
      )}

    </div>
  );
}

export default DiagnosisForm;