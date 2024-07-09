import NoticeProps from './m_p_notice';
function Notice() {
    return (
        <>
            <div className="position-absolute top-0" style={{ width: '35%', left: '12%', transform: 'rotate(-2deg)' }}>
                <p className="fs-1 text-start text-white m-0">オシラセ</p>
                <div style={{ border: '3px solid #e20c13', maxWidth: '675px' }}>
                    <div className="m-4">
                        <div className="overflow-auto" style={{ height: '690px', }}>    
                            <NoticeProps date="2023/11/21" imp="NEW" content="『アクダマドライブ』全話収録Blu-ray発売記念！キャストサイン入りグッズが当たるWeb抽選会開催決定！"/>
                            <NoticeProps date="2023/08/29" content="『アクダマドライブ』全話収録Blu-ray発売決定！"/>
                            <NoticeProps date="2023/06/09" content="BS日テレにて再放送決定！"/>
                            <NoticeProps date="2022/01/28" content="TVアニメ『アクダマドライブ』各配信サービスにて月額見放題配信開始！"/>
                            <NoticeProps date="2022/01/05" content="『アクダマドライブ』舞台化決定！"/>
                            <NoticeProps date="2021/09/01" content="『アクダマドライブ』オリジナルサウンドトラック配信開始！"/>
                            <NoticeProps date="2021/08/23" content="『アクダマドライブ』コミカライズ版の特装デジタル単行本が3か月連続リリース決定！"/>
                            <NoticeProps date="2021/05/21" content="#ディレクターズカット「カンゼンバン」スタッフ&キャストコメント、場面写真公開！"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notice;