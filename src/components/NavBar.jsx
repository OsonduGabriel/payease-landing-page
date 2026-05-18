import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { navLinks } from "../data/ProjectData";
import logo from "../assets/logo.svg"

function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    
    function toggleMenu(){
        setIsOpen(prevState => !prevState)
    }

    function closeMenu(){
        setIsOpen(false)
    }

    return(
        <header>
            <div className="menu">
                <img src={logo} alt="PayEase logo" className="logo"/>
                <button className="menu_icon" onClick={toggleMenu} aria-label="Toggle Menu">{isOpen ? <FaTimes /> : <FaBars />}</button>
            </div>
            <nav className={isOpen ? "nav_open" : ""}>
                <ul className="nav_list">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={link.href} onClick={closeMenu}>{link.label}</a>
                        </li>))}
                    <li>
                        <button className="cta">Get Started for free</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar