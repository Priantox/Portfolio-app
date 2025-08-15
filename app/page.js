'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Journey from "./components/Journey";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
      <Journey/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}
 