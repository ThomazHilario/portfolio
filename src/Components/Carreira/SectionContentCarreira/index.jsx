// Css
import './section-content-carreira.css'

export const SectionContentCarreira = ({children, titulo}) => {
    return(
       <section className='section__content__carreira'>
            <h2>{titulo}</h2>

            <ul>
                {children}
            </ul>
       </section> 
    )
}