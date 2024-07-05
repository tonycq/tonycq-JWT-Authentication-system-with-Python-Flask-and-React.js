import './styles/App.css';
import { AppProvider } from './stored/appContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/login';
import Signup from './views/signup';
import Private from './views/private';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <>
    
          <Routes>
          <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/private" element={<Private />} />
           
          </Routes>
        </>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
