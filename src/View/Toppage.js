import Window from '../ViewModel/window';
import Header from '../ViewModel/header';
import Main from '../ViewModel/main';
import Footer from '../ViewModel/footer';

function Toppage() {
    return (
        <div className="Toppage overflow-hidden">
            <div className="" style={{ backgroundColor: `rgba(0,0,0,0.7)` }}>
            <Window />
            <Header />
            <Main />
            <Footer/>
            </div>
           
        </div>
    )
}
export default Toppage;