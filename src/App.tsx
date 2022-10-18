import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Row from 'react-bootstrap/Row';
import ListItems from './Components/ListItems';

function App() {
    function refresh(): void {
        window.location.reload();
    }

    return (
        <Container className="bg-dark vh-auto p-0" fluid>
            <Row>
                <Header />
            </Row>
            <Row className="flex-column vh-100">
                <ListItems />
            </Row>
        </Container>
    );
}

export default App;
