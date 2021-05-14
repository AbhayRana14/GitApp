import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {
    const [users,setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());
    }
    useEffect(()=>{
        getUsers();
    },[]);
    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {
                users.map((currElem)=>{
                    return(
                    <div key={currElem.id} className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                        <div className="d-flex align-items-center">
                            <div className="image"><img src={currElem.avatar_url} className="rounded" width="155"></img></div>
                            <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft">{currElem.login}</h4><span className="textLeft"></span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    <div className="d-flex flex-column"><span className="articles">Profile</span><span className="number1">{currElem.id}</span></div>
                                    <div className="d-flex flex-column"><span className="flowers">Serial</span><span className="number1">{currElem.node_id}</span></div>
                                    <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number1">8.9</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
        </>
    )
}

export default UseEffectAPI
