import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

import { ScaleFadeIn } from "../index"
import { Section, SectionHeader, SectionSubtitle, SectionTitle } from "../Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../Commons";

export const Contatos = () => {
    return(
        <ScaleFadeIn id="container_Contatos" position="right">
            <Section>
                <SectionHeader>
                    <SectionTitle>Contatos</SectionTitle>
                    <SectionSubtitle>Entre em contato comigo</SectionSubtitle>
                </SectionHeader>
                    
                
                <ul className="flex flex-wrap justify-center items-center gap-4">
                    <li>
                        <a className='linkSocial' href='mailto:thomazhilario5@gmail.com' target='blank'>
                            <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                                <CardHeader>
                                    <HiOutlineMail color='blueviolet' size={50}/>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">E-mail</CardTitle>
                                </CardContent>
                                <CardFooter className="border-0! p-0!">
                                    <CardDescription>thomazhilario5@gmail.com</CardDescription>
                                </CardFooter>
                            </Card>
                        </a>
                    </li>              

                    <li>
                        <a className='linkSocial' href='https://api.whatsapp.com/send?phone=5585988274949' target='blank'>
                            <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                                <CardHeader>
                                    <FiPhone color='blueviolet' size={50}/>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">Telefone</CardTitle>
                                </CardContent>
                                <CardFooter className="border-0! p-0!">
                                    <CardDescription>(85) 98827-4949</CardDescription>
                                </CardFooter>
                            </Card>
                        </a>
                    </li>

                    <li>
                        <a className='linkSocial' href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'>
                            <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                                <CardHeader>
                                    <SiLinkedin size={50} color='blueviolet'/>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">Linkedin</CardTitle>
                                </CardContent>
                                <CardFooter className="border-0! p-0!">
                                    <CardDescription>@thomazalvesdev</CardDescription>
                                </CardFooter>
                            </Card>
                        </a>
                    </li>

                    <li>
                        <a className='linkSocial' href='https://github.com/ThomazHilario' target='blank'>
                            <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                                <CardHeader>
                                    <SiGithub size={50} color='blueviolet'/>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">GitHub</CardTitle>
                                </CardContent>
                                <CardFooter className="border-0! p-0!">
                                    <CardDescription>@ThomazHilario</CardDescription>
                                </CardFooter>
                            </Card>
                        </a>
                    </li>
                </ul>
            </Section>  
        </ScaleFadeIn>
    )
}