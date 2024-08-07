import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-bgColor">
      <Header />
      <main >
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
