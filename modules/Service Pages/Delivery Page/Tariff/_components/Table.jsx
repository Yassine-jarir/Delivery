import styles from "@/styles/Service page/Delivery Page/Tariff/scrollBar.module.css";

export default function Table({ isRTL, translation }) {
  const tariff = [
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
    {
      col1: "Ville",
      col2: "0 DH",
      col3: "0 DH",
    },
  ];
  return (
    <div
      className={`max-w-[1100px] md:rounded-[30px] rounded-[20px] overflow-x-auto relative text-white font-light ${styles.scrollbar}`}
    >
      <table className={`table-fixed text-center w-full`}>
        <thead className="block border-b border-white">
          <tr>
            <th
              scope="col"
              className={`w-full md:min-w-[350px] min-w-[180px] font-light md:text-2xl sm:text-xl text-base bg-darkBlue sm:p-5 p-3 ${
                isRTL ? "border-l" : "border-r"
              } border-solid border-white`}
            >
              {translation?.cities}
            </th>
            <th
              scope="col"
              className={`w-full md:w-[350px] md:min-w-[350px] min-w-[180px] font-light md:text-2xl sm:text-xl text-base bg-darkBlue sm:px-5 px-3 ${
                isRTL ? "border-l" : "border-r"
              } border-solid border-white`}
            >
              {translation?.delivery_price}
            </th>
            <th
              scope="col"
              className={`w-full md:w-[375px] md:min-w-[375px] min-w-[205px] font-light md:text-2xl sm:text-xl text-base bg-darkBlue sm:px-5 px-3`}
            >
              {translation?.return_price}
            </th>
          </tr>
        </thead>
        <tbody
          className={`max-h-[500px] w-full min-w-fit block overflow-y-auto ${styles.scrollbar}`}
        >
          {tariff.map((tarif, key) => {
            return (
              <tr
                key={key}
                className="border-y border-solid border-white md:text-2xl sm:text-xl text-base"
              >
                <td
                  scope="row"
                  className={`w-full md:min-w-[350px] min-w-[180px] py-3 bg-darkBlue ${
                    isRTL ? "border-l" : "border-r"
                  } border-solid border-white`}
                >
                  {tarif.col1}
                </td>
                <td
                  className={`md:w-[350px] md:min-w-[350px] min-w-[180px] bg-orange ${
                    isRTL ? "border-l" : "border-r"
                  } border-solid border-white`}
                >
                  {tarif.col2}
                </td>
                <td
                  className={`md:w-[350px] md:min-w-[350px] min-w-[180px] bg-orange`}
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
