import { ContainerHomeCenter } from "../../../containr/container1"
import styled from "styled-components"
function SlideOne (){


    return(
        <ContaienrOne>
           one 
        </ContaienrOne>
          
        
    )
}export default SlideOne


export const ContaienrOne = styled.div`

position: absolute;
    background: rgb(255, 75, 75);
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    z-index: 0;
    overflow: hidden !important;
`