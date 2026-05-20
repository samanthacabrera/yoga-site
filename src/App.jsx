import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Library from "./Library";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto space-y-20">
      <Header />
      <Hero />
      <About />
      <Library />
      <Footer />
    </div>
  )
}

export default App
