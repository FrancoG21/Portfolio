import React, {useEffect} from "react";
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import cv from '../../assets/Franco-Gimenez-CV.pdf';
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
    LinkedInIcon,
    LinkCv
} from './StyledHero';

export default function Hero() {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {
        console.log('hi', inView)
        if(inView){
            animation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.3
                },
            })
        }
        if(!inView){
            animation.start({y: '-100vw'})
        }
    }, [inView])

    return (
        <BackgroundHero id="hero">
            <ContainerHero ref={ref}>
                <DivHero>
                    <motion.span
                        // initial={{ y: "-100vh", opacity: 0 }}
                        animate={animation}
                        // transition={{ type: "spring", delay: 0.2, bounce: 0.2 }}
                    >
                        <TitleHero>Hola, soy</TitleHero>
                        <Title>Franco Gimenez!</Title>
                    </motion.span>
                    <TitleWriter>
                        <Typewriter options={{ strings: ['Front-End', 'Back-End', 'Full Stack'], autoStart: true, loop: true }} />
                    </TitleWriter>
                    <motion.span
                        // initial={{ y: "100vh", opacity: 0 }}
                        animate={animation}
                        // transition={{ type: "spring", delay: 2.0, bounce: 0.5 }}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true }}
                        // transition={{ duration: 1.0 }}
                        // variants={{
                        //     visible: { opacity: 1, scale: 1 },
                        //     hidden: { opacity: 0, scale: 0 }
                        // }}
                    >
                        <Title>Developer</Title>
                        <TextHero>
                            Creo que el trabajo en equipo es la clave del éxito, todos podemos aprender unos de otros. Me encanta compartir ideas y también me encanta ayudar si alguien tiene un problema que no sabe cómo resolver. (Y en caso de que no lo sepa, podemos encontrar la respuesta juntos)                    </TextHero>
                        <Button>
                            <LinkCv href={cv} download target='_blank'>
                                DESCARGAR CV
                            </LinkCv>
                        </Button>
                    </motion.span>
                    <motion.a
                        // initial={{ y: "100vh", opacity: 0 }}
                        animate={animation}
                        // transition={{ type: "spring", delay: 1.5, bounce: 0.3 }}
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