import style from "@/styles/Service page/WareHouse Page/scrollBar.module.css";

export default function index({ translation }) {
  const tariff = [
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "100 m / 0 DH",
      col2: "0 DH",
      col3: "0 DH",
    },
  ];
  return (
    <div
      className={`max-w-[850px] md:rounded-[30px] rounded-[20px] overflow-x-auto relative text-white font-light ${style.scrollbar}`}
    >
      <table className={`table-fixed text-center w-full`}>
        <thead className="block border-b border-white">
          <tr>
            <th
              scope="col"
              className={`w-full min-w-[180px] font-light sm:text-xl text-base bg-darkBlue sm:p-5 p-3 border-r border-solid border-white`}
            >
              {translation?.storage_space}
            </th>
            <th
              scope="col"
              className={`md:w-[250px] md:min-w-[250px] min-w-[180px] font-light sm:text-xl text-base bg-orange sm:px-5 px-3 border-r border-solid border-white`}
            >
              {translation?.order_preparation_costs}
            </th>
            <th
              scope="col"
              className={`md:w-[272px] md:min-w-[272px] min-w-[202px] font-light sm:text-xl text-base bg-darkBlue sm:px-5 px-3`}
            >
              {translation?.inventory_tracking_services}
            </th>
          </tr>
        </thead>
        <tbody
          className={`max-h-[500px] w-full min-w-fit block overflow-y-auto ${style.scrollbar}`}
        >
          {tariff.map((tarif, key) => {
            return (
              <tr
                key={key}
                className="border-y border-solid border-white sm:text-xl text-base"
              >
                <td
                  scope="row"
                  className={`w-full min-w-[180px] py-3 bg-darkBlue border-r border-solid border-white`}
                >
                  {tarif.col1}
                </td>
                <td
                  className={`md:w-[250px] md:min-w-[250px] min-w-[180px] bg-orange border-r border-solid border-white`}
                >
                  {tarif.col2}
                </td>
                <td
                  className={`md:w-[250px] md:min-w-[250px] min-w-[180px] bg-darkBlue`}
                >
                  {tarif.col3}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
