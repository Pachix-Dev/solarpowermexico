import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function OrderConferences() {
    return (
        <Container className='mt-5'>
            <Tabs
                defaultActiveKey="home"
                id="justify-tab-example"
                className="mb-3 border-bottom border-3 fs-4"
                justify
            >
                <Tab eventKey="home" title="Miércoles 17">
                    <Row className='border-bottom border-1 text-white'>
                        <Col xs={4} md={4} lg={3}>
                            <p className='text-start text-uppercase fs-2 fw-bold'>9:45 - 10:45 <span className='text-start text-uppercase fs-4 fw-medium fst-italic text-light'>Panel</span></p>
                        </Col>
                        <Col xs={8} md={8} lg={9} className='fs-5'>
                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>Nearshoring, Inversión Extranjera Directa y Energía Limpia</p>
                            <p>Políticas Energéticas</p>
                            <div>
                                <Row className='text-left'>
                                    <Col xs={12} md={12} lg={12}>
                                        <p className='fw-bold'>Jesús Carrillo <br /><span className='fw-normal fst-italic'>Director de Economía del Instituto Mexicano para la Competitvidad A.C. (IMCO)</span></p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="profile" title="Jueves 18">
                    
                </Tab>
                <Tab eventKey="longer-tab" title="Viernes 19">
                   
                </Tab>
            </Tabs>
        </Container>
    );
}

export default OrderConferences;