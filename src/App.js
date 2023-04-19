import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFound from './components/NotFound'

import RegisterContext from './RegisterContext/RegisterContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {registrationStatus: false, name: '', topic: ''}

  updateDetails = (name, topic, registerFailure) => {
    this.setState({name, topic, registrationStatus: !registerFailure})
  }

  render() {
    const {registrationStatus, name, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          registrationStatus,
          name,
          topic,
          updateDetails: this.updateDetails,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
