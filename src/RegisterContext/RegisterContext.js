import React from 'react'

const RegisterContext = React.createContext({
  updateDetails: () => {},
  registrationStatus: false,
  name: '',
  topic: '',
})

export default RegisterContext
