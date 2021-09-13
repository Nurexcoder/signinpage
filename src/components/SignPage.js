import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Container = styled.form `
    
    margin:0 10px;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 80vh;
    width:95%;
    
    
    `
const LeftContainer = styled.div `
    width:60%;
    
    `

const Slogan = styled.h1 `
    
    `
const Logo = styled.img `
width: 40px;
padding: 0 5px;
`    

const Message = styled.p ``
const Image = styled.img `
        height: 75vh;
`

const RightContainer = styled.div `
    display:flex;
    flex-direction: column;
    /* align-items: flex-start; */
    justify-content: flex-start;
    /* flex:1; */
    width:40%;
    height: 100vh;
    /* position: relative; */
    `
const Language = styled.div `
      `
const Title = styled.h1 `
        /* margin: 10px 10px */
        margin-bottom:3px;
/* flex-direction: column; */
/* align-items: center; */
/* justify-content: center; */
/* position: absolute; */


`
const Label = styled.label ``
const Input = styled.input `
    margin: 10px 15px;
    border-radius: 5px;
    width: 95%;
    padding:10px 0;
    `
const Button = styled.button `
    padding: 15px 70px;
    margin: 8px 5px;
    height: 60px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #${props=>props.color};
    color: white;
    outline:none;
    border: none;
    border-radius: 20px;

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
                <Image src="SignIn.jpg"/>
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
                <Button color="00A19D">Create an account</Button>
                <Button color="57CC99"><FacebookIcon/> Sign Up With Facebook</Button>
            </RightContainer>
        </Container>
    )
}

export default SignPage
