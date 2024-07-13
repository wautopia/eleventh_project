import { Timeline } from "react-twitter-widgets";

function Twitter() {
    return (
        <>
            <div className="position-absolute top-0" style={{ width: '35%', right: '12%', transform: 'rotate(3deg)' }}>
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
        </>
    )
}
export default Twitter;