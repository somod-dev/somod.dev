import { FunctionComponent } from "react";
import { Meta } from "../components/Meta";
import { Menu } from "../components/Menu";
import { Slide1 } from "../components/Slide1";
import { Slide2 } from "../components/Slide2";

const Index: FunctionComponent = () => {
  const title = "SOMOD | Serverless Optimized Modules";
  const description =
    "An open-source toolchain for serverless applications. Develop serverless applications in modules and compose them to create bigger solutions";

  return (
    <>
      <Meta meta={{ title, meta: { description } }} />
      <Menu />
      <Slide1 />
      <Slide2 />
    </>
  );
};

export default Index;
