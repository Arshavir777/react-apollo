import React from 'react';
import DragonItem from './DragonItem';
import { useQuery, gql } from '@apollo/client';


const SPACEX_DRAGONS = gql`
  query {
    dragons(limit: 10) {
      id
      description
      crew_capacity
      type
      name
      diameter {
        meters
      }
      wikipedia
    }
  }
`;

function DragonList() {

  const { loading, error, data } = useQuery(SPACEX_DRAGONS);

  if (loading) return <p className="has-text-centered">Loading...</p>;
  if (error) return <p>Error :(</p>;

  const list = data.dragons;

  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Dragons
                        </h1>
                        
                        The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
                    </div>
        </div>
      </section>

      <div>
        {list.map((dragon, i) => <DragonItem key={i} dragon={dragon} />)}
      </div>
    </div>
  );
}

export default DragonList;