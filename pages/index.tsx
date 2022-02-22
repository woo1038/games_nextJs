import Router from "next/router";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Router.push("/multi");
  });

  return <></>;
};

export default Home;
