/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../authcontext/Authprovider";
import { useContext, useState } from "react"
import Swal from "sweetalert2";

const Borrowedbooks = () => {
    const loader = useLoaderData()
    const [users, setUsers] = useState(loader)
    const { user } = useContext(Authcontext)
    
    // console.log(loader)

    const handledelete = _id => {
        // console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to return this??",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addbooks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Returned!',
                                'This book has been returned.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== _id)
                            setUsers(remaining)
                        }
                    })

            }
        })
    }

    return (
        <div>
            <h1 className="text-center text-2xl text-black font-semibold">Your borrowed books</h1>
            <div className="flex justify-center py-5 px-5">
            <div className="grid grid-cols-1 gap-5">
                {
                    users.map(load => <div key={load._id}>
                        <div className="card flex-col md:flex-row md:card-side bg-base-100 shadow-xl  md:w-[800px]">
                            <figure><img className="h-96 w-[500px]" src={load.photo ? load.photo : ''} alt="Book" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{load.name}({load.category})</h2>
                                <p>{load.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handledelete(load._id)} className="btn btn-primary">Return</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Borrowedbooks;