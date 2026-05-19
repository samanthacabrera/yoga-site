import Header from "./Header";
import About from "./About";
import Library from "./Library";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col space-y-20">
      <Header />
      <About />
      <Library />
      <Footer />
    </div>
  )
}

export default App
