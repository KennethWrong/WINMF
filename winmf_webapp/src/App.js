import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
