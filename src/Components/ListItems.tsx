import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BsFillXCircleFill } from 'react-icons/bs';
import { urlItems } from '../EndPoints';

function ListItems() {
    const [items, setItem] = useState([]);
    const isDone = 1;

    useEffect(() => {
        getItems();
    }, []);

    function getItems() {
        axios.get(urlItems)
            .then((response: AxiosResponse<any>) => {
                if (!response.data.failure) {
                    setItem(response.data.data);
                }
            });
    }

    function CheckItem(event: any) {
        axios.put(`${urlItems}/${event.target.id}`)
            .then((response: AxiosResponse<any>) => { if (!response.data.failure) getItems(); });
    }

    function RemoveItem(id: any) {
            axios.delete(`${urlItems}/${id}`)
                .then((response: AxiosResponse<any>) => { if (!response.data.failure) getItems(); });
    }

    return (
        <Container className="d-flex justify-content-center">
            <Card className="p-5 justify-content-center">
                <Form>
                    {items.map((item: { id: any; name: any; done: number; }) => (
                        <div className="mb-3" key={`${item}`}>
                            <Row>
                                <Col md={10}>
                                    <Form.Check
                                        id={`${item.id}`}
                                        type="checkbox"
                                        label={`${item.name}`}
                                        onChange={CheckItem}
                                        checked={item.done === isDone}
                                        disabled={item.done === isDone}
                                    />
                                </Col>

                                <Col md={2}>
                                    {item.done == isDone ||
                                        <Button variant="secondary" onClick={() => RemoveItem(item.id)} className="d-flex p-1 rounded-circle">
                                            <BsFillXCircleFill />
                                        </Button>
                                    }
                                </Col>

                            </Row>
                        </div>
                    ))}
                </Form>
            </Card>
        </Container>
    );
}

export default ListItems;