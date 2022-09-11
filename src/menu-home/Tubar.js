import ListItensMenu from "./ListItensMenu"
import { useState } from 'react'
import styled from 'styled-components'
import MenuDescTop from "./MenuDescTop"
import { Link } from "react-router-dom"


function Tubar() {
	const [active, setModel] = useState(false)
	const toggleModel = () => {
		setModel(!active)

	}

	return (
		<header className={active ? "nav-active" : ""}>
			<section className="cd-header">
				<div className="header-wrapper">
					<div className="logo-wrap">
						<Link to="/"><span>J</span>R</Link> 
					</div>
					<div className="nav-but-wrap" onClick={toggleModel}>
						<MenuDesctopStyle>
							<MenuDescTop />
						</MenuDesctopStyle>

						<div className="menu-icon hover-target">
							<span className="menu-icon__line menu-icon__line-left"></span>
							<span className="menu-icon__line"></span>
							<span className="menu-icon__line menu-icon__line-right"></span>
						</div>
					</div>
				</div>

			</section>
			
			<ListItensMenu />
			
		</header>

	)
}


export const StyleButtonTwo = styled.span`
position: absolute;
	display: block;
	left: 5%;
	
	cursor: pointer;


	  

`;

export const MenuDesctopStyle = styled.div`

	cursor: pointer;
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 900;
	color: #fff;
	#primary_nav_wrap
	
{
	margin-top:15px
	
}

#primary_nav_wrap ul
{
	list-style:none;
	position:relative;
	margin-right:50px;
	right: 70px;
	margin:0;
	padding:0
}

#primary_nav_wrap ul a
{
	display:block;
	text-decoration:none;
	font-weight: 900;
	color: #fff;
	font-size:12px;
	line-height:32px;
	padding:0 15px;
	font-family: 'Montserrat', sans-serif;
	
}

#primary_nav_wrap ul li
{
	position:relative;
	float:left;
	margin:0;
	padding:0
	
	
}

#primary_nav_wrap ul li.current-menu-item
{
	background: #181717;
	
    border-radius: 10px;
}

#primary_nav_wrap ul li:hover
{
	background: #181717;
    border-radius: 10px;
}

	
	transition: all 0.3s ease-out;
		@media screen and (max-width: 650px) {{
			display:none;
		
		}}

		
	
	transition: all 0.3s ease-out;
	@media screen and (max-width: 850px) {{
			right: 0px;
			#primary_nav_wrap ul{
			
				right: 0px;
				
			}
	
	}


		

`;



export default Tubar