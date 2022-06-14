import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/component";
import LiveActivity from "./Components/activity/live-activity/component";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LiveActivity />
    </div>
  );
};

export default App;
