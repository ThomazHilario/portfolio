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
    If
} from "@/Components"

import { ProjectCard } from './ProjectCard'

import { env } from '@/Config'

export const Projects = () => {
    const { data, isLoading } = useGitHubAutomatedRepos(env.GITHUB_USERNAME, env.GITHUB_REPOSITORIES_TYPE)

    const projects = useMemo(() => data || [], [data])

    return(
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
                                            banner={project.banner[0]}
                                        />
                                    )
                                })
                            }
                        </If>
                    </CarouselContent>

                    <div className='flex justify-center items-center gap-5 mt-5 lg:hidden'>
                        <CarouselPrevButton/>
                        <CarouselNextButton/>
                    </div>
                </CarouselViewport>

                <CarouselNextButton className='hidden lg:flex'  />
            </Carousel>
        </Section>
    )
}