import horario from "../lib/horarios.json";
import moment from "moment";

const SingleTable = ({ dia, diaN }) => {
  const now = moment().format("HH:mm");

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="border-b-2">
          <th className="w-1/3 border-r-2"></th>
          <th className="w-2/3 border-l-2">{dia}</th>
        </tr>
      </thead>
      <tbody>
        {horario.map((bloqueHora, i) =>
          moment(now, "HH:mm").isBetween(
            moment(bloqueHora[0].split("-")[0], "HH:mm"),
            moment(bloqueHora[0].split("-")[1], "HH:mm")
          ) ||
          moment(now, "HH:mm").isSame(
            moment(bloqueHora[0].split("-")[0], "HH:mm")
          ) ? (
            <tr key={i}>
              <td className="w-1/3 border-r-2 bg-white bg-opacity-20">
                {bloqueHora[0]}
              </td>
              <td className="w-2/3 border-l-2 bg-white bg-opacity-20">
                {bloqueHora[diaN]}
              </td>
            </tr>
          ) : (
            <tr key={i}>
              <td className="w-1/3 border-r-2">{bloqueHora[0]}</td>
              <td className="w-2/3 border-l-2">{bloqueHora[diaN]}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default SingleTable;
