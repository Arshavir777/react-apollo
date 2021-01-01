import React from 'react';
import MissionItem from './MissionItem';
import { useQuery, gql } from '@apollo/client';


const SPACEX_MISSIONS = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_success
      details
      rocket {
        rocket_name
      }
    }
  }
`;

function MissionList() {

    const { loading, error, data } = useQuery(SPACEX_MISSIONS);

    if (loading) return <p className="has-text-centered">Loading...</p>;
    if (error) return <p>Error :(</p>;

    const list = data.launchesPast;

    return (
        <div>
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Missions
                        </h1>
                        "You want to wake up in the morning and think the future
                        is going to be great - and that’s what being a spacefaring
                        civilization is all about. It’s about believing in the future
                        and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
 <br />
 Elon Musk
                    </div>
                </div>
            </section>
            {list.map((mission, i) =>
                <div className="columns is-desktop mx-2" key={i}>
                    <div className="column is-12">
                        <MissionItem
                            title={mission.mission_name}
                            details={mission.details}
                            rocket={mission.rocket}
                        />
                    </div>
                </div>
            )}
        </div>

    );
}

export default MissionList;