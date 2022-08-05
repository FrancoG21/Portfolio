import styled from "styled-components";
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io5';
import { SiJavascript, SiRedux, SiExpress, SiSequelize, SiPostgresql } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';

export const BackgroundExp = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  padding: 10px;
`

export const TitleExperience = styled.h2`
  color: ${(props) => props.theme.font};
  text-transform: uppercase;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const Container = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 60%;
`

export const DivGrid = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: space-between;
  flex-wrap: wrap;
  justify-content: center;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem; */

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 80px;
  }
`

export const Card = styled.div`
  text-align: center;
  padding: 1.8rem;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 960px) {
    padding: .1rem;
    margin-bottom: 20px;
  }
`

export const TextIcon = styled.h2`
  color: ${(props) => props.theme.font};
  margin-left: 5px;
  margin-right: 5px;
`

export const HtmlIcon = styled(ImHtmlFive)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const CssIcon = styled(IoLogoCss3)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const JsIcon = styled(SiJavascript)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const ReactIcon = styled(FaReact)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const ReduxIcon = styled(SiRedux)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const NodeIcon = styled(DiNodejs)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const ExpressIcon = styled(SiExpress)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const SequelizeIcon = styled(SiSequelize)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.font};
` 

export const PostgreIcon = styled(SiPostgresql)`
  width: 2em;
  height: 2em;  color: ${(props) => props.theme.font};
` 