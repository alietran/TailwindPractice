import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
