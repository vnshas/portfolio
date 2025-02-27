import { FaCss3Alt, FaNode, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si"
import Project3 from "../assets/project3.png"
import Project4 from "../assets/project4.png"

export const Skills = [
  {
    id: 0,
    tech: "React Js",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "Node JS",
    icon: <FaNode /> ,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },
];

export const ProjectDetails = [
  {
    id: 0,
    name: "KenzieCRUD",
    description:
      " O projeto consiste em um CRUD para o gerenciamento de tecnologias do usuário, utilizando uma API o usuário consegue se cadastrar com um email e cadastrar tecnologias que aprendeu assim como edita-las e excui-las.",
    tech_stack:['ReactJS', 'TypeScript'],
    img: Project3,
    url:'https://www.youtube.com',
    reverse: false
  },
  {
    id:1,
    name:"Site Institucional Genérico",
    description:"O projeto consiste em um template de site institucional genérico.",
    tech_stack:['HTML','CSS','JavaScript'],
    img: Project4,
    url:'https://www.youtube.com',
    reverse: true
  },
];

export const navLinks = [
  {id:0,
    name:"Home",
    href:"Home"
  },
  {id:1,
    name:"Habilidades",
    href:"Skills"
  },
  {id:2,
    name:"Projetos",
    href:"Projects"
  },
  {id:3,
    name:"Contato",
    href:"Contact"
  }
]
