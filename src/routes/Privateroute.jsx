/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../authcontext/Authprovider";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Privateroute = ({children}) => {

    const {user, loader} = useContext(Authcontext)
    const location = useLocation()

    if(loader){
        return <div className="">
            <div className="py-12">
                    <SkeletonTheme baseColor="#BBDEFB" highlightColor="#444">
                        <p className="mx-52">
                            <Skeleton highlightColor="gray" height={100} count={2} />
                        </p>
                    </SkeletonTheme>
                </div>
        </div>

    }
    
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;