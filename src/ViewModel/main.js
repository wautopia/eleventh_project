import Stripe from '../Model/m_stripe';
import Notice from '../Model/m_notice';
import Twitter from '../Model/m_twitter';


function Main() {
    return (
        <>
            
                <Stripe />
            
            <div className="position-relative" style={{ margin: '0 auto', }}>
                <Notice />
                <Twitter/>
            </div>
        </>
    )
}
export default Main;