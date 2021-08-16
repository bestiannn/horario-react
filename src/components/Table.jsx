import SwipeableViews from "react-swipeable-views";
import horario from "../lib/horarios.json";
import useWindowSize from "../hooks/useWindowSize";
import SingleTable from "./SingleTable";
import moment from "moment";
import { useState } from "react";

const Table = () => {
  const size = useWindowSize();

  const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const diasFull = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const [actualMoment, setActualMoment] = useState(moment().format("HH:mm"));
  const f = new Date();

  setInterval(() => {
    setActualMoment(moment().format("HH:mm"));
  }, 1000);

  const indiceDia =
    diasSemana.indexOf(diasFull[f.getDay()]) !== -1
      ? diasSemana.indexOf(diasFull[f.getDay()])
      : 0;

  const swipeableHeight = {
    height: `${size.height / 1.2}px`,
    minHeight: "400px",
  };

  return (
    <div className="mt-2 md:mt-5 mx-auto w-full 2xl:w-5/6 select-none">
      {size.width >= 768 ? (
        <table className="table-fixed w-full bg-black bg-opacity-70 text-center font-sans text-white">
          <thead className="bg-indigo-500">
            <tr>
              <th className="w-hora"></th>
              <th className="w-ramo">Lunes</th>
              <th className="w-ramo">Martes</th>
              <th className="w-ramo">Miercoles</th>
              <th className="w-ramo">Jueves</th>
              <th className="w-ramo">Viernes</th>
            </tr>
          </thead>
          <tbody>
            {horario.map((bloqueHora, id) =>
              moment(actualMoment, "HH:mm").isBetween(
                moment(bloqueHora[0].split("-")[0], "HH:mm"),
                moment(bloqueHora[0].split("-")[1], "HH:mm")
              ) ||
              moment(actualMoment, "HH:mm").isSame(
                moment(bloqueHora[0].split("-")[0], "HH:mm")
              ) ? (
                <tr key={id} className="bg-white bg-opacity-25">
                  {bloqueHora.map((ramos, id) => (
                    <td key={id} className="">
                      {ramos}
                    </td>
                  ))}
                </tr>
              ) : (
                <tr key={id} className="hover:bg-white hover:bg-opacity-25">
                  {bloqueHora.map((ramos, id) => (
                    <td key={id} className="">
                      {ramos}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <SwipeableViews
          enableMouseEvents
          index={indiceDia}
          className="w-full select-none"
          style={swipeableHeight}
        >
          {diasSemana.map((dia, index) => (
            <div
              key={index + 1}
              className="p-10 w-full text-white text-sm sm:text-lg text-center bg-black bg-opacity-60 rounded-3xl"
              style={swipeableHeight}
            >
              <SingleTable dia={dia} diaN={index + 1} />
            </div>
          ))}
        </SwipeableViews>
      )}
    </div>
  );
};

export default Table;
