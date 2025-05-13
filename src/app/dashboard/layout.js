import React from "react";
import Layout from "./component/Layout";

function layout({ children }) {
  return (
    <>
      {/* <main>{children}</main> */}
      <Layout>{children}</Layout>
    </>
  );
}

export default layout;
