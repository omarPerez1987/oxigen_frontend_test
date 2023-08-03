import React from "react";
import "./layout.css";
import MyHeader from "../components/myHeader/MyHeader";
import CardConvert from "../components/cardConvert/CardConvert";
import CardSaved from "../components/cardSaved/CardSaved";
import MyFooter from "../components/myFooter/MyFooter";

const Layout = () => {
  return (
    <>
      <MyHeader />
      <section className="container-general">
        <main className="main-convert">
          <h2>convert</h2>
          <CardConvert />
        </main>
        <aside>
          <h3 className="title-saved">saved</h3>
          <section className="container-saved">
            <CardSaved />
            <CardSaved />
            <CardSaved />
            <CardSaved />
            <CardSaved />
          </section>
        </aside>
      </section>
      <MyFooter />
    </>
  );
};

export default Layout;
