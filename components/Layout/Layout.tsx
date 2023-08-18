import React, { FC, Fragment, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <div>Header</div>
      <main className=" min-h-screen"> {children}</main>
      <footer>Footer</footer>
    </Fragment>
  );
};

export default Layout;
