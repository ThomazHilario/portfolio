import { SiHtml5, SiCss3, SiTypescript,SiReact,SiGit, SiGithub, SiTailwindcss, SiJavascript, SiJest, SiVitest } from "react-icons/si"


const propsIcons = {
    className:"text-[#6366F1]",
    size:40
}

export const stacks = [
    { name: "HTML5", icon: <SiHtml5  {...propsIcons} /> },
    { name: "CSS3", icon: <SiCss3  {...propsIcons} /> },
    { name: "JavaScript", icon: <SiJavascript  {...propsIcons} /> },
    { name: "TypeScript", icon: <SiTypescript  {...propsIcons} /> },
    { name: "React", icon: <SiReact  {...propsIcons} /> },
    { name: "Git", icon: <SiGit  {...propsIcons} /> },
    { name: "GitHub", icon: <SiGithub  {...propsIcons} /> },
    { name: "Tailwind", icon: <SiTailwindcss  {...propsIcons} /> },
    { name: "Jest", icon: <SiJest {...propsIcons} /> },
    { name: "Vitest", icon: <SiVitest  {...propsIcons} /> }
]