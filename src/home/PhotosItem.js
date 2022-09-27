import { ContainerHomeCenter } from "../containr/container1"
function PhotoItens(url,index) {
    console.log(url,)
    return (

        <ContainerHomeCenter style={{ height:300}}>
            
            <div>
                <img style={{ margin: 10, width: "10rem", borderRadius: "10px" }} src={url.url}  />
                <p>{url.name}</p>
            </div>
            <div className="invertColorContainer"></div>
            <div id="cursor"></div>

        </ContainerHomeCenter>

    )
} export default PhotoItens





