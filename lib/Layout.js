import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* header component */}
      <Header />

      {/* middle component */}
      <div>{children}</div>
      {/* fotter component */}
      <Footer />
    </div>
  );
};

export default Layout;
