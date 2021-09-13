import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'

const Container = styled.div `
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #f9f7f7;
        height: 75px;
        

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
`    
const LinksList = styled.ul `
        list-style: none;
        display: flex;
        flex-direction: row;

        `    
const Links= styled.li `
        padding: 0 10px;
        ` 
const A= styled.a `
        text-decoration: none;
        color:#252525;
        letter-spacing: 2px;
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
    return (
        <Container >
            <LogoContainer>
                <Logo src="logo.png" alt="logo" />
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
                <SearchIcon  style={{color:"#D5d5d5"}}/>
                    </SearchIconContainer>
                </SearchContainer>

        </Container>
    )
}
