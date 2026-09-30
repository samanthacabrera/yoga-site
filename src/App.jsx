import Hero from "./Hero";
import Channel from "./Channel";
import Philosophy from "./Philosphy";
import Spotify from "./Spotify";
import Footer from "./Footer";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Hero
        channel={<Channel />}
        philosophy={<Philosophy />}
        spotify={<Spotify />}
        connect={<Footer />}
      />
    </div>
  );
}

export default App;