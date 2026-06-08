import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [diagnoses, setDiagnoses] =
    useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res =
        await axios.get(
          "http://localhost:5000/api/history",
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setDiagnoses(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="history-card">

      <h2>
        Diagnosis History
      </h2>

      <table>

        <thead>
          <tr>
            <th>Patient</th>
            <th>Disease</th>
            <th>Confidence</th>
            <th>Block</th>
          </tr>
        </thead>

        <tbody>

          {diagnoses.map(
            (item) => (

              <tr key={item._id}>

                <td>
                  {item.patientName}
                </td>

                <td>
                  {item.disease}
                </td>

                <td>
                  {item.confidence}
                </td>

                <td>
                  {item.blockNumber}
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default History;