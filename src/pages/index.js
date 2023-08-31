import Mainbody from "@/Main/mainbody";
import Projects from "@/Main/projects";
import Skills from "@/Main/skills";
import BaseLayout from "@/layout/base-layout";
import About from "@/Main/about";
import Contact from "@/Main/contact";
import Navbar from "@/Main/navbar";
import { useState } from "react";
import Loading from "@/Main/loading";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  setTimeout(() => {
    setShowLoader(false);
  }, 4000);
  return (
    <main>
      {showLoader ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Mainbody />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </>
      )}
    </main>
  );
}

Home.Layout = BaseLayout;
