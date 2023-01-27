import React from 'react'
import Button from '../../UI/Button'
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus-icon.svg"
import styled from 'styled-components'

const MealItemForm = ({id}) => {
  return (
    <Styledform>
      <StyledInput>
            <label htmlFor={id}>Amount</label>
            <input 
              type="number" 
              id={id}
              min={1} max={5} 
              defaultValue={1}/>                
      </StyledInput>
        <StyledButton><StyledIcon/>Add</StyledButton>
      </Styledform>
    )
}

export default MealItemForm

const StyledButton =  styled(Button)`
`
const StyledIcon = styled(PlusIcon)`
    margin-right:10px;
`
const StyledInput = styled.div`
    margin-bottom:12px;
    label{
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #222222;
    }
    input{
        width: 60px;
  height: 32px;
  border: 1px solid #D6D6D6;
  border-radius: 6px;
  margin-left: 20px;
  outline:none;
  padding: 4px 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  cursor: pointer;
    }
`
const Styledform = styled.form`
    display:flex;
    flex-direction: column;
    align-items:flex-end
`