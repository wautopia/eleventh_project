import visual from '../Media/header/h_visual.jpg';

function Visual() {
    return (
        <>
            <div className="row g-0">
                <img src={visual} className="mt-5 position-absolute end-0 d-none d-xxl-block" style={{ top: '7%', width: '73%', height:'98%'}} alt=""></img>
                <img src={visual} className="mt-5 position-absolute d-none d-xl-block d-xxl-none" style={{ top: '6%',right:'1%', width: '72%', height:'90%'}} alt=""></img>
                <img src={visual} className="mt-5 position-absolute d-none d-lg-block d-xl-none" style={{ top: '8%', right: '2%', width: '71%', height:'88%'}} alt=""></img>
                <img src={visual} className="mt-5 position-absolute d-none d-md-block d-lg-none" style={{ top: '6%', right: '2%', width: '71%', height:'86%'}} alt=""></img>
                <img src={visual} className="position-relative d-block d-sm-block d-md-none col-12" alt=""></img>
                
            </div>
        </>
    )
}
export default Visual;