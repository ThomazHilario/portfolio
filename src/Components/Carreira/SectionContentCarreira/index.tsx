// Css
import type { PropsWithChildren } from 'react'
import'./section-content-carreira.css'

type SectionContentCarreiraProps = PropsWithChildren & {
    titulo: string;
}

export const SectionContentCarreira = ({children, titulo}: SectionContentCarreiraProps) => {
    return(
       <section className='section__content__carreira'>
            <h2>{titulo}</h2>

            <ul>
                {children}
            </ul>
       </section> 
    )
}