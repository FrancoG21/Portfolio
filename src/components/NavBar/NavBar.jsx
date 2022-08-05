import React, { useState } from "react";
import {
    BackgroundNav,
    ExperienceIcon,
    FolderIcon,
    HomeIcon,
    MoonIcon,
    NavDarkIcon,
    NavFlex,
    NavIcon,
    SunIcon,
    TitleNav,
    UserIcon,
    MessageIcon,
} from './StyledNavBar';
import { IconContext } from "react-icons/lib";

export default function NavBar({ theme, setTheme }) {

    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const iconTheme = theme === 'dark' ? (<SunIcon />) : (<MoonIcon />)

    return (
        <IconContext.Provider value={{ color: '' }}>
            <NavFlex>
                <NavDarkIcon onClick={handleTheme}>{iconTheme}</NavDarkIcon>
                <NavIcon href="#hero"> <HomeIcon /> </NavIcon>
                <NavIcon href="#about"> <UserIcon /> </NavIcon>
                <NavIcon href="#experience"> <ExperienceIcon /> </NavIcon>
                <NavIcon href="#proyect"> <FolderIcon /> </NavIcon>
                <NavIcon href="#contact"> <MessageIcon /> </NavIcon>
            </NavFlex>
        </IconContext.Provider>
    )
}