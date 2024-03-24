"use client";
// import Atropos component
import Atropos from "atropos/react";
import "atropos/css";

function Table({ translation }) {
  const tableData = [
    { service: "SERVICE", price: "0 DH" },
    { service: "SERVICE", price: "0 DH" },
    { service: "SERVICE", price: "0 DH" },
    { service: "SERVICE", price: "0 DH" },
  ];
  return (
    <Atropos activeOffset={20} shadowScale={0}>
      <table className="table-fixed w-full max-w-[500px] min-w-[270px] ">
        <thead className="text-white">
          <tr className="border-b-[3px] border-darkBlue">
            <th className="bg-orange py-2 font-light uppercase">
              {translation?.service}
            </th>
            <th className="bg-white/10 py-2 font-light uppercase">
              {translation?.price}
            </th>
          </tr>
        </thead>
        <tbody className="border border-darkBlue text-orange font-light">
          {tableData.map((row, index) => (
            <tr key={index} className="border-b-[3px] border-darkBlue">
              <td className="bg-white text-center py-2 uppercase">
                {row.service}
              </td>
              <td className="bg-[#ffd9ca] text-center py-2 uppercase">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Atropos>
  );
}

export default Table;
