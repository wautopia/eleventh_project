import SideVisual from './h_p_side_visual';
import side01 from '../Media/header/h_side01.png';
import side02 from '../Media/header/h_side02.png';
import side03 from '../Media/header/h_side03.png';

function SideVisuals() {
    return (
        <div className="SideVisuals">
            <SideVisual img={side01} />
            <SideVisual img={side02} />
            <SideVisual img={side03} />
        </div>
    )
}
export default SideVisuals;