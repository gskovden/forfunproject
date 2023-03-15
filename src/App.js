import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
