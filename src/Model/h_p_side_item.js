function SideItem(props) {
    return (
        <>
            <p className="item m-0 fs-3 fw-bolder d-none d-xxl-block">{props.item}</p>
            <p className="itemInEn m-0 d-none d-xxl-block" style={{ fontSize: '60%' }}>{props.itemInEn}</p>
            <p className="item m-0 fs-4 fw-bolder d-none d-xl-block d-xxl-none">{props.item}</p>
            <p className="itemInEn m-0 d-none d-xl-block d-xxl-none" style={{ fontSize: '55%' }}>{props.itemInEn}</p>
            <p className="item m-0 fs-5 fw-bolder d-none d-md-block d-xl-none">{props.item}</p>
            <p className="itemInEn m-0 d-none d-md-block d-xl-none" style={{ fontSize: '50%' }}>{props.itemInEn}</p>
        </>
    )
}
export default SideItem;