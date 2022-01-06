import Navbar from './components/Navbar/index';
import Routes from './routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
