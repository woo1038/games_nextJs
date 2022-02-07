import Router from "next/router";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Router.push("/login");
  });

  return <></>;
};

export default Home;
