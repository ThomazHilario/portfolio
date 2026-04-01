import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { ProjectCard } from './CardProjetos/ProjectCard'
import { ScaleFadeIn } from '../index'

// import css
import './projetos.css'

// env 
import env from '../../utils/env'
import { Section, SectionHeader } from '../Section'
import { Carousel, CarouselContent, CarouselNextButton, CarouselPrevButton, CarouselViewport } from '../Commons/Carousel'

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos(env.GITHUB_USERNAME, env.GITHUB_REPOSITORIES_TYPE)
    
    return(
        <ScaleFadeIn id='container_projetos' position="right">
            <Section>
                <SectionHeader>
                    <h1 className="text-fuchsia-500">Projetos</h1>
                    <h2 className="text-white text-2xl md:text-6xl">Projetos selecionados</h2>
                </SectionHeader>    

                <article className=''>
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