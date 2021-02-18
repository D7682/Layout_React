import React from "react";
import "./Layout.css";
import { Header, Content, Menu, Footer } from "./PageComponents";

export default function Layout() {
  return (
    <div className="grid">
      <div className="header">
        <Header />
      </div>
      {/*
        <div className="menu">
          <Menu />
        </div>
        */}
      <div className="content">
        <Content />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
