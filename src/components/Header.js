import "./Header.css";
import Nav from "./Nav";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <header>
      <div className="header-logo">
        <Link to="/" aria-label="Link to Homepage">
          <img src={logo} alt="Little Lemon logo" />
        </Link>
      </div>
      <Nav />
    </header>
  );
}