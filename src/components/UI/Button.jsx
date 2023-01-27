import styled from "styled-components"

const Button = ({children, variant = "contained", borderRadius='rounded'}) => {
  return (
    <StyledButton variant={variant} borderRadius={borderRadius}>{children}</StyledButton>
  )
}

export default Button

const getBackgroundColor = (props)=>{
  return props.variant === "contained" ? " #8A2B06" : "#fff"
}
const getBorder = (props)=>{
  return props.variant === "contained" ? "none" : "1px solid #8A2B06"
}
const getColor = (props)=>{
  return props.variant === "contained" ? "#fff" : "#8A2B06"
}
const getBorderRadius = (props)=>{
  return props.borderRadius === "rounded" ? "20px" : "6px"
}

const StyledButton = styled.button`
    background:${getBackgroundColor};
    border-radius: ${getBorderRadius};
    padding: 10px 32px;
    font-weight:600;
    font-size: 16px;
    line-height: 24px;
    color: ${getColor};
    border:${getBorder};
    cursor: pointer;
    :hover{
     background-color: #7e2a0a;
     color: #fff;
    }
    :active{
      background-color: #682409;
      color:#fff;
    }
`
