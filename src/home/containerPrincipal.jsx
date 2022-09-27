import videoBg from '../assets/ElementsBackground.mp4'
import { ContainerHomeCenter, ContainerHomeBluerSombra } from "../containr/container1";
import { useState } from 'react';
import styled from 'styled-components';

import '../css/cursor.css'
function ViewPrincipal() {
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringText, setIsHoveringText] = useState(false);
    let cursor = document.getElementById('cursor');
     let cursor2 = document.getElementById('cursor2');
     let cursor3 = document.getElementById('cursor3');
    const onMouseMove = (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor2.style.left = e.pageX + 'px';
        cursor2.style.top = e.pageY + 'px';
        cursor3.style.left = e.pageX + 'px';
        cursor3.style.top = e.pageY + 'px';
        //onMouseMove={activeCursor}
    };
    const teste = () =>{setIsHovering(false);}
    const handleMouseOver = () => { setIsHovering(true);};
    const handleMouseOut = () => { setIsHovering(false);};
    const handleMouseOverText = () => { setIsHoveringText(true);setIsHovering(true) };
    const handleMouseOutText = () => { setIsHoveringText(false); setIsHovering(false);};
    // if(isHovering == false){ onMouseMove()}

    return (
        <div className={isHovering ? "invertColorContainer": "invertColorContainer active"}>
        <ContainerHomeCenter onMouseMove={isHovering ? onMouseMove : teste}  >
            <ViewlCursor onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></ViewlCursor>

            <ContainerHomeBluerSombra  ></ContainerHomeBluerSombra>
            <video className='videoBg' src={videoBg} autoPlay loop muted />
            <div className={isHovering ? "cursor ": "cursor active"}  id="cursor"></div>
		    <div className={isHoveringText ? "cursor2 hover":"cursor2" } id="cursor2"></div>
		    <div className={isHoveringText ? "cursor3 hover":"cursor3" }  id="cursor3"></div>
            <div className='containerText-videobg '> <h1  onMouseOver={handleMouseOverText} onMouseOut={handleMouseOutText}>Developer <br /><span>Junior</span></h1></div>
            
        </ContainerHomeCenter>
    </div>
    )
} export default ViewPrincipal


export const ViewlCursor = styled.div`
   
    margin-top: 100px;
    position: absolute;
  width: 100%;
  height: 80vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 6px solid red;
   //  background-color: red;;
 z-index: 3;

`