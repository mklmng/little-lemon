import logo from '../assets/logo.svg';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo"/>
      <Nav />
    </header>
  )
}