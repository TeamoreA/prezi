import React from "react";
import Moment from "react-moment";
import 'moment-timezone';
import { Col, Row, Card, Button } from "react-bootstrap";

const Prezis = ({ allPrezis }) => {
    return (
        <Row className="mt-2">
            {allPrezis.map((prezi) => (
                <Col md={4} className="mt-2" key={prezi.id}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={prezi.thumbnail} />
                        <Card.Body>
                            <Card.Title>{prezi.title}</Card.Title>
                            <Card.Text className="text-muted">
                                <Moment>{prezi.created_at}</Moment>
                            </Card.Text>
                            <Button
                                variant="link"
                                className="pl-0"
                                href={prezi.creator.profile_url}
                            >
                                Created By {prezi.creator.name}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Prezis;
