import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";

function ChartPie() {
  const { token } = useAuth();
  const [complaintData, setComplaintData] = useState(null);

  useEffect(() => {
    const fetchComplaintData = async () => {
      try {
        if (!token) {
          return;
        }

        // Simulate API call to fetch complaint data
        const response = await axios.get(
          "https://api.govcomplain.my.id/admin/complaint",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const dataApi = [
          {
            id: 0,
            value: response.data.results.filter(
              (item) => item.status === "SEND"
            ).length,
            label: "SEND",
          },
          {
            id: 1,
            value: response.data.results.filter(
              (item) => item.status === "Diproses"
            ).length,
            label: "Diproses",
          },
          {
            id: 2,
            value: response.data.results.filter(
              (item) => item.status === "Selesai"
            ).length,
            label: "Selesai",
          },
        ];

        setComplaintData(dataApi);
      } catch (error) {
        console.error("Error fetching complaint data:", error);
      }
    };

    fetchComplaintData();
  }, [token]);

  return (
    <>
      {complaintData && (
        <PieChart
          height={200}
          series={[{ data: complaintData }]}
          colors={["red", "orange", "blue"]}
        />
      )}
    </>
  );
}

export default ChartPie;