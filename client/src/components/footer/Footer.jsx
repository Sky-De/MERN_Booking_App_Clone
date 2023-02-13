import "./footer.scss";
import FooterList from "./footerList/FooterList";
import { LinksData1, LinksData2, LinksData3 } from "../data/footerLinksData";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__lists">
            <FooterList links={LinksData1}/>
            <FooterList links={LinksData2}/>
            <FooterList links={LinksData3}/>
            <FooterList links={LinksData1}/>
        </div>
        <div className="footer__copyRight">
            <strong>{`Copyright © 1996–${new Date().getFullYear()} Booking.com™. All rights reserved.`}</strong>
        </div>
    </footer>
  )
}

export default Footer