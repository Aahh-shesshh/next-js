import Navbar from "@/Main/navbar";

import { store } from "@/Store/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Loading from "@/Main/loading";
import Footer from "@/Main/footer";

export default function BaseLayout({ children }) {
  // const [showLoading, setShowLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoading(false);
  //   }, 2000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <Provider store={store}>
      <div>
        {/* <Navbar /> */}
        <div className="bg-black">{children}</div>
        <Footer />
      </div>
    </Provider>
  );
}
