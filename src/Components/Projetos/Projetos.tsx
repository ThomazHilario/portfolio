import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { Carousel, CarouselContent, CarouselNextButton, CarouselPrevButton, CarouselViewport } from '@/Components/Commons'
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

                <article>
                    <Carousel>
                        <CarouselViewport className='md:w-full'>
                            <CarouselContent className='flex gap-5 justify-between md:w-full md:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-center'>
                                {
                                    data.map((project) => {
                                        return(
                                            <ProjectCard
                                                key={project.id}
                                                homepage={project.homepage}
                                                title={project.name.replace(/(-app|-+)/g,' ')}
                                                description={project.description}
                                                topics={project.topics.filter(topic => topic !== 'deployed')}
                                                banner={project.banner.replace('DIGOARTHUR','ThomazHilario')}
                                            />
                                        )
                                    })
                                }
                            </CarouselContent>

                            <div className='flex justify-center items-center gap-5 mt-5 md:hidden'>
                                <CarouselPrevButton/>
                                <CarouselNextButton/>
                            </div>
                        </CarouselViewport>
                    </Carousel>
                </article> 
            </Section>
        </ScaleFadeIn>
    )
}