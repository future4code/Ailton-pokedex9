import React from 'react'
import { HeaderContainer, Button, PokedexButton, ImgPoke} from "./styled"
import Pokemon from "../../img/Pokemon.png"

class Header extends React.Component {
    render() {
    
    return (
        <div>  
                  
        <HeaderContainer>
        <ImgPoke>
            <img src={Pokemon} />      
        </ImgPoke>  
            <Button>               
                <PokedexButton>Pokédex</PokedexButton>          
                </Button>               
        </HeaderContainer>
        </div>
    )
}

}
export default Header
