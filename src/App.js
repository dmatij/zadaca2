import "./App.css";

function App() {
  const a = "abcdefgh";
  const b = "ijklmnop";
  return (
    <>
      <p>Ovo je neki tekst</p>
      <p>Ovo je neki tekst + prikazana varijabla: {a}</p>
      <p>
        Ovo su dvije varijable odvojene razmakom i zarezom: {a} , {b}
      </p>
    </>
  );
}

export default App;
