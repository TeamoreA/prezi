import React, { useState } from "react";
import { Form, FormControl, Button} from 'react-bootstrap'

const Search = ({performSearch}) => {
    const [searchValue, setSearchValue] = useState("");
    function submitSearch(e) {
        e.preventDefault();
        performSearch(searchValue);
        setSearchValue("");
    }
    return (
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
    );
};

export default Search;
