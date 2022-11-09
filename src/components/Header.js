import React  ,{useState} from "react"
import './Header.css'
/** importamos iconos*/
//import {AiFillHome,AiOutlineRadarChart, AiOutlineQrcode} from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoMdClose, IoMdMenu,IoIosApps } from "react-icons/io"
const Header = () =>{
    //para que se abra el menu  y se cierre
        const [active, setActive]= useState(false)
        const activateNav = ()=>{
        setActive(!active)
     }
    return(

        <div className={active ?'header':'header-mobile'}>
               
                <div className="menu-icon" onClick={activateNav}>
                    {!active ? <IoMdMenu className="menu"/>: <IoMdClose className="close-icon"/>}
                </div>
                
                 <nav>
                <ul className= {active ?'ul-item':'ul-item oicon'}>
                    <li>{/*icon */} 
                    <IoIosApps style={{color:'black'}}></IoIosApps>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>{/*icon */} 
                    <IoIosApps style={{color:'black'}}></IoIosApps>
                    <Link to='/pages/Formulario.js'>Formulario</Link>
                    </li>
                    <li>{/*icon */} 
                    <IoIosApps style={{color:'black'}}></IoIosApps>
                    <Link to='/pages/api.js'>Api</Link>
                    </li>
                    <li>{/*icon */} 
                    <IoIosApps style={{color:'black'}}></IoIosApps>
                    <Link to='/pages/Collections.js'>Collections</Link>
                    </li>
                </ul>
            </nav>
        </div>
    
    )
}
export default Header