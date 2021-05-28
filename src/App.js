import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Prezis from "./components/Prezis";

export const App = () => {
    const [prezis, setPrezis] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);
    const [fetching, setSetching] = useState(false);
    const [searchText, setSearchText] = useState('');
    async function toggleAscending() {
        setSortAscending(!sortAscending);
    }

    function submitSearch(text) {
        setSearchText(text)
    }

    async function fetchPrezis() {
        setSetching(true)
        const params = {
            search_value: searchText,
            ascending: String(sortAscending),
        };
        var query = Object.keys(params)
            .map(
                (k) =>
                    encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
            )
            .join("&");
        const url = "http://localhost:8000/prezis/?" + query;
        const resp = await fetch(url);
        const fetchedPrezis = await resp.json();
        setSetching(false)
        return fetchedPrezis;
    }

    useEffect(async () => {
        const fetchedPrezis = await fetchPrezis();
        setPrezis(fetchedPrezis);
    }, [searchText, sortAscending]);

    return (
        <Container>
            <Header
                performSearch={submitSearch}
                dateAscending={sortAscending}
                toggleAscending={toggleAscending}
                fetchingPrezis={fetching}
            />
            <Prezis allPrezis={prezis} />
        </Container>
    );
};

export default App;
