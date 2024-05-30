import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import Users from './components/Users/Users';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">

      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } exact></Route>
          <Route path='/users' element={ <Users /> } exact></Route>
          <Route path='/adduser' element={ <AddUser /> } exact></Route>
          <Route path='/edituser/:_id' element={ <EditUser /> } exact></Route>
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  )
}

export default App
