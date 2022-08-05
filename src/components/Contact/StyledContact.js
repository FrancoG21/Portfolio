import styled from "styled-components";
import {BsFillPhoneFill} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

export const BackgroundContact = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 100vh;
    padding: 10px;
`

export const TitleContact = styled.h1`
  color: ${(props) => props.theme.font};
  text-transform: uppercase;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const GridContact = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 100px;
    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ContainerContact = styled.div`
    text-align: left;
    margin: 0 auto;
`

export const Formulario = styled.form`
    width: 500px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const Label = styled.label`
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.font};
    text-align: left;
    margin-bottom: 10px;
`

export const Input = styled.input`
    background-color: ${(props) => props.theme.input_background};
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    margin-bottom: 30px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const TextArea = styled.textarea`
    background-color: ${(props) => props.theme.input_background};
    width: 100%;
    height: 120px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        justify-content: center;
    }
`

export const PhoneIcon = styled(BsFillPhoneFill)`
    color: ${(props) => props.theme.font};
    width: 1em;
    height: 1em;
    margin-right: 10px;

    @media screen and (max-width: 960px) {
        margin-right: 15px;
    }
`

export const MapIcon = styled(FaMapMarkerAlt)`
    color: ${(props) => props.theme.font};
    width: 1em;
    height: 1em;
    margin-right: 10px;

    @media screen and (max-width: 960px) {
        margin-right: 15px;
    }
`

export const MailIcon = styled(GrMail)`
    color: ${(props) => props.theme.font};
    width: 1em;
    height: 1em;
    margin-right: 10px;

    @media screen and (max-width: 960px) {
        margin-right: 15px;
    }
`

export const SubTitleContact = styled.h4`
    color: ${(props) => props.theme.font};
    font-size: 15px;
    margin: 0;

    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
`

export const TitleFlex = styled.h4`
    color: ${(props) => props.theme.font};
    font-size: 20px;

    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
`

export const ButtonSend = styled.button`
    background-color: ${(props) => props.theme.font};
    color: ${(props) => props.theme.primary};
    border: 2px solid ${(props) => props.theme.font};
    text-transform: uppercase;
    padding: 10px;
    width: 25%;
    cursor: pointer;
    border-radius: 25px;
    margin-top: 10px;

    @media screen and (max-width: 960px) {
        width: 100%;
        margin-left: 0;
        text-align: center;
    }
`

export const ContainerRight = styled.div`
    @media screen and (max-width: 960px) {
        font-size: 20px;
        width: 100%;
        text-align: center;
    }
`