import { ContainerHomeCenter } from "../../../containr/container1"
import styled from "styled-components"
function SlideTree (){


    return(
        <ContaienrTree>
           Tree 
        </ContaienrTree>
          
        
    )
}export default SlideTree


export const ContaienrTree = styled.div`
      position: absolute;
    background: rgb(200, 113, 240);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    z-index: 2;
`