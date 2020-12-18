import React, { useCallback, useState } from 'react';
import './App.css';
import LaunchList from './components/LaunchList';
import Header from './components/Header/Header';
import Jumbo from './components/Header/Jumbo/Jumbo';
import LaunchProfile from './components/LaunchProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  ApolloClient, InMemoryCache,ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
});
function App() {
  const [jamboState, setJamboState] = useState(false)
  const [newId, setId]=useState(23)
  const callBack= useCallback((newId)=>{
    
    return setId(newId)
  },[])
  console.log(newId)
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <Header setJamboState={setJamboState}/>
          <Jumbo jamboState={jamboState} setJamboState={setJamboState}/>
        <Switch>
          <Route path="/LaunchList" 
            render={(props:any)=>(<LaunchList {...props} callBack={callBack} />)}></Route>
           <Route path="/Profile" 
            render={(props:any)=>(<LaunchProfile {...props} newId={newId} />)}></Route>
        </Switch>
        </ApolloProvider>
        {/* <LaunchList  callBack={callBack}/>
        <LaunchProfile newId={id}/> */}
      </Router>
    
      {/* <LaunchList/> */}
    </div>
  );
}

export default App;