import { ContainerHomeCenter } from "../containr/container1"
import { Link } from "react-router-dom"
import '../css/404.css'
function NotFalPage() {
    return (
        <section className="container404">
                <div className="D404 D404_Text" title="404">404</div>
                <div className="D404 D44_button" title="404" style={{marginTop: "-150px"}}><Link to='/'><button className="goHome"  > GO HOME</button></Link></div>
        </section>

    )
}
export default NotFalPage


