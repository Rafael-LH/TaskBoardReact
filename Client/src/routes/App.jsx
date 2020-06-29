import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
)
export default App;