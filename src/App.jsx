import React from 'react';
import Home from './components/Home'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache
} from '@apollo/client';
import Header from './components/Layouts/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MissionList from './components/Mission/MissionList';
import DragonList from './components/Dragon/DragonList';

function App() {

    const client = new ApolloClient({
        uri: 'https://api.spacex.land/graphql/',
        cache: new InMemoryCache()
    });

    return (
        <Router>
            <div>
               <Header />
                <ApolloProvider client={client}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/missions">
                            <MissionList />
                        </Route>
                        <Route path="/dragons">
                            <DragonList />
                        </Route>
                    </Switch>
                </ApolloProvider>
            </div>
        </Router>

    );
}

export default App;