import logoBluray from '../Media/header/h_logo_blu-ray.png';

function Bluray() {
    return (
        <>
            <img src={logoBluray} className="position-absolute top-0 end-0 d-none d-xxl-block " alt="" style={{ width: '73%', }}></img>
            <img src={logoBluray} className="position-absolute top-0 d-none d-xl-block d-xxl-none" alt="" style={{ width: '71%',right:'2%' }}></img>
            <img src={logoBluray} className="position-absolute d-none d-md-block d-xl-none" alt="" style={{ width: '71%', top: '2%' ,right:'2%',}}></img>
            <img src={logoBluray} className="mt-3 position-relative d-block d-md-none col-12" alt="" ></img>
       </>
    )
}
export default Bluray;