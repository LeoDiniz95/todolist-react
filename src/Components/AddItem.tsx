import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { urlItems } from '../EndPoints';

function AddItem() {
    const [show, setShow] = useState(false);
    const reload = () => window.location.reload();
    const handleShow = () => setShow(true);
    var [name, setName] = useState("");

    function inputValue(event: any) {
        setName(event.target.value);
    }

    function handleClose() {
        setShow(false);
    }

    function addItem() {
        if (name !== "") {
            axios.post(urlItems, { name })
                .then((response: AxiosResponse<any>) => {
                    if (!response.data.failure) {
                        setShow(false);
                    }
                });
        }
    }

    return (
        <>
            <Button variant="dark" className="d-flex p-1 rounded-circle" onClick={handleShow}>
                <BsFillPlusCircleFill className="align-items-center justify-content-center"></BsFillPlusCircleFill>
            </Button>


            <Modal show={show} onHide={handleClose} onExit={reload}>
                <Modal.Header className="bg-secondary text-light" closeButton>
                    <Modal.Title>Adicionar item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nome do item"
                            aria-label="Nome"
                            onChange={inputValue}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="secondary" onClick={addItem}>
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddItem;