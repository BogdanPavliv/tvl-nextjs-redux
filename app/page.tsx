import Choose from "./components/choose";
import Countries from "./components/countries";
import About from "./components/about";
import Offers from "./components/offers";
import Adventures from "./components/adventures";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="main">
      <Choose/>
      <Countries/>
      <About/>
      <Offers/>
      <Adventures/>
      <Features/>
      <Testimonials/>
      <Blog/>
      <Contact/>
    </main>
  );
}
