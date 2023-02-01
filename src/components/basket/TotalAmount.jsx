import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'

const TotalAmount = ({price, onClose, onOrder}) => {
    const orderButton = price > 0 ? <Button onClick={onOrder}>Order</Button> : null;
    
    const fixedPrice = price.toFixed(2);
  return (
    <Container>
        <InfoConteiner>
        <Label>Total Amount</Label>
        <Price>${fixedPrice}</Price>     
        </InfoConteiner>
        
        <ActionButtonContainer>
            <Button 
            variant="outline" 
            onClick={onClose}>Close</Button>

           {orderButton}
        </ActionButtonContainer>
    </Container>
  )
}

export default TotalAmount

const Container = styled.div`
    padding-top:30px;
`
const Label = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #222222;
    margin:0;
`
const Price = styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8A2B06;
    margin: 0;
`
const InfoConteiner = styled.div`
    display: flex;
    justify-content:space-between
`
const ActionButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap:1rem;
`