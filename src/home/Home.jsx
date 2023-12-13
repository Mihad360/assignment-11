import Banner from "./Banner";
import Bookcards from "./Bookcards";
import Sectionone from "./Sectionone";
import Sectiontwo from "./Sectiontwo";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Bookcards></Bookcards>
            </div>
            <div>
                <Sectionone></Sectionone>
            </div>
            <div>
                <Sectiontwo></Sectiontwo>
            </div>
        </div>
    );
};

export default Home;