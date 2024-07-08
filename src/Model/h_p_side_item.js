function SideItem(props) {
    const styles = {
        item: {
            fontFamily: 'Noto Sans JP,sans-serif',
            fontWeight: '800',
        }
    }
    return (
        
        <>
            <p className="item m-0 fs-3 fw-bolder" style={{ styles}}>{props.item}</p>
            <p className="itemInEn m-0" style={{ fontSize: '50%'} }>{props.itemInEn}</p>
        </>
    )
}
export default SideItem;