import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Input from "./Containers/Input";
import Favourites from "./Containers/Favourites";
import AddLocation from "./Containers/AddLocation";
import Display from "./Containers/Display";
import LocationSearch from "./Containers/LocationSearch";
import "./App.css";
import ViewNotes from "./Containers/ViewNotes";
import AddNotes from "./Containers/AddNotes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/addlocation">
          <AddLocation />
        </Route>
        <Route path="/searchlocation">
          <LocationSearch />
        </Route>
        <Route path="/result">
          <Display />
        </Route>
        <Route path="/notes/:id">
          <ViewNotes />
        </Route>
        <Route path="/addnotes/:id">
          <AddNotes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
