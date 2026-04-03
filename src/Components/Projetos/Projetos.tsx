import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { Carousel, CarouselContent, CarouselItem, CarouselNextButton, CarouselPrevButton, CarouselViewport } from '@/Components/Commons'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/Components/Section"
import { ProjectCard } from './CardProjetos/ProjectCard'
import { ScaleFadeIn } from '../index'

// env 
import env from '@/utils/env'

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos(env.GITHUB_USERNAME, env.GITHUB_REPOSITORIES_TYPE)
    
    return(
        <ScaleFadeIn id='container_projetos' position="right">
            <Section>
                <SectionHeader>
                    <SectionTitle>Projetos</SectionTitle>
                    <SectionSubtitle>Projetos Selecionados</SectionSubtitle>
                </SectionHeader>    

                <Carousel>
                    <CarouselPrevButton className='hidden md:flex'  />

                    <CarouselViewport>
                        <CarouselContent className='flex gap-4'>
                            {
                                data.map((project) => {
                                    return(
                                        <CarouselItem className='w-105'>
                                            <ProjectCard
                                                key={project.id}
                                                homepage={project.homepage}
                                                title={project.name.replace(/(-app|-+)/g,' ')}
                                                description={project.description}
                                                topics={project.topics.filter(topic => topic !== 'deployed')}
                                                banner={project.banner.replace('DIGOARTHUR','ThomazHilario')}
                                            />
                                        </CarouselItem> 
                                    )
                                })
                            }
                        </CarouselContent>

                        <div className='flex justify-center items-center gap-5 mt-5 md:hidden'>
                            <CarouselPrevButton/>
                            <CarouselNextButton/>
                        </div>
                    </CarouselViewport>

                    <CarouselNextButton className='hidden md:flex'  />
                </Carousel>
            </Section>
        </ScaleFadeIn>
    )
}