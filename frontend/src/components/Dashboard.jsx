import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [total, setTotal] = useState(0);
  const [latestBlock, setLatestBlock] = useState(0);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/history",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setTotal(res.data.length);

      if (res.data.length > 0) {

        setLatestBlock(
          res.data[0].blockNumber
        );

      }

    } catch (error) {

      console.log(error);

    }
  };

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href =
      "/login";

  };

  return (
    <div>

      <button
        onClick={logout}
        style={{
          float: "right",
          margin: "20px"
        }}
      >
        Logout
      </button>

      <div className="stats">

        <div className="stat-card">

          <h3>Total Diagnoses</h3>

          <h1>{total}</h1>

        </div>

        <div className="stat-card">

          <h3>Latest Block</h3>

          <h1>{latestBlock}</h1>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;