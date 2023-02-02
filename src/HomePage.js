import 'bootstrap/dist/css/bootstrap.min.css'
import './Image.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
export const Home=()=>
{
    return(
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="dark" className="bg-primary">
                <Container>
                    <Navbar.Brand href="/" className="">Zealous ServiceCenter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="thivin"/>
                    <Navbar.Collapse id="thivin">
                        <Nav className="ms-5">
                            <NavDropdown title="BikeDetails" id="basic-nav-dropdown">
                                <NavDropdown.Item href="createbikedetails">Create</NavDropdown.Item>
                                <NavDropdown.Item href="listallbikedetails">ListAll(update & Read & Delete)</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="ServiceDetails" id="basic-nav-dropdown" className="ms-5">
                                <NavDropdown.Item href="listallservicedetails">ListAll</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                            <button className="btn btn-outline-dark me-5" onClick={()=>
                            {
                                sessionStorage.removeItem("auth");
                                window.location.assign("/")
                            }}>
                                Logout
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    )
}