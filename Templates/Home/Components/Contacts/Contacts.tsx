import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter,
    CardHeader, 
    CardTitle 
} from "@/Components/UI";
import { 
    Section, 
    SectionHeader, 
    SectionSubtitle, 
    SectionTitle 
} from "@/Components";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/Components/Icons";

export const Contacts = () => {
    return(
        <Section>
            <SectionHeader>
                <SectionTitle as="h1">Contatos</SectionTitle>
                <SectionSubtitle as="h2">Entre em contato comigo</SectionSubtitle>
            </SectionHeader>
                
            
            <ul className="flex flex-wrap justify-center items-center gap-4">
                <li>
                    <a className='linkSocial' href='mailto:thomazhilario5@gmail.com' target='blank'>
                        <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                            <CardHeader>
                                <Mail color='blueviolet' size={50}/>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">E-mail</CardTitle>
                            </CardContent>
                            <CardFooter className="border-0 p-0">
                                <CardDescription>thomazhilario5@gmail.com</CardDescription>
                            </CardFooter>
                        </Card>
                    </a>
                </li>              

                <li>
                    <a className='linkSocial' href='https://api.whatsapp.com/send?phone=5585988274949' target='blank'>
                        <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                            <CardHeader>
                                <Phone color='blueviolet' size={50}/>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">Telefone</CardTitle>
                            </CardContent>
                            <CardFooter className="border-0 p-0">
                                <CardDescription>(85) 98827-4949</CardDescription>
                            </CardFooter>
                        </Card>
                    </a>
                </li>

                <li>
                    <a className='linkSocial' href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'>
                        <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                            <CardHeader>
                                <LinkedinIcon color='blueviolet'/>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">Linkedin</CardTitle>
                            </CardContent>
                            <CardFooter className="border-0 p-0">
                                <CardDescription>@thomazalvesdev</CardDescription>
                            </CardFooter>
                        </Card>
                    </a>
                </li>

                <li>
                    <a className='linkSocial' href='https://github.com/ThomazHilario' target='blank'>
                        <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                            <CardHeader>
                                <GithubIcon color='blueviolet'/>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">GitHub</CardTitle>
                            </CardContent>
                            <CardFooter className="border-0 p-0">
                                <CardDescription>@ThomazHilario</CardDescription>
                            </CardFooter>
                        </Card>
                    </a>
                </li>
            </ul>
        </Section>  
    )
}