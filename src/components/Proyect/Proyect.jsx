import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import game from '../../assets/pi-videogames.jpg';
import dogs from '../../assets/pf.jpg';
import {
    BackgroundProyect,
    ButtonRepo,
    ButtonTech,
    ContainerProyect,
    DivTech,
    GridProyect,
    ImageProyect,
    TextCard,
    TitleCard,
    TitleProyect,
    GitIcon,
    DivGit,
    DivGitDiv,
    GitLink
} from './StyledProyect';

export default function Proyect() {

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
            animation.start({x: '-100vh'})
        }
    }, [inView])

    return (
        <BackgroundProyect id="proyect" ref={ref}>
            <motion.div
                // initial={{ x: "-100vW", opacity: 0 }}
                animate={animation}
                // transition={{ type: "spring", delay: 1.5, bounce: 0.2 }}
            >
                <TitleProyect>Proyectos</TitleProyect>
            </motion.div>
            <motion.div
                // initial={{ x: "100vW", opacity: 0 }}
                animate={animation}
                // transition={{ type: "spring", delay: 2.5, bounce: 0.5 }}
            >
                <GridProyect>
                    <ContainerProyect>
                        <TitleCard>Games World App</TitleCard>
                        <ImageProyect src={game} alt='game' />
                        <TextCard>
                            Proyecto Individual del Bootcamp soyHenry.
                        </TextCard>
                        <TextCard>Tecnologías:</TextCard>
                        <DivTech>
                            <ButtonTech>JavaScript</ButtonTech>
                            <ButtonTech>Styled Components</ButtonTech>
                            <ButtonTech>React</ButtonTech>
                            <ButtonTech>Redux</ButtonTech>
                            <ButtonTech>Node.Js</ButtonTech>
                            <ButtonTech>Express</ButtonTech>
                            <ButtonTech>Sequelize</ButtonTech>
                            <ButtonTech>PostgreSQL</ButtonTech>
                        </DivTech>
                        <DivGit>
                            <ButtonRepo href='https://pi-videogames-gamma.vercel.app/' target='_blank'>DEMO</ButtonRepo>
                            <GitLink href='https://github.com/FrancoG21/PI-Videogames' target='_blank'><GitIcon /></GitLink>
                        </DivGit>
                    </ContainerProyect>
                    <ContainerProyect>
                        <TitleCard>Patitas App</TitleCard>
                        <ImageProyect src={dogs} alt='dogs' />
                        <TextCard>
                            Proyecto Final/Grupal realizado en el Bootcamp soyHenry.
                        </TextCard>
                        <TextCard>Tecnologías:</TextCard>
                        <DivTech>
                            <ButtonTech>JavaScript</ButtonTech>
                            <ButtonTech>Styled Components</ButtonTech>
                            <ButtonTech>React</ButtonTech>
                            <ButtonTech>Redux</ButtonTech>
                            <ButtonTech>Node.Js</ButtonTech>
                            <ButtonTech>Express</ButtonTech>
                            <ButtonTech>Sequelize</ButtonTech>
                            <ButtonTech>PostgreSQL</ButtonTech>
                        </DivTech>
                        <DivGit>
                            <ButtonRepo href='https://pf-henry-front-three.vercel.app/' target='_blank'>DEMO</ButtonRepo>
                            <GitLink href='https://github.com/FrancoG21/PF-Henry-Front' target='_blank'><GitIcon /></GitLink>
                        </DivGit>
                    </ContainerProyect>
                </GridProyect>
            </motion.div>
        </BackgroundProyect>
    )
}