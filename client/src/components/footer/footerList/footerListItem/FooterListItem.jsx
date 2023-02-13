import "./footerListItem.scss";


const FooterListItem = ({ src, name }) => {
  return (
    <li className="listItem">
        <a href={src} target="_blank" rel="noreferrer">{name}</a>
    </li>
  )
}

export default FooterListItem