import AdProps from './f_p_ad';
import renta from '../Media/footer/f_renta.png';
import pielo from '../Media/footer/f_pielo.png';
import tygames from '../Media/footer/f_tokyogames.jpg';
import stage from '../Media/footer/f_stageSite.jpg';

function Ad() {
    return (
        <>
            <div className="mx-auto mt-5 d-flex justify-content-center">
                <AdProps img={renta} />
                <AdProps img={pielo} />
                <AdProps img={tygames} />
                <AdProps img={stage} />
            </div>
        </>
    )
}
export default Ad;