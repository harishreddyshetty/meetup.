import {Component} from 'react'
import RegisterContext from '../../RegisterContext/RegisterContext'

import {Div, Form, Image, Input, Label, Select, CustomButton} from './styled'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {name: '', topic: topicsList[0].displayText, registerFailure: false}

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateTopic = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {updateDetails} = value
          const {name, topic, registerFailure} = this.state
          const submitDetails = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({registerFailure: true})
            } else {
              const {history} = this.props
              history.push('/')
              updateDetails(name, topic, registerFailure)
            }
          }
          return (
            <>
              <nav>
                <img
                  alt="website logo"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                />
              </nav>

              <Div>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <Form onSubmit={submitDetails}>
                  <h1>Let us join</h1>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    onChange={this.updateName}
                    value={name}
                    placeholder="Your name"
                    type="text"
                    id="name"
                  />
                  <Label htmlFor="topics">TOPICS</Label>
                  <Select value={topic} onChange={this.updateTopic} id="topics">
                    {topicsList.map(eachOption => (
                      <option key={eachOption.id}>
                        {eachOption.displayText}
                      </option>
                    ))}
                  </Select>

                  <CustomButton type="submit">Register Now</CustomButton>
                  {registerFailure && <p>Please enter your name</p>}
                </Form>
              </Div>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default RegisterRoute
