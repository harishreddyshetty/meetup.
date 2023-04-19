import styled from 'styled-components'

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  border: 0px none;
  background-color: #3b82f6;
  cursor: pointer;
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  color: ${props => (props.registered ? '#2563eb' : '#334155')};
  font-size: 45px;
  margin-bottom: 0px;
`

export const Para = styled.p`
  color: #475569;
  font-size: 22px;
  margin-top: 0px;
  padding-top: 0px;
`
