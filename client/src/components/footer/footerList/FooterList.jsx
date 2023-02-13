import React from "react"
import "./footerList.scss";
import FooterListItem from "./footerListItem/FooterListItem";





const FooterList = ({links}) => {
  return (
    <ul className="list">
        {
            links.map((link) => <FooterListItem key={link.id} name={link.name} src={link.src}/>)
        }
    </ul>
  )
}

export default FooterList