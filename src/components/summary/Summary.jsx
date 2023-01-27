import styled from "styled-components"
import Background from "../../assets/images/BackgroundImg.jpg"
import SummaryInfoCard from "./SummaryInfoCard"

const Summary = () => {
  return (
    <Container>
        <Img src={Background} alt="Summury" />
        <SummaryInfoCard/>
    </Container>
  )
}

export default Summary

const Container = styled.div`
    height: 527px;
    margin-top:100px;
`
const Img =styled.img`
    height: 432px;
    width: 100%;
`