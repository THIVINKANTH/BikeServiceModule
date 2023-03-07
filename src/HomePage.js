import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Image.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoutIcon from '@mui/icons-material/Logout';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
export const Home=()=>
{
    return(
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="dark" className="bg-primary">
                <Container>
                    <Navbar.Brand href="/" className=""><TwoWheelerIcon></TwoWheelerIcon> Zealous ServiceCenter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="thivin"/>
                    <Navbar.Collapse id="thivin">
                        <Nav className="ms-5">
                            <NavDropdown title="BikeDetails" id="basic-nav-dropdown">
                                <NavDropdown.Item href="createbikedetails">Create</NavDropdown.Item>
                                <NavDropdown.Item href="listallbikedetails">ListAll(update & Read & Delete)</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="ServiceDetails" id="basic-nav-dropdown" className="ms-5">
                                <NavDropdown.Item href="createservicedetails">Create</NavDropdown.Item>
                                <NavDropdown.Item href="listallservicedetails">ListAll</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                            <button className="btn btn-outline-dark me-5" onClick={()=>
                            {
                                sessionStorage.removeItem("auth");
                                window.location.assign("/")
                            }}>
                               <LogoutIcon></LogoutIcon>Logout
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    )
}