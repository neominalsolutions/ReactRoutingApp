
import React from 'react';
import { Card, Container, Nav, Navbar, Button, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
// layout bütün sayfalarda değişmeyen tasarımların yapıldığı sayfamız
// bu sayfa sayesinde sitede üst menü alt menu ve içerik gibi kısımların konumlarını berliliyoruz.

function Layout() {
    return <div>



        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                         <Link style={{ padding: '5px', textDecoration:'none' }} to="users" > Users </Link> 
                         <Link style={{ padding: '5px', textDecoration:'none' }} to="todos" > Todos </Link>
                </Nav>
            </Container>
        </Navbar>


        <Container style={{ minHeight: '20rem' }}>
            <Row>
                {/* dinamik olarak syafadan sayfaya yönlendirme ile değişecek olan kısım */}
                <Outlet />
            </Row>
        </Container>

        <Card className="text-center">
            <Card.Header>Alt Bilgi</Card.Header>
            <Card.Body>
                <Card.Title>ReactJS Routing</Card.Title>
                <Card.Text>
                    React Routing Uygulaması
                </Card.Text>
            </Card.Body>
        </Card>
    </div>;
}

export default Layout;
