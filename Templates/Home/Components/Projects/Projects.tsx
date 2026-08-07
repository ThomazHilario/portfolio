'use client';

import { useMemo } from 'react';
import { useGitHubAutomatedRepos } from 'github-automated-repos'

import { 
    Carousel, 
    CarouselContent, 
    CarouselNextButton, 
    CarouselPrevButton, 
    CarouselViewport 
} from '@/Components/UI'

import { 
    Section, 
    SectionHeader, 
    SectionTitle, 
    SectionSubtitle,
} from "@/Components/Commons"

import { If } from '@/Components/Utils';

import { ProjectCard } from './ProjectCard'

import { env } from '@/Config'
import { SlideIn } from '@/Components/Transitions';

export const Projects = () => {
    const { data, isLoading } = useGitHubAutomatedRepos(env.GITHUB_USERNAME, env.GITHUB_REPOSITORIES_TYPE)

    const projects = useMemo(() => data?.map(project => ({ ...project, banner: encodeURI(project.banner[0]) })) || [], [data])

    return(
        <SlideIn initial="slideLeft" id='projects-section'>
            <Section className='projects'>
                <SectionHeader>
                    <SectionTitle as='h1'>Projetos</SectionTitle>
                    <SectionSubtitle as='h2'>Projetos Selecionados</SectionSubtitle>
                </SectionHeader>    

                <Carousel>
                    <CarouselPrevButton className='hidden lg:flex'  />

                    <CarouselViewport>
                        <CarouselContent className='flex gap-4'>
                            <If conditional={!isLoading} fallback={<h1>te</h1>}>
                                {
                                    projects.map((project) => {
                                        return(
                                            <ProjectCard
                                                key={project.id}
                                                homepage={project.homepage}
                                                title={project.name.replace(/(-app|-+)/g,' ')}
                                                description={project.description}
                                                topics={project.topics.filter(topic => topic !== env.GITHUB_REPOSITORIES_TYPE)}
                                                banner={project.banner}
                                            />
                                        )
                                    })
                                }
                            </If>
                        </CarouselContent>

                        <div className='flex justify-center items-center gap-5 mt-5 lg:hidden'>
                            <CarouselPrevButton aria-label='Botão para voltar o carrossel' />
                            <CarouselNextButton aria-label='Botão para avançar o carrossel'/>
                        </div>
                    </CarouselViewport>

                    <CarouselNextButton className='hidden lg:flex'  />
                </Carousel>
            </Section>
        </SlideIn>
    )
}