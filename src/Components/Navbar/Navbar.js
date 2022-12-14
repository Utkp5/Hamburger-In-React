import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';
import './Navbar.css';


function App() {

  const [menu,setmenu] = useState(false);

  return (
    <div className="App">

       <div className='navbar'>

            <div className='logo'>LOGO</div>


              <ul className={menu ? 'navbar_mobile_css' :  'navbar_ul'}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Movies</a></li>
                <li><button className='button_signup'>Signup</button></li>
                <li><button className='button_login'>Login</button></li>
              </ul>
              <div className='menu_icon' onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={46} /> :<HiMenu size={46} />}
              </div>

       </div>

    </div>
  );
}


export default App;
