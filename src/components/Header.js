import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

const Header = ({ onSearch, dateAscending, toggleAscending }) => {
    const [searchValue, setSearchValue] = useState("");
    function submitSearch(e) {
        e.preventDefault();
        onSearch(searchValue);
        setSearchValue("");
    }

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
                            {dateAscending ? "Ascending" : "Descending"}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex" onSubmit={submitSearch}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button type="submit" variant="outline-success">
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
