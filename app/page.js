import About from "../components/homepage/About";
import Banner from "../components/homepage/Banner";
import Experience from "../components/homepage/Experience";
import Footer from "../components/homepage/Footer";
import Header from "../components/homepage/Header";
import Projects from "../components/homepage/Projects";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50 text-slate-900">
      <Header />
      <Banner />
      <Experience />
            <Projects />

      <About />
      <Footer />
    </main>
  );
}