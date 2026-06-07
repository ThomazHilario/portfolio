// Components
import { SobreMim, Habilidades, Projetos, Carreira, Contatos } from '../../Components'

import { Fragment } from 'react/jsx-runtime';

export default function Home(){
    return(
        <Fragment>
            <SobreMim/>

            <Habilidades/>

            <Projetos/>

            <Carreira/>

            <Contatos/>
        </Fragment>
    )
}