import Image from "next/image";

// icons
import aboutImage from "@/public/images/IMG/IMG 2.webp";

function AboutPicture({ isRTL }) {
  return (
    <>
      <div
        className={`bg-orange relative flex items-center ${
          isRTL ? "scale-x-[-1]" : "scale-x-1"
        }`}
      >
        <div className="w-[100%] lg:h-[250px] h-[200px] lg:w-[400px] xl:w-[550px] xl:h-[400px]  flex items-center justify-center 2xl:w-[630px]">
          <Image
            src={aboutImage}
            className="w-full absolute max-w-[600px] sm:top-[-150px] -top-[130px] lg:top-auto lg:max-w-[650px] lg:w-[523px] lg:right-[-131px;] xl:right-[-160px;] xl:w-[630px] "
            alt="Ameex Truck"
          />
        </div>
      </div>
    </>
  );
}

export default AboutPicture;
