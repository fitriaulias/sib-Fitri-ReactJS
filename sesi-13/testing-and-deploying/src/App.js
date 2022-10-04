import { Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/footer';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
