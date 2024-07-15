function AdProps(props) {
    return (
        <>
            <img src={props.img} style={{ width: "21%" }} className="ms-3 px-2 py-2 d-none d-xxl-block" alt=""></img>
            <img src={props.img} style={{ width: "23%" }} className="ms-3 px-2 py-2 d-none d-xl-block d-xxl-none" alt=""></img>
            <img src={props.img} style={{ width: "43%" }} className="ms-3 px-2 py-3 d-none d-md-block d-xl-none" alt=""></img>
            <img src={props.img} style={{ width: "55%" }} className="ms-3 px-2 py-2 d-none d-sm-block d-md-none" alt=""></img>
            <img src={props.img} style={{ width: "80%" }} className="ms-3 px-2 py-2 d-block d-sm-none" alt=""></img>
        </>
    )
}
export default AdProps;