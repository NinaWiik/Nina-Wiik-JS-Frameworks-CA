import React from "react";
import Heading from "../layout/Heading";
import GamesList from "../games/GamesList";

function Home() {
    return (
        <>
            <Heading title="Games overview" />
            <GamesList />
        </>
    );
}

export default Home;