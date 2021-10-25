import { TeamsProvider } from "./TeamsProvider";
import { SessionProvider } from "./SessionProvider";
import Header from "./components/Header";
import TeamsFeed from "./components/TeamsFeed";
import Footer from "./components/Footer";


function App() 
{
  return (
    <SessionProvider>
      <TeamsProvider>
        <div className="container">
          <Header />
          <TeamsFeed />
          <Footer />
        </div>
      </TeamsProvider>
    </SessionProvider>
  );
}

export default App;
