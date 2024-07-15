import Bg from '../Model/h_bg';
import Akudamadrive from '../Model/h_logo_akudamadrive_bk';
import Bluray from '../Model/h_logo_blu-ray';
import SideItems from '../Model/h_side_items';
import SideVisuals from '../Model/h_side_visuals';
import Aku from '../Model/h_logo_aku';
import Visual from '../Model/h_visual';
import bg from '../Media/header/h_bg.jpg';

function Header() {
    return (
        <>
        <div style={{ paddingLeft: '6%', paddingRight: '6%', paddingTop: '2rem', paddingBottom: '2rem' }} className="position-absolute z-1 w-100 d-none d-xl-block">
                <div className="m-auto position-relative row g-0" style={{maxWidth:'1373px'} }>
                    <div className="col-3 d-flex flex-column text-start" style={{ width:'24%' }}>
                        <Akudamadrive />
                        <SideItems />
                        <SideVisuals/>
                    </div>
                    <div className="col-9">
                        <Bluray />
                        <Visual/>
                    </div>
                </div>
                <Aku/>  
            </div>
            <div style={{ paddingLeft: '3%', paddingRight: '2%', paddingTop: '2rem', paddingBottom: '2rem' }} className="position-absolute z-1 w-100  d-none d-md-block d-xl-none ">
                <div className="m-auto position-relative row g-0" style={{ maxWidth: '1373px' }}>
                    <div className="col-3 d-flex flex-column text-start" style={{ width: '24%' }}>
                        <Akudamadrive />
                        <SideItems />
                        <SideVisuals />
                    </div>
                    <div className="col-9">
                        <Bluray />
                        <Visual />
                    </div>
                </div>
                <Aku />   
            </div>
            <div style={{}} className="position-absolute z-1 w-100 d-block d-md-none">
                <img src={bg} className="position-absolute z-0 w-100 h-100 top-0 start-0 mb-2 " style={{ }} alt=""></img>
                    <div className="m-auto position-relative " style={{ maxWidth: '1373px' }}>
                        <div className="col-12 position-relative  " style={{  }}>
                            <Visual />
                            <Akudamadrive/>
                            <div className="mx-3">
                                <Bluray />
                                <SideVisuals />
                            </div>
                        </div>
                    </div>
            </div>
            <Bg />
        </>
    )
}

export default Header;