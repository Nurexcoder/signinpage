import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Signin from './Images/SignIn.jpg'


const Container = styled.div `
    
    margin:0 10px;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 80vh;
    width:95%;
    @media (max-width:600px){
        flex-direction: column;
        align-items: center;
        display: block;
        text-align: center;
    }
    
    
    `
const LeftContainer = styled.div `
    width:60%;
    @media(max-width:600px){
        width: 100%;
    }
    
    `

const Message = styled.p ``
const Image = styled.img `
        width: 100%;
        height: auto;

`

const RightContainer = styled.form `
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    /* flex:1; */
    width:40%;
    height: 100vh;
    /* position: relative; */
    @media (max-width:600px){
        width: 100%;
    }
    `

const Title = styled.h1 `
        /* margin: 10px 10px */
        margin-bottom:3px;
        font-size: 2.5rem;
        font-weight: 600;
/* flex-direction: column; */
/* align-items: center; */
/* justify-content: center; */
/* position: absolute; */


`
const Label = styled.label `
    text-align: left;
    `
const Input = styled.input `
    margin: 10px 1px;
    border-radius: 5px;
    width: 100%;
    padding:10px 0;
    /* border: none; */
    ` 
const ButtonContainer = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`       
const Button = styled.button `
    padding: 15px 70px;
    margin: 8px 5px;
    height: 60px;
    width: 100%;
    background-color: #${props=>props.color};
    color: white;
    outline:none;
    border: none;
    border-radius: 20px;
    transition: all 0.5s ease;
    display:flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        background: rgb(186,228,224);
        background: linear-gradient(90deg, rgba(186,228,224,0.9360119047619048) 0%, rgba(0,161,157,1) 55%, rgba(150,228,194,1) 87%);
    }
    `
    
 const A = styled.a `
    text-decoration: none;
    margin-bottom: 40px;
    color: #00BBBB;
 `   
// const SubmitButton = styled.button ``
const SignPage = () => {
    return (
        <Container>
            <LeftContainer>
                <Title>
                    Join the Community
                     </Title> 
                <Message>
                    Where we help each other
                </Message>
                <Image src={Signin}/>
            </LeftContainer>
            <RightContainer>
                {/* <Language>EN<ArrowDropDownIcon/></Language> */}
                <Title type="text">Sign up to PAPE SHARE</Title>
                <Message>Already a member? <A href='#'>Log in</A></Message>
                <Message></Message>
                <Label>NAME</Label>
                <Input type="text"/>
                <Label>Email</Label>
                <Input type="email"/>
                <Label>Password</Label>
                <Input type="password"/>
                <ButtonContainer>
                <Button color="00A19D">Create an account</Button>
                <Button color="57CC99"><FacebookIcon/> Sign Up With Facebook</Button>
                </ButtonContainer>
            </RightContainer>
        </Container>
    )
}

export default SignPage
