import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar =() => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className="navbar">
                <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
               <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               {/* </Grid>
               <Grid container
                        direction="row"
                        justifyContent="right"
                        alignItems="center"
                    > */}
               <Avatar alt="Teste" src="https://humanograma.intranet.bb.com.br/F8369876" sx={{ width: 56, height: 56}} />
               </Grid>
           </div>
           
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items'  onClick={showSidebar}>
                   <li className="navbar-toggle">
                       <Link to="#" className='menu-bars'>
                           <AiIcons.AiOutlineClose />
                       </Link>
                   </li>

                   {SidebarData.map((item,index) =>{
                       return (
                           <li key={index} className={item.cName}>
                               <Link to={item.path}>
                                   {item.icon}
                                   <span> {item.title}</span>
                               </Link>
                           </li>
            
                       )
                   })}
               </ul>
           </nav>
           </IconContext.Provider> 
        </>
    )
}

export default Navbar
