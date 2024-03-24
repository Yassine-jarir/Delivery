import Info from "./Info";

function Infos({ translation }) {
  const infos = [
    {
      number: 268,
      title: translation?.satisfied_customers,
    },
    {
      number: 4,
      title: translation?.proposed_services,
    },
    {
      number: 258,
      title: translation?.dedicated_team,
    },
    {
      number: 5,
      title: translation?.experience_in_industry,
      span: translation?.years,
    },
    {
      number: 80,
      title: translation?.destinations_served,
    },
    {
      number: 95,
      title: translation?.delivery_rate,
      span: "%",
    },
    {
      number: 27,
      title: translation?.strategic_partnerships,
    },
    {
      number: 120,
      title: translation?.active_marketplace,
      span: translation?.sellers,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-start max-lg:w-full lg:max-w-[450px] py-4 sm:gap-x-5 gap-2 max-w-[400px] gap-y-0 border-2 border-solid border-white rounded-3xl">
      {infos?.map((item, key) => {
        return <Info key={key} information={item} />;
      })}
    </div>
  );
}

export default Infos;
