import React from "react";
import "./layout.css";
import MyHeader from "../components/myHeader/MyHeader";
import CardConvert from "../components/cardConvert/CardConvert";
import MyFooter from "../components/myFooter/MyFooter";

const Layout = () => {
  return (
    <>
      <MyHeader />
      <section className="container-general">
        <CardConvert />
      </section>
      <MyFooter />
    </>
  );
};

export default Layout;
