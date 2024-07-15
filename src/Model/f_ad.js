import AdProps from './f_p_ad';
import renta from '../Media/footer/f_renta.png';
import pielo from '../Media/footer/f_pielo.png';
import tygames from '../Media/footer/f_tokyogames.jpg';
import stage from '../Media/footer/f_stageSite.jpg';

function Ad() {
    return (
        <>
            <div className="d-none d-xl-block">
                <div className="mx-auto mt-5 d-flex justify-content-center">
                    <AdProps img={renta} />
                    <AdProps img={pielo} />
                    <AdProps img={tygames} />
                    <AdProps img={stage} />
                </div>
            </div>
            <div className=" d-none d-md-block d-xl-none ">
                <div className="mx-auto mt-5 d-flex flex-wrap justify-content-center">
                <AdProps img={renta} />
                <AdProps img={pielo} />
                <AdProps img={tygames} />
                <AdProps img={stage} />
                </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="mx-auto mt-5 d-flex flex-column align-items-center">
                    <AdProps img={renta} />
                    <AdProps img={pielo} />
                    <AdProps img={tygames} />
                    <AdProps img={stage} />
                </div>
            </div>
            <div className="d-block d-sm-none">
                <div className="mx-auto mt-5 d-flex flex-column align-items-center">
                    <AdProps img={renta} />
                    <AdProps img={pielo} />
                    <AdProps img={tygames} />
                    <AdProps img={stage} />
                </div>
            </div>
        </>
    )
}
export default Ad;