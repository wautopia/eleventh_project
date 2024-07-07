import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toppage from './View/Toppage';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path='/' element={<Toppage />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
