import './Main.css';
import Hero from './Hero';
import Highlights from './Highlights';
import About from './About';
import Testimonials from './Testimonials';

export default function Main() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  )
}