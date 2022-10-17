import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

export { Layout };
