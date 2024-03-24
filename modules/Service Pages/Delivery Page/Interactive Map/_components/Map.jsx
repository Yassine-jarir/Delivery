import Image from "next/image";
import Link from "next/link";

// icons
import MapPic from "@/public/images/Icons/DeliveryIcons/icon14.svg";
import PositionIcon from "@/public/images/Icons/DeliveryIcons/icon15.svg";

export default function Map({ translation }) {
  // const data = [
  //   {
  //     x: "350",
  //     y: "15",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Tanger",
  //   },
  //   {
  //     x: "220",
  //     y: "210",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Agadir",
  //   },
  //   {
  //     x: "220",
  //     y: "150",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Casa blanca",
  //   },
  //   {
  //     x: "455",
  //     y: "70",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Undefined",
  //   },
  //   {
  //     x: "350",
  //     y: "160",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Undefined",
  //   },
  //   {
  //     x: "200",
  //     y: "300",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Undefined",
  //   },
  //   {
  //     x: "100",
  //     y: "350",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Undefined",
  //   },
  //   {
  //     x: "40",
  //     y: "450",
  //     xMobile: "",
  //     yMobile: "",
  //     city: "Undefined",
  //   },
  // ];
  return (
    <div className="relative">
      <Image
        src={MapPic}
        className="sm:min-w-[550px] sm:w-[550px] min-w-[350px] w-[350px]"
        alt="Map"
      />
      {/* {data?.map((item, key) => (
        <div
          key={key}
          className={`group absolute sm:left-[${item?.x}px] sm:top-[${item?.y}px] left-[${item?.xMobile}px] top-[${item?.yMobile}px]`}
        >
          <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
            {item?.city}
          </span>
          <button>
            <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
          </button>
        </div>
      ))} */}

      <div
        className={`group absolute sm:left-[350px] sm:top-[15px] left-[220px] top-[10px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.tangier}
        </span>
        <Link href="https://maps.app.goo.gl/4m1sSmwsS5KtReZDA" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[455px] sm:top-[70px] left-[290px] top-[45px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.oujda}
        </span>
        <Link href="https://maps.app.goo.gl/cFK3kiZUmXTGVMXR9" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[350px] sm:top-[160px] left-[230px] top-[100px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.zagora}
        </span>
        <Link href="https://maps.app.goo.gl/x6HUkxXYLKnxP2d8A" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[200px] sm:top-[300px] left-[130px] top-[190px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.guelmim}
        </span>
        <Link href="https://maps.app.goo.gl/TEJprBu2DfYfqDUz6" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[220px] sm:top-[150px] left-[140px] top-[95px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.casablanca}
        </span>
        <Link href="https://maps.app.goo.gl/uYHVgEm36ZYMrTYy6" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[220px] sm:top-[210px] left-[140px] top-[135px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.agadir}
        </span>
        <Link href="https://maps.app.goo.gl/bn39PihTnTLqihTz8" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[100px] sm:top-[350px] left-[60px] top-[220px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.laayoune}
        </span>
        <Link href="https://maps.app.goo.gl/etSRrUTKiDvrVD8y8" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>

      <div
        className={`group absolute sm:left-[40px] sm:top-[450px] left-[25px] top-[280px]`}
      >
        <span className="hidden group-hover:block text-[var(--main-blue-color)] sm:text-lg text-sm absolute sm:right-[60px] right-[40px] top-[50%] -translate-y-[50%] text-nowrap">
          {translation?.dakhla}
        </span>
        <Link href="https://maps.app.goo.gl/7RrshaoE5tJ5fYnd6" target="_blank">
          <Image src={PositionIcon} className="sm:w-16 w-10" alt="position" />
        </Link>
      </div>
    </div>
  );
}
