import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Prezis from "./components/Prezis";

export const App = () => {
    const [prezis, setPrezis] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);
    async function toggleAscending() {
        setSortAscending(!sortAscending);
        const filterPrezis = await fetchPrezis("");
        setPrezis(filterPrezis);
    }

    async function searchPrezi(searchValue) {
        const filterPrezis = await fetchPrezis(searchValue);
        setPrezis(filterPrezis);
    }

    async function fetchPrezis(searchValue) {
        const params = {
            search_value: searchValue,
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
        console.log("prezis", fetchedPrezis);
        return fetchedPrezis;
    }

    useEffect(async () => {
        const fechedPrezis = await fetchPrezis("");
        setPrezis(fechedPrezis);
    }, []);

    return (
        <Container>
            <Header
                onSearch={searchPrezi}
                dateAscending={sortAscending}
                toggleAscending={toggleAscending}
            />
            <Prezis allPrezis={prezis} />
        </Container>
    );
};

export default App;
