import React from "react";
import About from "../About/About";
import About2 from "../About/About_data2";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Projects2 from "../Projects/Projects2";
import "./Home.css";

function Home() {
  return (
    <div className="whole__container">
      <Navbar />
      {/* <Intro /> */}
      {/* <About/> */}
      {/* <Projects /> */}
      <About2 />
      <Projects2 />
      <Footer />
    </div>
  );
}

export default Home;
