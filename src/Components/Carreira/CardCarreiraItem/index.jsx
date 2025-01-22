// Css
import './card-carreira-item.css'

export const CardCarreiraItem = ({Title, Description, Date, isActive}) => {
    return(
        <li className='item__carreira' style={{borderColor:isActive ? '#4ae2919a' : 'rgba(81, 21, 127, 0.318)' }}>
            {/* Titulo */}
            <h3>{Title}</h3>

            {/* Descrição */}
            <p>{Description}</p>

            {/* Data */}
            <h4>{Date}</h4>
        </li>
    )
}