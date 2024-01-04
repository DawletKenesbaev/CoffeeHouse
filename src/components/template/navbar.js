import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import coffeeIcon from '../../assets/images/CoffeeIcon.png'

import { useState } from "react";

function Navbar(params) {
    const [navClick,setNavClick] = useState(false)
    console.log(navClick);
    return (
        <Container>
             <Nav> 
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <Menu className={navClick ? 'clicked': ''}>
                        <li><a href="#">Favorite Coffee</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Mobile app</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a className="menu">Menu<img className="coffeeIcon" src={coffeeIcon}/></a></li>
                    </Menu>
                    <button onClick={()=>{setNavClick(!navClick)}} className="navIcon"><div>clickicpn</div></button>
                </div>
            </Nav>
        </Container>
      
    )
}
const Nav = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  .rigth {
    margin:0 auto;
  }
  .coffeeIcon {
    margin-left:6px;
    display:inline;
  }
  .navIcon {
    display:none;
  }
  @media screen and (max-width: 768px) {
    .navIcon {
      display:block;
    }
  }
  .clicked {
    transform: translateX(0);

  }
`
const Container = styled.div`
  max-width:1200px;
  margin:0 auto;
`
const Menu = styled.ul`
  display:flex;
  width:530px;
  justify-content:space-between;
  align-items:center;
  li {
    list-style:none;
  }
  a {
    text-decoration: none;
    color: #403F3D;
    font-weight:600;
  }
  .menu {
    text-decoration: none;
    color: #403F3D;
    font-weight:600;
  }
  @media screen and (max-width: 768px) {
    transform: translateX(140%);
    transition: transform 0.3s ease;
    flex-direction:column;  
    

  }
`

export default Navbar;