import { BlueText, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from "../../styles/Globals";
import { SkillsCard, SkillsCardContainer } from "./styles";
import { Skills } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/variants";
export const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
      <FlexContainer fullWidthChild responsiveDirection="column-reverse" >
        {/*---left-section---*/}
        <SkillsCardContainer 
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillsCard>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>

              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        {/*---right-section---*/}
        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            MINHAS HABILIDADES
          </Heading>

          <Heading as="h2" size="h2">
            Oque eu <BlueText>posso fazer</BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
            Como desenvolvedor eu tenho vasto conhecimento em JavaScript, React,
            CSS, HTML. Focado em desenvolver interfaces dinamicas e responsivas
            usando React.
          </ParaText>

          <ParaText>
            Minha experiência em React permite construir aplicações escaláveis e
            sustentáveis.Isto me permite criar um código eficiente e sustentável
            que pode ser adequado a qualquer negócio.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};
