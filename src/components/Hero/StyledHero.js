import styled from 'styled-components';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

export const BackgroundHero = styled.div`
  background-color: ${(props) => props.theme.background};
  position: relative;
  height: 100vh;

  &::after{
    width: 100%;
    content: "";
    position: absolute;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const ContainerHero = styled.section`
  height: 92vh;
  display: flex;
  align-items: center;
  max-width: 60%;
  margin: auto;
  text-align: center;
`

export const TitleHero = styled.h3`
  color: ${(props) => props.theme.font};
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
`

export const Title = styled.h3`
  color: ${(props) => props.theme.font};
  font-size: 35px;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 960px) {
    font-size: 25px;
  }
`

export const TitleWriter = styled.h1`
  color: ${(props) => props.theme.font};
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 960px) {
    font-size: 30px;
    margin-top: 10px;
  }
`

export const TextHero = styled.p`
  color: ${(props) => props.theme.font};
  font-size: 15px;
  line-height: 30px;
  margin: 20px 0;

  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.font};
  font-size: 55px;
  line-height: 30px;
  margin: 20px 0;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`

export const DivHero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.font};
  border: 2px solid ${(props) => props.theme.font};
  border-radius: 25px;
  padding: 10px;
  width: 25%;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 20;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${(props) => props.theme.font};
  }

  @media screen and (max-width: 960px) {
    flex-direction: row;
    margin-left: 70px;
    position: unset;
    margin-top: 30px;
  }
`

export const RefSocial = styled.a`
  color:  ${(props) => props.theme.font};
`

export const GitIcon = styled(BsGithub)`
  width: 2em;
  height: 2em;
`

export const LinkedInIcon = styled(BsLinkedin)`
  width: 2em;
  height: 2em;
`