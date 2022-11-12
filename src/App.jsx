import { Routes } from "./routes";
import { Nav } from "./components";

import "./index.css";
function App() {
  return (
    <div className="bg-background min-h-screen">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
