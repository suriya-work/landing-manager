import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from './components/hero-section/HeroSection';
const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[80px_1fr_auto] bg-bgColor">
      <Header />
      {/* <HeroSection /> */}
      <main>
        HeroSection
      </main>
      <Footer />
    </div>
  );
};

export default App;
