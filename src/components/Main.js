import hero from "../assets/restauranfood.jpg";
import greek_salad from "../assets/greek_salad.jpg";
import lemon_dessert from "../assets/lemon_dessert.jpg";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            eaque dolore nemo tempora mollitia harum praesentium aliquid porro
            optio a nam ab ea recusandae cum veritatis id, officia, sapiente
            consequuntur.
          </p>
          <a href="/reservations" className="cta">
            Reserve a table
          </a>
          <img src={hero} alt="Restaurant food" className="hero-image" />
        </article>
      </section>
      <section className="specials">
        <article>
          <div>
            <h2>Specials</h2>
            <a href="/menu" className="cta">
              Online Menu
            </a>
          </div>
          <div>
            <div className="card">
              <img src={greek_salad} alt="Greek salad" />
              <h3>Greek salad</h3>
              <p>$12.99</p>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="/">Order a delivery</a>
              <img src="" alt="bike icon" />
            </div>
            <div className="card">
              <img src="" alt="Bruschetta" />
              <h3>Bruschetta</h3>
              <p>$5.99</p>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="/">Order a delivery</a>
              <img src="" alt="bike icon" />
            </div>
            <div className="card">
              <img src={lemon_dessert} alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3>
              <p>$5.00</p>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="/">Order a delivery</a>
              <img src="" alt="bike icon" />
            </div>
          </div>
        </article>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <article>
          <h3>Rating</h3>
          <img src="https://place-hold.it/47x47/" alt="testimonial 1" />
          <span>Name</span>
          <p>Review text</p>
        </article>
        <article>
          <h3>Rating</h3>
          <img src="https://place-hold.it/47x47/" alt="testimonial 2" />
          <span>Name</span>
          <blockquote>Review text</blockquote>
        </article>
        <article>
          <h3>Rating</h3>
          <img src="https://place-hold.it/47x47/" alt="testimonial 3" />
          <span>Name</span>
          <blockquote>Review text</blockquote>
        </article>
        <article>
          <h3>Rating</h3>
          <img src="https://place-hold.it/47x47/" alt="testimonial 4" />
          <span>Name</span>
          <blockquote>Review text</blockquote>
        </article>
      </section>
      <section className="about">
        <article>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit.
            </p>
          </div>
          <div>
            <img src="https://place-hold.it/276x338/" alt=""/>
            <img src="https://place-hold.it/276x338/" alt=""/>
          </div>
        </article>
      </section>
    </main>
  );
}
