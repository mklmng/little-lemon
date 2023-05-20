import './Chicago.css';
import marioandadriana from '../assets/mario-and-adrian-a.jpg';
import marioandadrianb from '../assets/mario-and-adrian-b.jpg';

export default function Chicago() {
  return (
    <article className="bg-about">
      <div className="about">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighbourhood bistro that serves simple food and classNameic cocktails ina lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="about-images">
        <img src={marioandadriana} alt="Mario and Adrian in the kitchen" />
        <img src={marioandadrianb} alt="Mario and Adrian" />
      </div>
    </article>
  );
}