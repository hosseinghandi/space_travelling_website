// import { useState } from 'react'
import { useState, useEffect } from "react";
//import data
import data from "./asset/data.json";
//pages
import Home from "./pages/Home.jsx";
import Crew from "./pages/crew.jsx";
import Destination from "./pages/destination.jsx";
import Techno from "./pages/technology.jsx";
//components
import Nav from "./components/nav.jsx";

const planetsDestination = data.destinations;
const crewDetail = data.crew;
const technoDetail = data.technology;

function App() {
  const [page, setPage] = useState("Home");
  // rendering the page based on the request
  // home is the initial page which at the first the state value is set to true

  const [destinationPage, setDestinationPage] = useState(false);
  const [menoVisibile, setVisibile] = useState(false);

  return (
    <>
      <Nav
        current={page}
        set={setPage}
        setmeno={setVisibile}
        menoVisibile={menoVisibile}
        setVisibile={setVisibile}
      ></Nav>

      {page === "Home" && (
        <Home
          setpage={setPage}
          isdestinationasked={destinationPage}
          setDestinationPage={setDestinationPage}
          dataForDestination={planetsDestination}
        />
      )}

      {page === "Destination" && <Destination data={planetsDestination} />}
      {page === "Crew" && <Crew data={crewDetail} />}
      {page === "Techno" && <Techno data={technoDetail} />}
    </>
  );
}

export default App;
