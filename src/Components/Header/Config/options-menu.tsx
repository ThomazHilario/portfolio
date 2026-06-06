import { IoMdPerson, IoMdMail } from "react-icons/io";
import { MdTimeline, MdWork  } from "react-icons/md";
import { BiSolidZap } from "react-icons/bi";

export const MENU_OPTIONS = [
    { id: "sobre-option", name: 'Sobre', icon: <IoMdPerson size={20} color="gray" /> },
    { id: "hability-option", name: 'Habilidades', icon: <BiSolidZap size={20} color="gray" /> },
    { id: "projects-options", name: 'Projetos', icon: <MdWork size={20} color="gray" /> },
    { id: "carrer-optio", name: 'Carreira', icon: <MdTimeline size={20} color="gray" /> },
    { id: "contacts-option", name: 'Contatos', icon: <IoMdMail size={20} color="gray" /> },
]
