


import './App.css'
import User from './components/User';
import Navbar from './components/navbar';
import UserList from './components/userlist';
import Footer from './components/footer';
function App(){
  
  //return react element
  return(
    <div>
      <Navbar/>
    <div className='p-16 min-h-screen bg-blue-200'>
      <UserList/>
    </div>
    <Footer/>
    </div>
  );
}
export default App;