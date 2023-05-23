import './App.css';
import Create from './components/create.js';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/create' element={<Create />} component={Create} />
          <Route exact path='/read' element={<Read />} component={Read} />
          <Route path='/update' element={<Update />} component={Update} />
      </Routes>
    </Router>
  );
}

export default App;


