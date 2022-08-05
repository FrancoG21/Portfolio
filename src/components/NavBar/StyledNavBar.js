import styled from 'styled-components';
import { FaSun, FaUser, FaFolderOpen } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';
import {RiMessage2Fill} from 'react-icons/ri';

export const BackgroundNav = styled.div`
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.font};
    width: 100%;
    max-height: 100vh;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
`

export const NavFlex = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
`

export const NavIcon = styled.a`
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`

export const NavDarkIcon = styled.div`
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`

export const TitleNav = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
`

export const MoonIcon = styled(BsMoonStarsFill)`
    color: #595959;
`

export const SunIcon = styled(FaSun)`
    color: yellow;
`

export const UserIcon = styled(FaUser)`
    color: ${(props) => props.theme.font};
`

export const FolderIcon = styled(FaFolderOpen)`
    color: ${(props) => props.theme.font};
`

export const HomeIcon = styled(IoHome)`
    color: ${(props) => props.theme.font};
`

export const ExperienceIcon = styled(MdWork)`
    color: ${(props) => props.theme.font};
`

export const MessageIcon = styled(RiMessage2Fill)`
    color: ${(props) => props.theme.font};
`