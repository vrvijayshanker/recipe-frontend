import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import American from './pages/American'
import Chinese from './pages/Chinese'
import Indian from './pages/Indian'
import Italian from './pages/Italian'
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/american' element={<American/>} />
        <Route path='/chinese' element={<Chinese/>} />
        <Route path='/indian' element={<Indian/>} />
        <Route path='/italian' element={<Italian/>} />
        <Route path='/addrecipe' element={<AddRecipe/>} />
        <Route path='/editrecipe/:id' element={<EditRecipe/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
