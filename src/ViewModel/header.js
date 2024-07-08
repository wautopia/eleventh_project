import Bg from '../Model/h_bg';
import Akudamadrive from '../Model/h_logo_akudamadrive_bk';
import Bluray from '../Model/h_logo_blu-ray';
import SideItems from '../Model/h_side_items';
import SideVisuals from '../Model/h_side_visuals';
import Aku from '../Model/h_logo_aku';
import Visual from '../Model/h_visual';

function Header() {
    return (
        <>
            <div style={{ paddingLeft: '6%', paddingRight: '6%', paddingTop: '2rem', paddingBottom:'2rem' }} className="position-absolute z-1 w-100">
                <div className="m-auto position-relative" style={{maxWidth:'1373px'} }>
                    <div className="d-flex flex-column text-start" style={{ width:'24%' }}>
                        <Akudamadrive />
                        <SideItems />
                        <SideVisuals/>
                    </div>
                    <Bluray />
                    <Visual/>
                </div>
                <Aku/>  
            </div>
            <Bg />
        </>
    )
}

export default Header;