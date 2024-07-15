import Window from '../ViewModel/window';
import Header from '../ViewModel/header';
import Main from '../ViewModel/main';
import Footer from '../ViewModel/footer';

function Toppage() {
    return (
        <>
        <div className="Toppage overflow-hidden">
            <div className="d-none d-lg-block" style={{ backgroundColor: `rgba(0,0,0,0.6)` }}>
                <Window />
                <Header />
                <Main />
                <Footer/>
            </div>

        </div>
            <div className="Toppage d-block d-lg-none">
                <Window />
                <Header />
                <div className="d-block d-lg-none" style={{ backgroundColor: `rgba(0,0,0,0.6)` }}>
                    <Main />
                    <Footer />
                </div>
        </div>
        </>
    )
}
export default Toppage;

