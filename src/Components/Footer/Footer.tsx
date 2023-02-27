import React from 'react'
import styled from 'styled-components';
import facebook from "../Assets/facebook.svg"
import youtube from "../Assets/youtube.svg"
import twitter from "../Assets/twitter.svg"

const Footer = () => {
  return (
    <div>
       <>

<Foot>

<hr style={{width:"100%", color:"gray"}}/>

    <Container>

       

        <First>
            <Logo>VALERIAN</Logo>

            <Soc>
                <Socials src={facebook}/>
                <Text>Facebook</Text>
            </Soc>

            <Soc>
                <Socials src={youtube}/>
                <Text>Youtube</Text>
            </Soc>

            <Soc>
                <Socials src={facebook}/>
                <Text>Telegram</Text>
            </Soc>

            <Soc>
                <Socials src={twitter}/>
                <Text>Twitter</Text>
            </Soc>
        </First>

        <Second>
            <Get1>Getting started</Get1>
            <Get>Release Notes</Get>
            <Get>Upgrade Guide</Get>
            <Get>Browser Support</Get>
            <Get>Dark Mode</Get>
        </Second>

        <Second>
            <Get1>Explore</Get1>
            <Get>Prototyping</Get>
            <Get>Design systems</Get>
            <Get>Pricing</Get>
            <Get>Security</Get>
        </Second>

        <Second>
            <Get1>Resources</Get1>
            <Get>Best practices</Get>
            <Get>Developers</Get>
            <Get>Support</Get>
            <Get>Learn Design</Get>
        </Second>

        <Second>
            <Get1>Community</Get1>
            <Get>Discussion Forums</Get>
            <Get>Code of Conduct</Get>
            <Get>Contributing</Get>
            <Get>API Reference</Get>
        </Second>

    </Container>

</Foot>

</>
    </div>
  )
}

export default Footer;

const Text = styled.div`
font-size: 13px;
color: #0f172a;
margin: 7px;
cursor: pointer;
`;

const Soc = styled.div`
display: flex;
align-items: center;
`;

const Get = styled.div`
font-size: 13px;
color: #0f172a;
margin: 8px;
cursor: pointer;
`;

const Get1 = styled.div`
font-size: 14px;
font-weight: 600;
color: #0f172a;
margin: 10px;
`;

const Second = styled.div`
display: flex;
flex-direction: column;
`;

const Socials = styled.img`
width: 20px;
height: 20px;
`;

const Logo = styled.div`
font-size: 25px;
color: #0f172a;
cursor: pointer;
font-weight: 600;
margin-bottom:14px;
`;

const First = styled.div`
display: flex;
flex-direction: column;
`;

const Container = styled.div`
width: 75%;
height: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Foot = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
overflow: hidden;
/* padding-top: 100px; 
padding-bottom: 100px;  */
`;

