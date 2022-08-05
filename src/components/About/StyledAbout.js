import styled from 'styled-components';

export const BackgroundAbout = styled.div`
  background-color: ${(props) => props.theme.background_alt};
  height: 100vh;
  padding: 2rem;

  @media screen and (max-width: 960px) {
    height: 110vh;
  }
`

export const ContainerAbout = styled.div`
  background-color: ${(props) => props.theme.card};
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 290px;
  border-bottom-left-radius: 30px;
  margin-left: 20px;
  text-align: left;
  margin: 0;
  padding: 20px;
  box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
  -webkit-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    border-bottom-right-radius: 30px;
    margin-bottom: 80px;
  }
`

export const TitleAbout = styled.h2`
  color: ${(props) => props.theme.font};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;
`

export const DivAbout = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`

export const ImageAbout = styled.img`
  border: 2px solid ${(props) => props.theme.font};
  border-radius: 50%;
  width: 200%;
  height: 80%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 290px;
  border-bottom-left-radius: 30px;

  @media screen and (max-width: 960px) {
    width: 15rem;
    margin: 0;
  }
`

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`

export const Left = styled.div`
  width: 35%;
  margin-left: 40px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`

export const Right = styled.div`
  width: 85%;
  justify-content: right;
  margin-left: 100px;
  margin-top: 50px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.font};
  font-size: 20px;
  line-height: 30px;
  text-align: right;
  justify-content: right;
  width: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 17px;
    line-height: 25px;
  }
`

export const ButtonAbout = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.font};
  border: 2px solid ${(props) => props.theme.font};
  text-transform: uppercase;
  padding: 10px;
  width: 35%;
  cursor: pointer;
  margin-left: 355px;
  border-radius: 25px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`

export const LinkCv = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.font};
`