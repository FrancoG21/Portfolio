import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';
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
        <BackgroundExp id='experience' ref={ref}>
            <motion.div
                // initial={{ y: "-100vh", opacity: 0 }}
                animate={animation}
                // transition={{ type: "spring", delay: 1.5, bounce: 0.2 }}
            >
                <TitleExperience>¿Que tecnologías puedo utilizar?</TitleExperience>
            </motion.div>

            <Container>
                <motion.div
                    // initial={{ y: "100vh", opacity: 0 }}
                    animate={animation}
                    // transition={{ type: "spring", delay: 2.0, bounce: 0.2 }}
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