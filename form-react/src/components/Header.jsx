import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
      <a href="#">React with useState and useRef and custom hooks and its applications.</a>
    </header>
  );
}
