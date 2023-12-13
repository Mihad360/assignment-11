import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-blue-600 font-bold pt-3 pb-3">Oppss..</h1>
            <img className="mx-auto" src="https://i.ibb.co/f244gxX/undraw-Page-not-found-re-e9o6.png" alt="" />
            <h1 className="text-xl text-center text-black font-medium">Page not Found!!</h1>
            <div className="text-center pt-4">
            <Link to='/'><button className="btn btn-primary text-center">Go home</button></Link>
            </div>
        </div>
    );
};

export default Error;