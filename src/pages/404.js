
import { Link } from "react-router-dom"
function NotFalPage() {



    return (

        <div className="table mainbox">
            <div className="table-cell">
                <div className="holder">
                    <h2 className="notPage">Page not found</h2>
                    <h1 className="N44"> 404</h1>
                    <h2 className="notPage">Sorry, there's nothing to see here.</h2>
                    <Link to='/'><button className="goHome"  > GO HOME</button></Link>
                </div>
            </div>
        </div>

    )
}
export default NotFalPage
