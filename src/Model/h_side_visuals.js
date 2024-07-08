import SideVisual from './h_p_side_visual';
import side01 from '../Media/header/h_side01.png';
import side02 from '../Media/header/h_side02.jpg';
import side03 from '../Media/header/h_side03.jpg';

function SideVisuals() {
    return (
        <div className="mt-5">
            <SideVisual img={side01} />
            <div className="mt-3">
                <SideVisual img={side02} />
            </div>
            <div className="mt-3">
                <SideVisual img={side03} />
            </div>
        </div>
    )
}
export default SideVisuals;