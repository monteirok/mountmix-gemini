import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Cocktails from "./components/Cocktails";
import BookEventSection from "./components/BookEventSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative selection:bg-[var(--accent-gold)] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cocktails />
      <BookEventSection />
      <Footer />
    </main>
  );
}
