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
            <div className="position-relative z-1 w-100  d-none d-lg-block d-xl-none ">
                <img src={bg} className="position-absolute z-0 w-100 d-none d-lg-block d-xl-none" style={{ height: '103%' }} alt=""></img>

                <div className="m-auto position-relative " style={{ paddingLeft: '3%', paddingRight: '2%', paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '1373px' }}>
                    <div className=" d-flex flex-column text-start" style={{ width: '24%' }}>
                        <Akudamadrive />
                        <SideItems />
                        <SideVisuals />
                    </div>
                        <Bluray />
                        <Visual />
                </div>
                <Aku />   
            </div>
            <div className="position-relative z-1 w-100  d-none d-md-block d-lg-none ">
                <img src={bg} className="position-absolute z-0 w-100 d-none d-md-block d-lg-none" style={{ height: '100%' }} alt=""></img>

                <div className="m-auto position-relative " style={{ paddingLeft: '3%', paddingRight: '2%', paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '1373px' }}>
                    <div className=" d-flex flex-column text-start" style={{ width: '24%' }}>
                        <Akudamadrive />
                        <SideItems />
                        <SideVisuals />
                    </div>
                    <Bluray />
                    <Visual />
                </div>
                <Aku />
            </div>
            <div className="position-relative z-1 w-100 d-block d-md-none">
                <img src={bg} className="position-absolute z-0 w-100 top-0 start-0 mb-2 " style={{ height:'101%' }} alt=""></img>
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