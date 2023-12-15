import { useEffect, useState } from "react";
import axios from "axios";
import { Table as TableContainer } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";


function Table() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.govcomplain.my.id/admin/complaint",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const formattedData = response.data.results.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt).toLocaleDateString("en-GB"),
        }));

        setData(formattedData.slice(0, 5));
      } catch (error) {
        console.error("Error fetching notification data:", error);
      }
    };
    fetchData();
  }, [token, navigate]);

    const getStatusColor = (status) => {
      switch (status) {
        case "SEND":
          return "bg-danger";
        case "Diproses":
          return "bg-warning";
        case "Selesai":
          return "bg-primary";
        default:
          return "";
      }
    };

  return (
    <TableContainer bordered hover>
      <thead className="bg-secondary">
        <tr>
          <th
            scope="col"
            className="px-2 py-1 text-center text-xs font-semibold text-secondary uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-2 py-1 text-center text-xs font-semibold text-secondary uppercase tracking-wider"
          >
            Nama Pengguna
          </th>
          <th
            scope="col"
            className="px-2 py-1 text-center text-xs font-semibold text-secondary uppercase tracking-wider"
          >
            Keluhan
          </th>
          <th
            scope="col"
            className="px-2 py-1 text-center text-xs font-semibold text-secondary uppercase tracking-wider"
          >
            Tanggal
          </th>
          <th
            scope="col"
            className="px-2 py-1 text-center text-xs font-semibold text-secondary uppercase tracking-wider"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              <td className="px-2 py-1 text-sm">{item.id}</td>
              <td className="px-2 py-1 text-sm">{item.name}</td>
              <td className="px-2 py-1 text-sm">{item.content}</td>
              <td className="px-2 py-1 text-sm">{item.createdAt}</td>
              <td className="px-2 py-1 text-sm">
                <span
                  className={`d-inline-block px-3 py-3 rounded-circle ${getStatusColor(
                    item.status
                  )}`}
                ></span>
              </td>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  );
}

export default Table;
