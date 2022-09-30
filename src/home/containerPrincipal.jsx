import videoBg from '../assets/ElementsBackground.mp4'
import { ContainerHomeCenter, ContainerHomeBluerSombra } from "../containr/container1";


function ViewPrincipal() {
 

    return (
        <div >
        <ContainerHomeCenter   >

            <ContainerHomeBluerSombra  ></ContainerHomeBluerSombra>
            <video className='videoBg' src={videoBg} autoPlay loop muted />
            <div className='containerText-videobg '> <h1  >Developer <br /><span>Junior</span></h1></div>
            
        </ContainerHomeCenter>
    </div>
    )
} export default ViewPrincipal


