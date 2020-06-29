import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route exac path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>
)
export default App;