import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ReactComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var message = "";

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-secondary text-light" closeButton>
                    <Modal.Title>Adicionar item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReactComponent;