import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Prezis from "./components/Prezis";

export const App = () => {
    const [prezis, setPrezis] = useState([
        {
            id: "56f137f432fbb67217182785",
            title: "incididunt amet ad nostrud",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "consectetur laborum",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "March 6, 2014",
        },
        {
            id: "56f137f4d62116d1231786ca",
            title: "Lorem commodo excepteur minim",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "cupidatat excepteur",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "July 31, 2015",
        },
        {
            id: "56f137f46ba885ffacf4d3ff",
            title: "ut ipsum ut nostrud",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "nisi aliquip",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "July 5, 2015",
        },
        {
            id: "56f137f48510226968e8c9e7",
            title: "anim id enim duis",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "exercitation commodo",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "July 11, 2015",
        },
        {
            id: "56f137f40684a0672110741c",
            title: "consectetur dolor nisi amet",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "minim velit",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "May 3, 2015",
        },
        {
            id: "56f137f408cec65e5e9aefc6",
            title: "laborum do duis reprehenderit",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "adipisicing ullamco",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "June 30, 2014",
        },
        {
            id: "56f137f4c607b02dbfee5c91",
            title: "est consectetur magna ullamco",
            thumbnail: "https://placeimg.com/400/400/any",
            creator: {
                name: "anim eu",
                profileUrl: "http://randomprofile.prezi.com/",
            },
            createdAt: "March 4, 2015",
        },
    ]);
    const [sortAscending, setSortAscending] = useState(true);

    const sortedResults = prezis.sort((a, b) => sortAscending ? a.title - b.title  : b.title - a.title);
    function searchPrezi(searchValue) {
    }

    return (
        <Container>
            <Header onSearch={searchPrezi} />
            <Prezis allPrezis={prezis} />
        </Container>
    );
};

export default App;
