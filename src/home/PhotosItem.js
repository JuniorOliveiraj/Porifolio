import { ContainerHomeCenter } from "../containr/container1"
import Card from 'react-bootstrap/Card';
function PhotoItens(url, name){
    console.log(url)
    return(
        
        <ContainerHomeCenter style={{display:"flex"}}>
        <Card style={{ width: '18rem', backgroundColor: "#ffff", margin: 10 }}>
            <Card.Img style={{ width: '10rem' }} variant="top" src={url.url} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button variant="primary">Go somewhere</button>
            </Card.Body>
        </Card>
    </ContainerHomeCenter>
    )
}export default PhotoItens