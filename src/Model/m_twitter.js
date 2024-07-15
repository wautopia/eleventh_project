import { Timeline } from "react-twitter-widgets";

function Twitter() {
    return (
        <>
            <div className="position-absolute top-0 d-none d-xxl-block" style={{ width: '35%', right: '12%', transform: 'rotate(3deg)' }}>
                <p className="fs-1 text-start text-white m-0">ツイッター</p>
                <div style={{ border: '3px solid #e20c13', maxWidth: '656px' }}>
                    <div className="m-4">
                        <div className="overflow-auto" style={{ height: '631px', }}>
                            <div className="m-3">
                                <Timeline
                                    dataSource={{
                                        sourceType: "profile",
                                        screenName: "akudamadrive",
                                    }}
                                    options={{
                                        chrome: 'noheader nofooter ',
                                        theme:'dark',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 d-none d-xl-block d-xxl-none" style={{ width: '41%', right: '8%', transform: 'rotate(3deg)' }}>
                <p className="fs-1 text-start text-white m-0">ツイッター</p>
                <div style={{ border: '3px solid #e20c13', maxWidth: '656px' }}>
                    <div className="m-4">
                        <div className="overflow-auto" style={{ height: '631px', }}>
                            <div className="m-3">
                                <Timeline
                                    dataSource={{
                                        sourceType: "profile",
                                        screenName: "akudamadrive",
                                    }}
                                    options={{
                                        chrome: 'noheader nofooter ',
                                        theme: 'dark',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 d-none d-lg-block d-xl-none" style={{ width: '43%', right: '4%', transform: 'rotate(3deg)' }}>
                <p className="fs-1 text-start text-white ">ツイッター</p>
                <div style={{ border: '3px solid #e20c13', maxWidth: '656px' }}>
                    <div className="m-4">
                        <div className="overflow-auto" style={{ height: '631px', }}>
                            <div className="m-3">
                                <Timeline
                                    dataSource={{
                                        sourceType: "profile",
                                        screenName: "akudamadrive",
                                    }}
                                    options={{
                                        chrome: 'noheader nofooter ',
                                        theme: 'dark',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 d-none d-md-block d-lg-none" style={{ width: '46%', right: '2%', }}>
                <p className="fs-1 text-start text-white mt-5 mb-1">ツイッター</p>
                <div style={{ border: '3px solid #e20c13', maxWidth: '656px' }}>
                    <div className="m-3">
                        <div className="overflow-auto" style={{ height: '631px', }}>
                            <div className="me-2">
                                <Timeline
                                    dataSource={{
                                        sourceType: "profile",
                                        screenName: "akudamadrive",
                                    }}
                                    options={{
                                        chrome: 'noheader nofooter ',
                                        theme: 'dark',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative  d-block d-md-none mx-4">
                <p className="fs-1 text-start text-white mb-1">ツイッター</p>
                <div style={{ border: '3px solid #e20c13', maxWidth: '656px' }}>
                    <div className="my-5 mx-3">
                        <div className="overflow-auto" style={{ height: '631px', }}>
                            <div className="m-2">
                                <Timeline
                                    dataSource={{
                                        sourceType: "profile",
                                        screenName: "akudamadrive",
                                    }}
                                    options={{
                                        chrome: 'noheader nofooter ',
                                        theme: 'dark',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Twitter;