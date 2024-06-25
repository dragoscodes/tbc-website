import { Text } from "@/app/components/text";
import Image from "next/image";

const Statistic = () => {
  //I had no better idea, it doesn't look so good. If you have a better idea, please let me know.
  return (
    <section
      className={
        "w-full flex flex-col lg:flex-row justify-center items-center xl:items-start gap-12 relative"
      }
    >
      <div className="absolute top-1/2 -left-1/4 w-[60%] h-[60%] z-[-1] transform -translate-y-1/2 lg:block hidden">
        <Image
          src="./shapes/46.png"
          alt="Left Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute top-1/2 -right-1/4 w-[60%] h-[60%] z-[-1] transform -translate-y-1/2 lg:block hidden">
        <Image
          src="./shapes/47.png"
          alt="Right Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 w-full h-[60%] z-[-1] transform -translate-x-1/2 -translate-y-1/2 lg:hidden block">
        <Image
          src="./shapes/91.png"
          alt="Mobile Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className={"lg:w-[50%] flex flex-col gap-12 items-center"}>
        <div className={"lg:w-[50%] text-center mt-8"}>
          <Text textType={"sub_title"} className={""}>
            Last Year Statistic
          </Text>
        </div>
        <div className={"flex flex-col gap-2 items-center"}>
          <Text className={""} textType={"sub_hero"}>
            1000+
          </Text>
          <Text textType={"sub_title"}>Attendees</Text>
        </div>
        <div className={"flex flex-col gap-2 items-center"}>
          <Text className={""} textType={"sub_hero"}>
            100+
          </Text>
          <Text textType={"sub_title"}>Speakers</Text>
        </div>
        <div className={"flex flex-col gap-2 items-center"}>
          <Text className={""} textType={"sub_hero"}>
            40+
          </Text>
          <Text textType={"sub_title"}>Talks</Text>
        </div>
        <div className={"flex flex-col gap-2 items-center"}>
          <Text className={""} textType={"sub_hero"}>
            20+
          </Text>
          <Text textType={"sub_title"}>Sponsors</Text>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
