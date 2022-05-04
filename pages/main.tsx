import Intro from "@components/main/intro";
import Image from "next/image";
import { roadMap } from "@public/images";

const Main = () => {
  return (
    <div>
      <Intro />
      <Image src={roadMap} width={1920} height={1080} />
    </div>
  );
};

export default Main;
