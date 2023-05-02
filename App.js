import "./App.css";
import Header from "./Header";
import Recomendations from "./Recomendations";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="recomendations">
          <Recomendations />
        </div>
      </div>
    </div>
  );
}

export default App;
