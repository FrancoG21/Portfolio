import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {
    BackgroundContact,
    ButtonSend,
    ContainerContact,
    ContainerRight,
    Flex,
    Formulario,
    GridContact,
    Input,
    Label,
    MailIcon,
    MapIcon,
    PhoneIcon,
    SubTitleContact,
    TextArea,
    TitleContact,
    TitleFlex
} from "./StyledContact";

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_q4r9c3l", "template_c1roj6a", form.current, "mNuOFbXNxl6eKVgNW")
        e.target.reset()
    };


    // initial="hidden"
    // whileInView="visible"
    // viewport={{ once: true }}
    // transition={{ duration: 0.3 }}
    // variants={{
    //   visible: { opacity: 1, scale: 1 },
    //   hidden: { opacity: 0, scale: 0 }
    // }}

    return (
        <BackgroundContact id='contact'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <TitleContact>Contactame</TitleContact>
            </motion.div>
            <GridContact>
                <ContainerContact>
                    <Formulario ref={form} onSubmit={sendEmail}>
                        <Label>Nombre</Label>
                        <div>
                            <Input
                                type='text'
                                name='name'
                                placeholder='Nombre'
                            />
                        </div>
                        <Label>Email</Label>
                        <div>
                            <Input
                                type='email'
                                name='email'
                                placeholder='usuario@email.com'
                            />
                        </div>
                        <Label>Mensaje</Label>
                        <div>
                            <TextArea
                                type='text'
                                name='message'
                                placeholder="Escribe tu mensaje"
                            >
                            </TextArea>
                            <ButtonSend>Enviar</ButtonSend>
                        </div>
                    </Formulario>
                </ContainerContact>
                <ContainerRight>
                    <div>
                        <Flex>
                            <MapIcon />
                            <TitleFlex>Ubicación</TitleFlex>
                        </Flex>
                        <SubTitleContact>Berzategui. Buenos Aires. Argentina</SubTitleContact>
                    </div>
                    <div>
                        <Flex>
                            <PhoneIcon />
                            <TitleFlex>Teléfono</TitleFlex>
                        </Flex>
                        <SubTitleContact>+54 11 2524-5289</SubTitleContact>
                    </div>
                    <div>
                        <Flex>
                            <MailIcon />
                            <TitleFlex>Email</TitleFlex>
                        </Flex>
                        <SubTitleContact>fgimenez029@gmail.com</SubTitleContact>
                    </div>
                </ContainerRight>
            </GridContact>
        </BackgroundContact>
    )
}   