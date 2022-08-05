import React from 'react';
import game from '../../assets/pi-videogames.jpg';
import dogs from '../../assets/pf.jpg';
import { motion } from "framer-motion";
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

    return (
        <BackgroundProyect id="proyect">
            <motion.div
                initial={{ x: "-100vW", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 1.5, bounce: 0.2 }}
            >
                <TitleProyect>Proyectos</TitleProyect>
            </motion.div>
            <motion.div
                initial={{ x: "100vW", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 2.5, bounce: 0.5 }}
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