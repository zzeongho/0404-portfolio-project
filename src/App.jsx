import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
