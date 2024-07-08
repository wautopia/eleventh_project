import SideItem from './h_p_side_item';
import sideStripe from '../Media/header/h_side_stripe.svg';

function SideItems() {
    return (
        <div className=" position-relative" style={{ marginTop: '2em', maxWidth:'288px' }}>
            <img src={sideStripe} style={{ height: '68vh' }} alt=""></img>
            <div className="position-absolute top-0" style={{ maxWidth:'190px', left:'20%' }}>
                <SideItem item="オシラセ" itemInEn="NEWS" />
                <div className="pt-3">
                    <SideItem item="オンエア" itemInEn="ON AIR"/>
                </div>
                <div className="pt-3">
                    <SideItem item="スタッフ/キャスト" itemInEn="STAFF/CAST"/>
                </div>
                <div className="pt-3">
                    <SideItem item="アラスジ" itemInEn="STORY"/>
                </div>
                <div className="pt-3">
                    <SideItem item="キャラクター" itemInEn="CHARACTOR"/>
                </div>
                <div className="pt-3">
                    <SideItem item="エンバン" itemInEn="BLURAY/DVD"/>
                </div>
                <div className="pt-3">
                    <SideItem item="オンガク" itemInEn="MUSIC"/>
                </div>
                <div className="pt-3">
                    <SideItem item="グッズ" itemInEn="GOODS"/>
                </div>
                <div className="pt-3">
                    <SideItem item="スペシャル" itemInEn="SPECIAL"/>
                </div>
            </div>
        </div>
    )
}
export default SideItems;