import { BlueText, FlexContainer, Heading, Link, PaddingContainer } from "../../styles/Globals"
import { fadeInBottomVariant } from "../../utils/variants";
import { ContactForm, FormInput, FormLabel } from "./styles"
import { motion } from "framer-motion";

export const Footer = () =>{
    return (
      <PaddingContainer id="Contact" top="5%" bottom="10%">
        <Heading as={motion.h4} variants={fadeInBottomVariant} initial="hidden" whileInView="visible" size="h4" align="center" >
          MEU CONTATO
        </Heading>

        <Heading as={motion.h2} variants={fadeInBottomVariant} initial="hidden" whileInView="visible" size="h2" align="center">
          Fale <BlueText>comigo aqui</BlueText>
        </Heading>

        <PaddingContainer top="3rem">
          <FlexContainer justify="center">
            <ContactForm
            as={motion.form} variants={fadeInBottomVariant} initial="hidden" whileInView="visible"
            >
              <PaddingContainer bottom="2rem">
                <FormLabel>Nome:</FormLabel>
                <FormInput type="text" placeholder="Digite seu nome" />
              </PaddingContainer>

              <PaddingContainer bottom="2rem">
                <FormLabel>Email:</FormLabel>
                <FormInput type="email" placeholder="Digite seu email" />
              </PaddingContainer>

              <PaddingContainer bottom="2rem">
                <FormLabel>Mensagem:</FormLabel>
                <FormInput as="textarea" placeholder="Digite sua mensagem" />
              </PaddingContainer>

              <FlexContainer justify="center" responsiveFlex>
                <Link>Enviar Mensagem</Link>
              </FlexContainer>
            </ContactForm>
          </FlexContainer>
        </PaddingContainer>
      </PaddingContainer>
    );
}