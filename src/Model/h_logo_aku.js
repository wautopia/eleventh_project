import logoAku from '../Media/header/h_logo_aku.png';

function Aku() {
    return (
        <>
            <img src={logoAku} width="15%" className="position-absolute z-n1 d-none d-xxl-block" style={{ left: '6%', bottom:'-2%' ,transform:'rotate(-6deg)' }} alt=""></img>
            <img src={logoAku} width="15%" className="position-absolute z-n1 d-none d-xl-block d-xxl-none" style={{ left: '3%', bottom:'4%' ,transform:'rotate(-6deg)' }} alt=""></img>
            <img src={logoAku} width="15%" className="position-absolute z-n1 d-none d-lg-block d-xl-none" style={{ left: '1%', bottom:'5%' ,transform:'rotate(-6deg)' }} alt=""></img>
        </>
    )
}
export default Aku;