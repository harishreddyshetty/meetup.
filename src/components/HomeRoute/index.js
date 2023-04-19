import RegisterContext from '../../RegisterContext/RegisterContext'
import {CustomButton, Heading, DivContainer, Para} from './styled'

const HomeRoute = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const UnregisteredPage = () => (
    <>
      <DivContainer>
        <Heading color="#334155">Welcome to Meetup</Heading>
        <Para>Please register for the topic</Para>
        <CustomButton onClick={onClickRegister} type="button">
          Register
        </CustomButton>

        <img
          alt="meetup"
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        />
      </DivContainer>
    </>
  )

  const registeredPage = (name, topic) => (
    <>
      <DivContainer>
        <Heading registered>Hello {name}</Heading>
        <Para>Welcome to {topic}</Para>

        <img
          alt="meetup"
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        />
      </DivContainer>
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, registrationStatus} = value

        return (
          <>
            <nav>
              <img
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              />
            </nav>
            {registrationStatus
              ? registeredPage(name, topic)
              : UnregisteredPage()}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default HomeRoute
