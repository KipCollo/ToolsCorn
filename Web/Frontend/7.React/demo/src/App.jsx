import { BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Login from "./components/Login";
import Home from './components/Home';
import Contact from './components/Contact';
import { Error } from './components/Error';

function App() {
  return (
    <div className='bod'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contact-us' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
