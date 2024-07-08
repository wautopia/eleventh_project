import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import bg from '../Media/window/bg.jpg';
import Stripe from '../Media/window/w_stripe.svg';

function Window() {
    const container = useRef();
    
    useGSAP(() => {
        gsap.set(".stripe", { rotation: -5 });
    }, { scope: container });
    
    return (  
        <>
            <div ref={container}>
                <img src={Stripe}  alt="" className="stripe position-fixed z-1" style={{ width: "6%", height: "280%", top: '-76%', bottom: '-76%',left:'-2%' }}></img>
                <img src={Stripe}  alt="" className="stripe position-fixed z-1" style={{ width: "6%", height: "280%", top: '-76%', bottom: '-76%', right:'-3%' }}></img>
            </div>
            <img src={bg} alt="" className=" position-fixed z-n1" style={{ height: '110%' }}></img>
        </>
    )
}
export default Window;