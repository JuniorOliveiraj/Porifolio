import { ContainerHomeCenter } from "../containr/container1"
function PhotoItens(url, name){
    console.log(url)
    return(
        
        <ContainerHomeCenter style={{}}>
            <img style={{margin:10, width:"10rem",borderRadius:"10px" }} src={url.url} alt={name.name} />

         </ContainerHomeCenter>

    )
}export default PhotoItens