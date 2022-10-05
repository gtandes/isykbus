import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import ModalMain from './components/Modal/ModalMain'
import Footer from './components/Footer/Footer'

import HomePage from './pages/HomePage/HomePage'
import Bartholet from './pages/Bartholet/Bartholet'
import About from './pages/About/About'
// import Page from './pages/Page'
import Page from './pages/PageV2'

const App = () => {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Switch>
            {/* <Route exact path ="/" component={HomePage}/> */}

            {/* <Route path='/bartholet' component={Bartholet} render={(props) => {
              <Page title="Bartholet | iSkybus">
                <Bartholet {...props}/>
              </Page>
            }}/>

            <Route path='/about' component={About} render={(props) => {
              <Page title="About Us | iSkybus">
                <About {...props}/>
              </Page>
            }}/> */}


            {/* Pagev2 */}
            <Route
                exact
                path="/"
                render={props => (
                  <Page {...props} component={HomePage} title="iSkyBus - Home" />
                )}
            />

            <Route
              exact
              path="/bartholet"
              render={props => (
                <Page {...props} component={Bartholet} title="Bartholet | iSkyBus" />
              )}
            />

            <Route
              exact
              path="/about"
              render={props => (
                <Page {...props} component={About} title="About iSkyBus | iSkyBus" />
              )}
            />

        </Switch>

        <ModalMain/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
