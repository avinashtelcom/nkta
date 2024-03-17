// components
import { Navbar, Footer } from "../components";
import AboutEvent from "./about-event";

// sections
import Hero from "./hero";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <Footer />
    </>
  );
}
