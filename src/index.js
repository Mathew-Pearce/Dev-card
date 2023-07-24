import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    name: "HTML5",
    level: "❤️",
    color: "cyan",
  },
  {
    name: "CSS3",
    level: "✌️",
    color: "red",
  },
  {
    name: "NODEJS",
    level: "🧠",
    color: "lime",
  },
  {
    name: "MongoDb",
    level: "📈",
    color: "hotpink",
  },
  {
    name: "React",
    level: "❄️",
    color: "lavender",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="mountains.jpg" alt="My face" />;
}
function Intro() {
  return (
    <div>
      <h1 className="h1">Mathew Pearce</h1>
      <p>
        Full stack web developer in training from Leicester, UK. When not
        learning web development Mathew studies psychology and the social
        sciences. A father of 6 amazing children, and entrepenure.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.name} color={skill.color} level={skill.level} />
      ))}
    </ul>
  );
}

function Skill({ color, name, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {name} {level}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
