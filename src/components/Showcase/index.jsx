import React from 'react'
import { BlueText, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/Globals'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="left" fullWidthChild>
        {/*--left content-- */}
        <div>
          <Heading as={"h4"} size="h4">
            Olá!
          </Heading>

          <Heading as={"h1"} size="h1" top="0.5rem" bottom="1rem">
            Me chamo <BlueText>Vinicius Silva</BlueText>
          </Heading>

          <Heading as={"h3"} size="h3">
            <BlueText>Desenvolvedor Front-End</BlueText>
          </Heading>

          <ParaText as={"p"} top="2rem" bottom="4rem">
            Olá , me chamo Vinicius Silva e sou um desenvolvedor Front-End
            focado em desenvolver websites e aplicações web amigáveis aos
            usuários.
          </ParaText>

          <FlexContainer gap="20px">
            <IconContainer color="white" size="1.5rem" >
                <BsLinkedin />
            </IconContainer>

            <IconContainer color="white" size="1.5rem" >
                <BsFacebook />
            </IconContainer>

            <IconContainer color="white" size="1.5rem" >
                <BsInstagram/>
            </IconContainer>

            <IconContainer color="white" size="1.5rem" >
                <BsGithub/>
            </IconContainer>
          </FlexContainer>
        </div>

        {/*---right content---*/}
        
      </FlexContainer>
    </PaddingContainer>
  );
}

export default Showcase