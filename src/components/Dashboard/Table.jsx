import { data } from "./DummyTableData"
import {Table as TableContainer} from 'react-bootstrap';

function Table() {
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
              <td className="px-2 py-1 text-sm">{item.complaint}</td>
              <td className="px-2 py-1 text-sm">{item.date}</td>
              <td className="px-2 py-1 text-sm">
                <span
                  className={`d-inline-block px-3 py-3 rounded-circle ${item.status}`}
                ></span>
              </td>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  );
}

export default Table