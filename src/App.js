import "./styles/style.css"
import { Navbar } from "./components";
import { SiteRoutes } from "./site-routes.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteRoutes />
    </div>
  );
}

export default App;
