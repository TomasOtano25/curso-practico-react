import React, { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const Layout: FC<PropsWithChildren> = () => {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
    </div>
  );
};

export { Layout };
