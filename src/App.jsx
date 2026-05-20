import Header from "./Header";
import About from "./About";
import Library from "./Library";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto space-y-20">
      <Header />
      <About />
      <Library />
      <Footer />
    </div>
  )
}

export default App
