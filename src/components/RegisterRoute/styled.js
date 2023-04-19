import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 450px;
  width: 250px;
`

export const Image = styled.img`
  width: 450px;
  margin-left: 50px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #cbd5e1;
  padding-left: 8px;
  color: #7b8794;
  font-size: 16px;
`

export const Label = styled.label`
  color: #64748b;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 5px;
`
export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 8px;
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  border: 0px none;
  background-color: #3b82f6;
  cursor: pointer;
  margin-top: 20px;
`
