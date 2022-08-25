import { Container, NavButton } from "./style";

const NavBar = () => {
    return (
        <Container>
            <NavButton href="#">Home</NavButton>
            <NavButton href="#">Lista de produtos</NavButton>
            <NavButton href="#">Criar produto</NavButton>
            <NavButton href="#">Editar produto</NavButton>
        </Container>
    )
}

export default NavBar;