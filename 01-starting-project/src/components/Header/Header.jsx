import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const descript = reactDescriptions[getRandom(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descript} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

