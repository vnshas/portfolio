import React from 'react'
import { BlueText, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/Globals'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Particle, ShowCaseImageCard, ShowCaseParticleContainer } from './styles';
import ShowCaseImg from "../../assets/showCaseImg.png"
import BackGroundImg from "../../assets/particle.png"
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/variants';


const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="18%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem" responsiveTop="8rem">
      <FlexContainer align="left" fullWidthChild>
        {/*--left content-- */}
        <motion.div
         variants={fadeInLeftVariant}
         initial="hidden"
         whileInView="visible"
        >
          <Heading as={"h4"} size="h4">
            Olá!
          </Heading>

          <Heading as={"h2"} size="h2" top="0.5rem" bottom="1rem">
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

          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>

            <IconContainer color="white" size="1.5rem">
              <BsFacebook />
            </IconContainer>

            <IconContainer color="white" size="1.5rem">
              <BsInstagram />
            </IconContainer>

            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        {/*---right content---*/}
        <FlexContainer 
        as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify="flex-end">
          <ShowCaseParticleContainer>
            <ShowCaseImageCard>
              <img src={ShowCaseImg} alt="foto Vinicius" />
            </ShowCaseImageCard>

            <Particle
              as={motion.img}
              animate={
                { x:[0,100,0],
                  rotate:360,
                  scale:[1,0.5,1]
                }
              }
              transition={{
                duration:20,
                repeat:Infinity
              }}
              src={BackGroundImg}
              alt="particle"
              top="-80px"
              left="-20px"
              rotate="60deg"
            />

            <Particle
              as={motion.img}
              animate={
                { y:[0,100,0],
                  rotate:360,
                  scale:[1,0.8,1]
                }
              }
              transition={{
                duration:18,
                repeat:Infinity
              }}
              src={BackGroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />

            <Particle
              as={motion.img}
              animate={
                { y:[0,-100,0],
                  rotate:360,
                  scale:[1,0.9,1]
                }
              }
              transition={{
                duration:15,
                repeat:Infinity
              }}
              src={BackGroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowCaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
}

export default Showcase