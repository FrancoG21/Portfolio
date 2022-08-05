import styled from "styled-components";
import {BsGithub} from 'react-icons/bs';

export const BackgroundProyect = styled.div`
  background-color: ${(props) => props.theme.background_alt};
  height: 100vh;
  padding: 10px;

  @media screen and (max-width: 960px) {
    padding: 10px;
    height: 200vh;
  }
`

export const TitleProyect = styled.h2`
  color: ${(props) => props.theme.font};
  text-transform: uppercase;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const GridProyect = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`

export const ContainerProyect = styled.div`
  background-color: ${(props) => props.theme.card};
  padding: 25px;
  width: 500px;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 50px;
  box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
  -webkit-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`

export const TitleCard = styled.h2`
  color: ${(props) => props.theme.font};
  font-size: 30px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 5px;

  @media screen and (max-width: 960px) {
    font-size: 25px;
    margin-top: 5px;
  }
`

export const TextCard = styled.p`
  color: ${(props) => props.theme.font};
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ImageProyect = styled.img`
  width: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const DivTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
`

export const DivGit = styled.div`
  display: flex;
  align-items: center;
`

export const DivGitDiv = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
`

export const ButtonTech = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.font};
  border: 2px solid ${(props) => props.theme.font};
  border-radius: 25px;
  padding: 5px;
  cursor: default;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;

  @media screen and (max-width: 960px) {
    width: 45%;
    margin-left: 0;
  }
`

export const ButtonRepo = styled.a`
  background-color: ${(props) => props.theme.font};
  color: ${(props) => props.theme.font_alt};
  border: 2px solid ${(props) => props.theme.font};
  text-decoration: none;
  border-radius: 25px;
  padding: 5px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
    text-align: center
  }
`

export const GitIcon = styled(BsGithub)`
  width: 2em;
  height: 2em;
`

export const GitLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.font}
`