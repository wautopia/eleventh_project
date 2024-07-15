import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import stripe from '../Media/main/m_stripe.svg';
import akudama from '../Media/main/m_logo_akudama.png';
import akudamaWh from '../Media/main/m_logo_akudamadrive-wh.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

function Stripe() {
    const akudamadriveRef = useRef();
    const akudamaRef = useRef();
    const infoRef = useRef();
    const akudamadriveRefxl = useRef();
    const akudamaRefxl = useRef();
    const infoRefxl = useRef();
    const akudamadriveReflg = useRef();
    const akudamaReflg = useRef();
    const infoReflg = useRef();

    useGSAP(() => {
        gsap.fromTo(akudamadriveRef.current, {
            xPercent: -100,yPercent: 179,rotation: -5,
        }, {
            xPercent: -2,yPercent: -25,rotation: -5,scrollTrigger: {
                trigger: akudamadriveRef.current,
                toggleActions: "restart none none restart",
            },
        });
        gsap.fromTo(akudamaRef.current, {
            xPercent: 100,yPercent: 305,rotation: 8,delay: 0.3,
        }, {
            xPercent: -2,yPercent: -60,rotation: 8,delay: 0.3,scrollTrigger: {
                trigger: akudamaRef.current,
                toggleActions: 'restart none none restart',
            },
        });
        gsap.fromTo(infoRef.current, {
            xPercent: -100,yPercent: -395,rotation: 5,delay: 0.6,
        }, {
            xPercent: -2,yPercent: -76,rotation: 5,delay: 0.7,scrollTrigger: {
                trigger: infoRef.current,
                toggleActions: 'restart none none restart',
            },
        });


        gsap.fromTo(akudamadriveRefxl.current, {
            xPercent: -100,yPercent: 216,rotation: -5,
        }, {
            xPercent: -2,yPercent: 53,rotation: -5,scrollTrigger: {
                trigger: akudamadriveRefxl.current,
                toggleActions: "restart none none restart",
            },
        });
        gsap.fromTo(akudamaRefxl.current, {
            xPercent: 100,yPercent: 237,rotation: 8,delay: 0.3,
        }, {
            xPercent: -2,yPercent: -44,rotation: 8,delay: 0.3,scrollTrigger: {
                trigger: akudamaRefxl.current,
                toggleActions: 'restart none none restart',
            },
        });
        gsap.fromTo(infoRefxl.current, {
            xPercent: -100,yPercent: -318,rotation: 5,delay: 0.6,
        }, {
            xPercent: -2,yPercent: -76,rotation: 5,delay: 0.7,scrollTrigger: {
                trigger: infoRefxl.current,
                toggleActions: 'restart none none restart',
            },
        });


        gsap.fromTo(akudamadriveReflg.current, {
            xPercent: -100,yPercent: 138,rotation: -5,
        }, {
            xPercent: -2,yPercent: -13,rotation: -5,scrollTrigger: {
                trigger: akudamadriveReflg.current,
                toggleActions: "restart none none restart",
            },
        });
        gsap.fromTo(akudamaReflg.current, {
            xPercent: 100,yPercent: 174,rotation: 8,delay: 0.3,
        }, {
            xPercent: -2,yPercent: -60,rotation: 8,delay: 0.3,scrollTrigger: {
                trigger: akudamaReflg.current,
                toggleActions: 'restart none none restart',
            },
        });
        gsap.fromTo(infoReflg.current, {
            xPercent: -100,yPercent: -278,rotation: 5,delay: 0.6,
        }, {
            xPercent: -2,yPercent: -111,rotation: 5,delay: 0.7,scrollTrigger: {
                trigger: infoReflg.current,
                toggleActions: 'restart none none restart',
            },
        });
    });


    return (
        <>
            <div className="d-none d-xxl-block">
                <div
                    ref={akudamadriveRef}
                    className="position-relative z-3"
                    style={{
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        height: '70px',
                        width: '104%',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                            width:'700px',
                        }}
                    ></div>
                    <img
                        className="position-absolute top-0 h-100 py-2 px-4 " alt=""
                        style={{ left: '91px', width: '698px', } }
                        src={akudamaWh}
                    ></img>
                </div>
                <div
                    ref={akudamaRef}
                    className="position-relative z-1"
                    style={{
                        height: '72px',
                        width: '104%',
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                         filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                            width: '315px',
                        }}
                    ></div>
                    <p
                        className="position-absolute text-white m-0 px-3 " alt=""
                        style={{
                            fontSize: '235%',
                            left: '702px',
                        }} 
                    >オシラセ&ツイッター</p>
                </div>
            </div>


            <div className="d-none d-xl-block d-xxl-none">
                <div
                    ref={akudamadriveRefxl}
                    className="position-relative z-3"
                    style={{
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        height: '70px',
                        width: '104%',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                            width: '700px',
                        }}
                    ></div>
                    <img
                        className="position-absolute top-0 h-100 py-2 px-4 " alt=""
                        style={{ left: '91px', width: '698px', }}
                        src={akudamaWh}
                    ></img>
                </div>

                <div
                    ref={akudamaRefxl}
                    className="position-relative z-1"
                    style={{
                        height: '72px',
                        width: '104%',
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                    ref={infoRefxl}
                    className="position-relative z-2"
                    style={{
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        height: '56px',
                        width: '104%',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                            width: '315px',
                        }}
                    ></div>
                    <p
                        className="position-absolute text-white m-0 px-3 " alt=""
                        style={{
                            fontSize: '235%',
                            left: '702px',
                        }}
                    >オシラセ&ツイッター</p>
                </div>
            </div>


            <div className="d-none d-lg-block d-xl-none">
                <div
                    ref={akudamadriveReflg}
                    className="position-relative z-3"
                    style={{
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        height: '70px',
                        width: '104%',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                            width: '700px',
                        }}
                    ></div>
                    <img
                        className="position-absolute top-0 h-100 py-2 px-4 " alt=""
                        style={{ left: '91px', width: '698px', }}
                        src={akudamaWh}
                    ></img>
                </div>

                <div
                    ref={akudamaReflg}
                    className="position-relative z-1"
                    style={{
                        height: '72px',
                        width: '104%',
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                    ref={infoReflg}
                    className="position-relative z-2"
                    style={{
                        background: 'linear-gradient(to right, rgba(225, 0, 0, 1) 0%, rgba(255, 130, 0, 1) 100%)',
                        height: '56px',
                        width: '104%',
                        filter: 'drop-shadow(-0rem 0.6rem 0px rgba(0, 0, 0, 0.3))',
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
                            width: '315px',
                        }}
                    ></div>
                    <p
                        className="position-absolute text-white m-0 px-3 " alt=""
                        style={{
                            fontSize: '235%',
                            left: '702px',
                        }}
                    >オシラセ&ツイッター</p>
                </div>
            </div>
        </>
    )
}
export default Stripe;