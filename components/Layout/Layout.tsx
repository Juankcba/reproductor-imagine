import React, { FC, Fragment, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <main className=" min-h-screen"> {children}</main>
    </Fragment>
  );
};

export default Layout;
