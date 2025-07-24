import { Navbar } from "./components/navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
