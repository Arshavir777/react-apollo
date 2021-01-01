import React from 'react';

function Home() {

    return (
        <div>
            <section className="hero is-large is-info is-bold">
                <div className="hero-body" style={{backgroundImage: 'url(/dist/assets/images/mission_feature.webp)', backgroundPosition: 'center'}}>
                    <div className="container">
                        <h1 className="title">
                            SpaceX
      </h1>
                        <h2 className="subtitle">
                            Space Exploration Technologies Corp. (SpaceX)
                            is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne,
                            California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation
                            costs to enable the colonization of Mars. SpaceX has developed several launch vehicles,
                            as well as the Dragon cargo spacecraft and the Starlink satellite constellation
                            (providing internet access),
                            and has flown humans to the International Space Station on the SpaceX Dragon 2.
      </h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;