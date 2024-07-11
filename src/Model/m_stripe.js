import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import stripe from '../Media/main/m_stripe.svg';
import akudama from '../Media/main/m_logo_akudama.png';
import akudamaWh from '../Media/main/m_logo_akudamadrive-wh.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

function Stripe() {
    const akudamaRef = useRef();
    const infoRef = useRef();
    const akudamadriveRef = useRef();

    useGSAP(() => {
        //gsap.to(trigger.current, {
        //    scrollTrigger: {
        //        trigger: trigger.current,
        //        toggleActions: 'restart reverse',
        //    },
        //})

        gsap.fromTo(akudamadriveRef.current, {
            
            xPercent: -100,
            yPercent: 179,
            rotation: -5,
        }, {
            xPercent: -2,
            yPercent: -25,
            rotation: -5,
            scrollTrigger: {
                trigger: akudamadriveRef.current,
                toggleActions: "restart none none restart",
            },
        });

        gsap.fromTo(akudamaRef.current, {
            
            xPercent: 100,
            yPercent: 305,
            rotation: 8,
            delay: 0.3,
        }, {
            xPercent: -2,
            yPercent: -60,
            rotation: 8,
            delay: 0.3,
            scrollTrigger: {
                trigger: akudamaRef.current,
                toggleActions: 'restart none none none',
            },
        });

        gsap.fromTo(infoRef.current, {
            
            xPercent: -100,
            yPercent: -395,
            rotation: 5,
            delay: 0.6,
        }, {
            xPercent: -2,
            yPercent: -76,
            rotation: 5,
            delay: 0.6,
            scrollTrigger: {
                trigger: infoRef.current,
                toggleActions: 'restart none none none',
            },
        });
    });

    return (
        <div className="z-5" >
            <div
                ref={akudamadriveRef}
                className="position-relative z-3"
                style={{
                    background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                    height: '70px',
                    width: '104%',
                }}
            >
                <div
                    className="w-100 h-100 position-absolute" alt=""
                    style={{
                        background: `url(${stripe}) 0 0 / 1580px repeat-x`,
                        transform: 'skewX(-36deg)',
                    }}
                ></div>
                <div
                    className="h-100 position-absolute z-4"
                    style={{
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(239, 60, 0, 1) 100%)',
                        left: '91px',
                        transform: 'skewX(-36deg)',
                        width:'36%',
                    }}
                ></div>
                <img
                    className="position-absolute top-0 h-100 py-2 px-4 " alt=""
                    style={{ left: '91px', width: '36%', } }
                    src={akudamaWh}
                ></img>
            </div>

            <div
                ref={akudamaRef}
                className="position-relative z-1"
                style={{
                    height: '72px',
                    width: '104%',
                    background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)'
                }}
            >
                <div
                    className="position-absolute w-100 h-100" alt=""
                    style={{
                        background: `url(${akudama}) 0 0 / 137px repeat-x`,
                    }} 
                ></div>
            </div>

            <div
                ref={infoRef}
                className="position-relative z-2"
                style={{
                    background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                    height: '56px',
                    width: '104%',
                }}
            >
                <div
                    className="w-100 h-100 position-absolute"
                    style={{
                        background: `url(${stripe}) 0 0 / 1380px repeat-x`,
                        transform: 'skewX(-36deg)',
                    }}
                ></div>
                <div
                    className="h-100 position-absolute z-4"
                    style={{
                        background: 'linear-gradient(to right, rgba(236, 47, 0, 1) 0%, rgba(241, 71, 0, 1) 100%)',
                        left: '700px',
                        transform: 'skewX(-36deg)',
                        width: '16%',
                    }}
                ></div>
                <p
                    className="position-absolute text-white m-0 px-3 " alt=""
                    style={{
                        fontSize: '235%',
                        left: '700px',
                    }} 
                >オシラセ&ツイッター</p>
            </div>
        </div>
    )
}
export default Stripe;