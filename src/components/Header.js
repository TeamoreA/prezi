import Search from './Search'
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Nav,
    NavDropdown,
} from "react-bootstrap";

const Header = ({ dateAscending, toggleAscending, performSearch }) => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Prezi</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                >
                    <NavDropdown
                        title="Sort by Date Created"
                        id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item onClick={toggleAscending}>
                            {dateAscending ? "Descending" : "Ascending"}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Search performSearch={performSearch} />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
