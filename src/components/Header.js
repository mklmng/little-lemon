import "./Header.css";
import Nav from "./Nav";
import logo from "../assets/logo.svg"

export default function Gallery() {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <Nav />
    </header>
  );
}