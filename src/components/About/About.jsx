import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import cv from '../../assets/Franco-Gimenez-CV.pdf';
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
    ButtonAbout,
    LinkCv
} from './StyledAbout';
import avatar from '../../assets/profile.jpg';

export default function About() {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {
        console.log('hi', inView)
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2.0, bounce: 0.3
                },
            })
        }
        if(!inView){
            animation.start({x: '-100vw'})
        }
    }, [inView])

    return (
        <BackgroundAbout id="about" ref={ref}>
            <motion.div
                // initial={{ x: "-100vW", opacity: 0 }}
                animate={animation}
                // transition={{ type: "spring", delay: 1.5, bounce: 0.2 }}
            >
                <TitleAbout>Sobre Mi</TitleAbout>
            </motion.div>
            <DivGrid>
                <motion.div
                    // initial={{ x: "-100vW", opacity: 0 }}
                    animate={animation}
                    // transition={{ type: "spring", delay: 2.5, bounce: 0.2 }}
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
                        <ButtonAbout>
                            <LinkCv href={cv} download target='_blank'>Mi CV</LinkCv>
                        </ButtonAbout>
                    </Right>
                </motion.div>
                <motion.div
                    // initial={{ x: "100vW", opacity: 0 }}
                    animate={animation}
                    // transition={{ type: "spring", delay: 2.5, bounce: 0.2 }}
                >
                    <Left>
                        <ImageAbout src={avatar} alt='avatar' />
                    </Left>
                </motion.div>
            </DivGrid>
        </BackgroundAbout >
    )
}