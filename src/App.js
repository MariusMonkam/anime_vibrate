import "./styles.css";
import { Title } from "./components/Title";
import { ContainerStyle } from "./components/Container";

export default function App() {
  const text = "HappY Weekend!";
  const words = text.split("");
  return (
    <div className="App">
      <ContainerStyle>
        {words.map((t, i) => (
          <Title key={i} i={i} variant="h4">
            {t}
          </Title>
        ))}
      </ContainerStyle>
    </div>
  );
}
