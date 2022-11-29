import { Link  } from "react-router-dom";
import navList from "../navList";
import styled from "styled-components";

const Header = () => {

    const HeaderInner = styled.header`
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #000;
    `

    const Nav = styled.nav`
        ul{
            display: flex;
            align-items: center;
            list-style: none;
            padding-right: 50px;
        }
        li{
            padding-left: 20px;
        }
        a{
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
        }
    `

    return <HeaderInner>
        <Link to="/"><img src ={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/></Link>
        <Nav>
        <ul>
            {navList.map(({title, path}) => {
                return <li key={title}>
                    <Link to={`movie/${path}`}>{title}</Link>
                </li>
            })}
        </ul>
        </Nav>
    </HeaderInner>
}

export default Header