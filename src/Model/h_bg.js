import bg from '../Media/header/h_bg.jpg';

function Bg() {
    return (
        <>
            <img src={bg} className="position-relative z-0 w-100 d-none d-xxl-block" style={{height:'160vh'}} alt=""></img>
            <img src={bg} className="position-relative z-0 w-100 d-none d-xl-block d-xxl-none" style={{height:'129vh'}} alt=""></img>
            
            
            
        </>
    )
}
export default Bg;