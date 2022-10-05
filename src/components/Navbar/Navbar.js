import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    // Shrinking logo
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 50,
        headerEl = document.getElementById("js-header"),
        navbarExpand = document.getElementById('navbar');

        if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller");
            navbarExpand.classList.add('expand')
        } else {
            headerEl.classList.remove("smaller");
            navbarExpand.classList.remove('expand')
        }
    }

    // toggle
    state = {clicked: false}

    handleClick = () => {   
      this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems" id="navbar">
                <div className="navbar-logo" id="js-header">
                    <img src="/iskybus.png" alt="Logo"/>
                </div>

                <div className="menu-icon" onClick={this.handleClick.bind(this)}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul
                    id="navMenu"
                    className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}
                    onClick={this.handleClick.bind(this)}
                >
                        <li className="navListItem">
                            <Link to="/" className="nav-links">HOME</Link>
                        </li>

                        <li> 
                            <Link to="/bartholet" className="nav-links">BARTHOLET</Link>
                        </li>

                        <li>
                            <Link to="/about" className="nav-links">ABOUT US</Link>
                        </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar