import { Row, Col, Card, CardText, CardImg, CardTitle, Button } from 'reactstrap'
function Details() {
    console.log("detailsP")
    return (
        <div className="details" >
            <div className="container">
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Go somewhere
                            </Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardImg
                                alt="Card image cap"
                                bottom
                                src="https://picsum.photos/900/180"
                                style={{
                                    height: 180
                                }}
                                width="100%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default Details