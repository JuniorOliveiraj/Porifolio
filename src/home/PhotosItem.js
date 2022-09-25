

function PhotoItens(url, name){
    console.log(url)
    return(
        
        <div>
                <img src={url.url} title={name.name} />
                

        </div>
    )
}export default PhotoItens