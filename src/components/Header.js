import React, { useState,useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import logo from './Images/logo.png'

const Container = styled.div `
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #f9f7f7;
        height: 75px;
        width: 100%;
        position: relative;
        

`
const LogoContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;

    `
 const Logo = styled.img `
    width: 40px;
    padding: 0 5px;
    `    
const LogoName = styled.h1 `
    letter-spacing: 4px;
    @media (max-width:600px){
        font-size: 1.2rem;
    }
`   

const Links= styled.li `
        padding: 0 10px;
        @media (max-width:600px){
            padding:20px 20px;
            text-align:center;
        }
        ` 
const A= styled.a `
        text-decoration: none;
        color:#252525;
        letter-spacing: 2px;
` 
const Menu = styled.div `
         width: 48px;
        height: 48px;
        display: none;
        @media (max-width:600px){
            /* display: block; */
            display: block;
            
            z-index:2;
                }
    

`

const SearchContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    `
const Input = styled.input `
   height:25px;
   border-radius: 5%;
   @media (max-width:600px){
       display: none;
   }
`     
const SearchIconContainer = styled.div `
    width:40px;
    height:30px;

    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #252525;
    `     
// const SearchIcon = styled.div ``     
// const Input = styled.input ``     
export default function Header() {
    const [rotate, setRotate] = useState(-100);
    const LinksList = styled.ul `
        list-style: none;
        display: flex;
        flex-direction: row;
        @media (max-width:600px){
            flex-direction: column;
            position: absolute;
            top:0;
            right:0;
            background-color: teal;
            width: 200px;
            height: 50vh;
            margin: 0;
            transition: all 3s ease;
            transform: translateX(${rotate}vw);
        }
        
        ` 


const clickHandler = ()=>{
    if(rotate===-100){
        setRotate(0);
    }
    
    else{
        setRotate(-100);
    }

}

return (
        <Container >
            <LogoContainer>
                <Logo src={logo} alt="logo" />
                <LogoName>PEPA SEARCH</LogoName>
            </LogoContainer>
            <LinksList>
                <Links><A href="#">HOME</A></Links>
                <Links><A href="#">CLASSES</A></Links>
                <Links><A href="#">ABOUT</A></Links>
                <Links><A href="#">CONTACT</A></Links>
            </LinksList>
            <SearchContainer>
                <Input/>
                <SearchIconContainer>
                <SearchIcon  style={{color:"#D5d5d5", border:"none"}}/>
                    </SearchIconContainer>
            
                <Menu>
                <MenuIcon className='Icon' style={{width: "48px",
                            height: "48px",
                            // zIndex:"2"
                            // right:'90px',
                            // position: "absolute",
                            // right: "7px"
                            }} onClick={clickHandler}/>
                </Menu>
                </SearchContainer>
        </Container>
    )
}
