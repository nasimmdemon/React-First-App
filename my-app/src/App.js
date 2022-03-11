import "./App.css";

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: "#fff" }} className="App-header">
        <Informations name="Emon Adi" Work="Fiverr"></Informations>
        <Informations name="hridoy Rumi" Work="Grapics Design"></Informations>
        <Informations name="Abbas Ali" Work="YDIT"></Informations>
        <Informations name="Ashique Khondoker" Work="Edutior"></Informations>
      </header>
    </div>
  );
}

function Informations(props) {
  const personStyle = {
    width: "50%",
    backgroundColor: "slateblue",
    padding: "3px 10px",
    margin: "10px",
    borderRadius:"10px"
  };

  return (
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <p>Works at {props.Work}</p>
    </div>
  );
}

export default App;
