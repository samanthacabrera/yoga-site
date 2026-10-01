import Hero from "./Hero";
import Channel from "./Channel";
import Philosophy from "./Philosphy";
import Spotify from "./Spotify";
import Newsletter from "./Newsletter";

function App() {
  return (
    <div className="h-screen md:overflow-hidden">
      <Hero
        channel={<Channel />}
        philosophy={<Philosophy />}
        spotify={<Spotify />}
        connect={<Newsletter />}
      />
    </div>
  );
}

export default App;