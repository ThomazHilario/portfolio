// Css
import './card-carreira-item.css'

type CardCarreiraItemProps = {
    title: String;
    description: String;
    date: String;
    isActive: Boolean;
}

export const CardCarreiraItem = ({title, description, date, isActive}: CardCarreiraItemProps) => {
    return(
        <li className='item__carreira' style={{borderColor:isActive ? '#4ae2919a' : 'rgba(81, 21, 127, 0.318)' }}>
            {/* Titulo */}
            <h3>{title}</h3>

            {/* Descrição */}
            <p>{description}</p>

            {/* Data */}
            <h4>{date}</h4>
        </li>
    )
}