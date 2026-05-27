import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Library from "./Library";
import Philosophy from "./Philosphy";
import Booking from "./Booking";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col max-w-5xl mx-4 lg:mx-auto space-y-60">
      <Header />
      <Hero />
      <About />
      <Library />
      <Philosophy />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
