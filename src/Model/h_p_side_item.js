function SideItem(props) {
    return (
        <>
            <p className="item m-0 fs-3 fw-bolder">{props.item}</p>
            <p className="itemInEn m-0" style={{ fontSize: '60%'} }>{props.itemInEn}</p>
        </>
    )
}
export default SideItem;