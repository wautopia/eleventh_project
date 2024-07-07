import SideItem from './h_p_side_item';
import sideStripe from '../Media/header/h_side_stripe.svg';

function SideItems() {
    return (

        <div className="SideItems">
            <img src={sideStripe} alt=""></img>
            <div className="itemdetails">
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
                <SideItem item="" itemInEn=""/>
            </div>
        </div>
    )
}
export default SideItems;