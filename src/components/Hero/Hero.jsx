import React from "react";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import {
    BackgroundHero,
    ContainerHero,
    DivHero,
    TitleHero,
    TitleWriter,
    TextHero,
    Title,
    Button,
    Social,
    RefSocial,
    GitIcon,
    LinkedInIcon
} from './StyledHero';

export default function Hero() {

    return (
        <BackgroundHero id="hero">
            <ContainerHero>
                <DivHero>
                    <motion.span
                        initial={{ y: "-100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.2, bounce: 0.2 }}
                    >
                        <TitleHero>Hola, soy</TitleHero>
                        <Title>Franco Gimenez!</Title>
                    </motion.span>
                    <TitleWriter>
                        <Typewriter options={{ strings: ['Front-End', 'Back-End', 'Full Stack'], autoStart: true, loop: true }} />
                    </TitleWriter>
                    <motion.span
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 2.0, bounce: 0.5 }}
                    >
                        <Title>Developer</Title>
                        <TextHero>
                            Creo que el trabajo en equipo es la clave del éxito, todos podemos aprender unos de otros. Me encanta compartir ideas y también me encanta ayudar si alguien tiene un problema que no sabe cómo resolver. (Y en caso de que no lo sepa, podemos encontrar la respuesta juntos)                    </TextHero>
                        <Button>DESCARGAR CV</Button>
                    </motion.span>
                    <motion.a
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 3.5, bounce: 0.5 }}
                    >
                        <Social>
                            <RefSocial href="https://github.com/FrancoG21" target="_blank"><GitIcon /></RefSocial>
                            <RefSocial href="https://www.linkedin.com/in/franco-gimenez-dev/" target="_blank"><LinkedInIcon /></RefSocial>
                        </Social>
                    </motion.a>
                </DivHero>
            </ContainerHero>
        </BackgroundHero>
    )
}