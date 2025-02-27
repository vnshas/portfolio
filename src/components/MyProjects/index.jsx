import { BlueText, Heading, PaddingContainer } from "../../styles/Globals"
import { ProjectDetails } from "../../utils/data"
import { fadeInTopVariant } from "../../utils/variants"
import { ProjectCard } from "./ProjectCard"
import { motion } from "framer-motion"

export const MyProjects = () =>{
    return(
        <PaddingContainer
            id="Projects"
            top="5%"
            bottom="5%"
            responsiveTop="20%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <Heading 
             as={motion.h4}
             variants={fadeInTopVariant}
             initial="hidden"
             whileInView="visible"
             size="h4"
            >
                MEUS PROJETOS
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
            >
                <BlueText>Projetos Concluídos</BlueText>
               
            </Heading>

            {ProjectDetails.map((project) =>(
                <>
                <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <ProjectCard project={project}/>
                </PaddingContainer>
                </>
            ))}
        </PaddingContainer>
    )
}