import React, { FC, Fragment, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <main className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
        {" "}
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
