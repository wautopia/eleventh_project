import logoAkudamadrive from '../Media/header/h_logo_akudamadrive_bk.png';

function Akudamadrive() {
    return (
        <>
            <img src={logoAkudamadrive} className="d-none d-md-block" alt=""></img>
            <img src={logoAkudamadrive} className="position-absolute w-100 px-4 d-block d-sm-block d-md-none" style={{ top: '35%',filter: 'drop-shadow(0px 0px 1vw #d91a0d) drop-shadow(0px 0px 0.5vw #d91a0d) drop-shadow(0px 0px 0.5vw #d91a0d)', }} alt=""></img>
        </>
    )
}
export default Akudamadrive;