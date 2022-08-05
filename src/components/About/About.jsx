import React from "react";
import { motion } from "framer-motion";
import {
    BackgroundAbout,
    ContainerAbout,
    DivAbout,
    DivGrid,
    ImageAbout,
    Left,
    Right,
    TitleAbout,
    Text,
    ButtonAbout
} from './StyledAbout';
import avatar from '../../assets/profile.jpg';

export default function About() {

    return (
        <BackgroundAbout id="about">
            <motion.div
                initial={{ x: "-100vW", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 1.5, bounce: 0.2 }}
            >
                <TitleAbout>Sobre Mi</TitleAbout>
            </motion.div>
            <DivGrid>
                <motion.div
                    initial={{ x: "-100vW", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 2.5, bounce: 0.2 }}
                >
                    <Right>
                        <Text>
                            Hola, soy Franco Gimenez, tengo 22 años y vivo en Argentina Buenos Aires.
                            En 2021, sin saber nada de programación me propuse hacer el botcamp de soyHenry. Los ejercicios que a mis compañeros le demoraban poco a mi me demoraban mas tiempo en resolverlos. Lo tome como una motivación para cumplir mi sueño de ser programador, no baje los brazos hasta conseguirlo.
                            <br />
                            <p>
                                Podes conocer más acerca de mi acá abajo 👇
                            </p>
                        </Text>
                        <ButtonAbout>Curriculum</ButtonAbout>
                    </Right>
                </motion.div>
                <motion.div
                    initial={{ x: "100vW", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 2.5, bounce: 0.2 }}
                >
                    <Left>
                        <ImageAbout src={avatar} alt='avatar' />
                    </Left>
                </motion.div>
            </DivGrid>
        </BackgroundAbout >
    )
}