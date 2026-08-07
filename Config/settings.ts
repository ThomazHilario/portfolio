import { 
    Css3Icon, 
    GithubIcon, 
    GitIcon, 
    Html5Icon, 
    JavascriptIcon, 
    JestIcon, 
    LinkedinIcon, 
    ReactIcon, 
    TailwindIcon, 
    TypescriptIcon, 
    ViteIcon 
} from '@/Components/Icons'

import { UserRound, ZapIcon, Briefcase, Timeline, Mail, Phone } from 'lucide-react'

import { env } from './'

export const MENU_OPTIONS = [
    { id: "about-section", name: 'Sobre', icon: UserRound },
    { id: "skills-section", name: 'Habilidades', icon: ZapIcon },
    { id: "projects-section", name: 'Projetos', icon: Briefcase },
    { id: "carrer-section", name: 'Carreira', icon: Timeline },
    { id: "contacts-section", name: 'Contatos', icon: Mail },
]

export const STACKS_VALUES = [
    { name: "HTML5", icon: Html5Icon },
    { name: "CSS3", icon: Css3Icon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubIcon },
    { name: "Tailwind", icon: TailwindIcon},
    { name: "Jest", icon: JestIcon },
    { name: "Vitest", icon: ViteIcon }
]

export const CARRER_INFORMATION = {
    academico: [
        {
            title:"Tecnólogo | Desenvolvimento FullStack (Estácio)",
            role: "Estudante Universitário",
            description:"Atualmente estou cursando Desenvolvimento FullStack na Instituição Estácio de Sá.",
            date:"Fev/2023 - Jun/2025",
            isActive: false
        },
        {
            title:"Básico | Ensino Médio Completo",
            role: "Estudante",
            description:"Ao final de 2023 me formei no ensino médio na instituição Colégio Cascavelense.",
            date:"Jan/2020 - Dez/2022",
            isActive: false
        }
    ],
    profissional: [
        {
            title:"Compass Uol",
            role: "Front End Development",
            description:"Atualmente estou trabalhando como Programador trainee na Compass em soluções Front-End e Back-End.",
            date:"Fev/2025 - Até hoje",
            isActive: true
        },
        {
            title:"Compass Uol",
            role: "Estágiario Desenvolvimento FullStack React & Node",
            description:"Atuei como estagiário na Compass UOL, onde adquiri conhecimentos em Desenvolvimento Front-End com React e Desenvolvimento Back-End com NestJS. Durante o estágio, desenvolvi projetos, como um e-commerce, aplicando as tecnologias aprendidas.",
            date:"Jun/2024 - Nov/2024",
            isActive: false
        }
    ]
}

export const CONTACTS_OPTIONS = [
    {
        label: 'E-mail',
        value: 'thomazhilario5@gmail.com',
        href: env.MAIL_URL,
        icon: Mail
    },
    {
        label: 'Telefone',
        value: env.PHONENUMBER,
        href: env.WHATSAPP_URL,
        icon: Phone
    },
    {
        label: 'Linkedin',
        value: '@thomazalvesdev',
        href: env.LINKEDIN_URL,
        icon: LinkedinIcon
    },
    {
        label: 'Github',
        value: '@ThomazHilario',
        href: env.GITHUB_URL,
        icon: GithubIcon
    },
]