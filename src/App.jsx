import Header from "./Header";
import Hero from "./Hero";
import Library from "./Library";
import Philosophy from "./Philosphy";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col max-w-4xl mx-4 lg:mx-auto space-y-60">
      <Header />
      <Hero />
      <Library />
      <Philosophy />
      <About />
      <Footer />
    </div>
  )
}

export default App
