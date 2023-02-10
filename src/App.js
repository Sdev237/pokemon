import './App.css';
import ApiRes from './apiRes';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path='/' element={<ApiRes/>}></Route>
          <Route path='*' element={<NotFound />} > </Route>
          
      </Routes>
      </div>
    </Router>
  );
}

export default App;
