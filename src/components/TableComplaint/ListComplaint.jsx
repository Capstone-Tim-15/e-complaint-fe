import { Icon } from "@iconify/react";
export default function ListComplaint(props) {
  const { komplain, onEditModal } = props;

  return (
    <>
      <tr className="header-row" key={komplain.id}>
        <td>
          <div className="d-flex">
            <div className="align-self-center">
              <img src={komplain.profil} className="rounded-circle "></img>
            </div>
            <p className="ms-1 fw-bold">{komplain.name}</p>
          </div>
        </td>
        <td id="desk">{komplain.description}</td>
        <td>{komplain.category}</td>
        <td>{komplain.date}</td>
        <td id="state">
          <div className={`text-center p-1 px-2 me-3 text-white rounded-5 self-center ${komplain.state === "Proses" ? "bg-warning" : "bg-success"}`}>{komplain.state}</div>
        </td>
        <td>
          <button onClick={onEditModal}>
            <Icon icon="uil:edit" width="35" height="35" style={{ marginRight: "1.5rem" }} />
          </button>
          <button>
            <Icon icon="mdi:trash-can-outline" width="35" height="35" />
          </button>
        </td>
      </tr>
    </>
  );
}
