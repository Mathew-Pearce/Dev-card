import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return <img className="avatar" src="meFace.jpg" alt="My face" />;
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
    <div className="skill-list">
      <Skill name="HTML5" emoji="❤️" myColor="cyan" />
      <Skill name="CSS3" emoji="✌️" myColor="red" />
      <Skill name="NODEJS" emoji="🧠" myColor="lime" />
      <Skill name="MongoDb" emoji="📈" myColor="hotpink" />
      <Skill name="React" emoji="❄️" myColor="lavender" />
    </div>
  );
}

function Skill(props) {
  const { myColor, name, emoji } = props;
  return (
    <span className="skill" style={{ backgroundColor: myColor }}>
      {name} {emoji}
    </span>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
