function SideItem(props) {
    return (
        <div className="SideItem">
            <p className="item">{props.item}</p>
            <p className="itemInEn">{props.itemInEn}</p>
        </div>
    )
}
export default SideItem;