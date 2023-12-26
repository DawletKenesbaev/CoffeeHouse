import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import coffeeIcon from '../../assets/images/CoffeeIcon.png'

git 
function Navbar(params) {
    return (
        <Container>
             <Nav> 
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <Menu>
                        <li><a href="#">Favorite Coffee</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Mobile app</a></li>
                        <li><a href="#">Contact us</a></li>
                    </Menu>
                </div>
                <a className="menu">Menu<span><img className="coffeeIcon" src={coffeeIcon}/></span></a>
            </Nav>
        </Container>
      
    )
}
const Nav = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  .menu {
    text-decoration: none;
    color: #403F3D;
    font-weight:600;
  }
  .coffeeIcon {
    margin-left:6px;
    display:block;
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
`

export default Navbar;