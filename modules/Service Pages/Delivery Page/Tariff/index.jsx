import styles from "@/styles/Service page/Delivery Page/Tariff/mainBG.module.css";

// components
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Table from "./_components/Table";
import Card from "./_components/Card";
import Description from "./_components/Description";

function index({ isRTL, translation }) {
  return (
    <>
      <div
        className={`${styles.mainBG} flex flex-col items-center gap-10 py-10 sm:px-5 px-2`}
      >
        <Header translation={translation?.title} />
        <Card translation={translation?.card} />
        <Description translation={translation?.description} />
        <Table isRTL={isRTL} translation={translation?.table} />
      </div>
      <Footer translation={translation?.footer} />
    </>
  );
}

export default index;
