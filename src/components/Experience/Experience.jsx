import React from 'react';
import { motion } from "framer-motion";
import {
    BackgroundExp,
    Card,
    Container,
    CssIcon,
    DivGrid,
    ExpressIcon,
    HtmlIcon,
    JsIcon,
    NodeIcon,
    PostgreIcon,
    ReactIcon,
    ReduxIcon,
    SequelizeIcon,
    TextIcon,
    TitleExperience
} from './StyledExperience';

export default function Experience() {

    return (
        <BackgroundExp id='experience'>
            <motion.div
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 1.5, bounce: 0.2 }}
            >
                <TitleExperience>¿Que tecnologías puedo utilizar?</TitleExperience>
            </motion.div>

            <Container>
                <motion.div
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 2.0, bounce: 0.2 }}
                >
                    <DivGrid>
                        <Card>
                            <HtmlIcon />
                            <TextIcon>HTML</TextIcon>
                        </Card>
                        <Card>
                            <CssIcon />
                            <TextIcon>CSS</TextIcon>
                        </Card>
                        <Card>
                            <JsIcon />
                            <TextIcon>JavaScript</TextIcon>
                        </Card>
                        <Card>
                            <ReactIcon />
                            <TextIcon>React</TextIcon>
                        </Card>
                        <Card>
                            <ReduxIcon />
                            <TextIcon>Redux</TextIcon>
                        </Card>
                        <Card>
                            <NodeIcon />
                            <TextIcon>Node.JS</TextIcon>
                        </Card>
                        <Card>
                            <ExpressIcon />
                            <TextIcon>Express</TextIcon>
                        </Card>
                        <Card>
                            <SequelizeIcon />
                            <TextIcon>Sequelize</TextIcon>
                        </Card>
                        <Card>
                            <PostgreIcon />
                            <TextIcon>PostgreSQL</TextIcon>
                        </Card>

                    </DivGrid>
                </motion.div>
            </Container>
        </BackgroundExp>
    )
}