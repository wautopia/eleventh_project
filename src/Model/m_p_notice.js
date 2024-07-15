function NoticeProps(props) {
    return (
        <>
            <div className="p-3 m-3 d-block d-sm-block d-md-none d-lg-none d-xl-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <p className="fs-6 text-white text-start m-0">{props.date}</p>
                <div className="h-50 text-white mt-1" style={{ width:'50px', backgroundColor:'#c71414' }}>{props.imp}</div>
                <p className="fs-4 text-white text-start m-0">{props.content}</p>
            </div>
            <div className="p-3 m-2 d-none d-md-block d-xl-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <p className="fs-6 text-white text-start m-0">{props.date}</p>
                <div className="h-50 text-white mt-1" style={{ width: '50px', backgroundColor: '#c71414' }}>{props.imp}</div>
                <p className="fs-4 text-white text-start m-0">{props.content}</p>
            </div>

        </>
    )
}
export default NoticeProps;