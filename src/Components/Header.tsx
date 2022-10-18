import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AddItem from './AddItem';

function ReactComponent() {
    return (
        <Navbar variant="dark">
            <Container className="justify-content-center" fluid>
                <NavbarBrand href="#">
                    <h1>Lista de itens</h1>
                </NavbarBrand>
                <AddItem />
            </Container>
        </Navbar>
    );
}

export default ReactComponent;