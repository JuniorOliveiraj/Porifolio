import { useState } from 'react';
import { ContainerHomeCenter } from '../../containr/container1';
import styled from 'styled-components';
import '../../css/cursor.css'
import qrcode from '../../assets/qrcode.png'
function Lupa() {
    const [activateCursor, setActivateCursor] = useState(false);
    const [activateCursorText, setActivateCursorText] = useState(false);
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
    const removeCursor = () => { setActivateCursor(false); }
    const handleMouseOver = () => { setActivateCursor(true); };
    const handleMouseOverText = () => { setActivateCursorText(true); setActivateCursor(true) };
    const handleMouseOutText = () => { setActivateCursorText(false); setActivateCursor(false); };
    // if(activateCursor == false){ onMouseMove()}
    console.log(activateCursor)

    return (
            
            <ContainerCenter onMouseMove={onMouseMove} style={{}}  >
               
                <div className={activateCursor ? "cursor " : "cursor active"} id="cursor"></div>
                <div className={activateCursorText ? "cursor2 hover" : "cursor2"} id="cursor2"></div>
                <div className={activateCursorText ? "cursor3 hover" : "cursor3"} id="cursor3"></div>
               
                <ContainerText > <h1 onMouseOver={handleMouseOverText} onMouseOut={handleMouseOutText}>Developer <br /><span>Junior</span></h1></ContainerText>
               

            </ContainerCenter>
    )
}export default Lupa

export const ContainerCenter = styled.div`
   
height: 100vh;
width: 100%;
margin: 0;
align-items: center;
text-align: center;
display: flex;
text-align: center;
justify-content: center;
background-color:#0c0c0c;
border: 5px solid #ffffff;


`
export const ContainerText = styled.div`
width: 70%;
height: auto;
background-color:#ffffff ;
top: 0;
font-size: 2rem;

`