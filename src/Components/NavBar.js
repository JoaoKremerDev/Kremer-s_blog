import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>
            Kremer's <span>Blog</span>
        </NavLink>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar