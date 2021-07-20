import './App.css';
import React, { } from 'react'
import Event from './Components/Events/Event.component'
import Navbar from './Components/Navbar/Navbar.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './Components/common/notFound';
function App() {

  return (
    <div className="App">
      <Navbar />
      <main className="">
        <Switch>
          <Route path="/events/:id" component={Event} />
          <Route path="/events" component={Event} />
          <Route path="/posts/:year?/:month?" component="" />
          <Route path="/shop" component="" />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component="" />
          <Redirect to="/not-found" />
        </Switch>
      </main>

    </div>
  );
}

export default App
