import Header from "./Header";
import Hero from "./Hero";
import Channel from "./Channel";
import Library from "./Library";
import Philosophy from "./Philosphy";
import Readings from "./Readings";
import Spotify from "./Spotify";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col max-w-4xl mx-4 lg:mx-auto space-y-40">
      <Header />
      <Hero />
      {/* <Channel /> */}
      {/* <Library /> */}
      <Philosophy />
      <Readings />
      <Spotify />
      <About />
      <Footer />
    </div>
  )
}

export default App
