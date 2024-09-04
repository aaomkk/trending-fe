import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        < Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
