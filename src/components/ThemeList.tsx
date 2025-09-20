import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export const ThemeList = () => {
    return <>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={3}>
                <ListGroup  as="ol" numbered>
                    <ListGroup.Item action href="#link1">
                        React
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        JS Base (Avito)
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                        CSS
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link4">
                        Forms
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link5">
                        Семантика тегов
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link6">
                        Хекслет
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link7">
                        JS массивы
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link8">
                        JS объекты
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="#link1">React</Tab.Pane>
                    <Tab.Pane eventKey="#link2">JS Base (Avito)</Tab.Pane>
                    <Tab.Pane eventKey="#link3">CSS</Tab.Pane>
                    <Tab.Pane eventKey="#link4">Forms</Tab.Pane>
                    <Tab.Pane eventKey="#link5">Семантика тегов</Tab.Pane>
                    <Tab.Pane eventKey="#link6">Хекслет</Tab.Pane>
                    <Tab.Pane eventKey="#link7">JS массивы</Tab.Pane>
                    <Tab.Pane eventKey="#link8">JS объекты</Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
    </>
}