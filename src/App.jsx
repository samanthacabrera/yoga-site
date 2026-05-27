import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";
import Library from "./Library";
import Philosophy from "./Philosphy";
import Booking from "./Booking";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col max-w-5xl mx-4 lg:mx-auto space-y-60">
      <Header />
      <Hero />
      <Intro />
      <Library />
      <Philosophy />
      <Booking />
      <About />
      <Footer />
    </div>
  )
}

export default App
