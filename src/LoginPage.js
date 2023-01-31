import { useState } from "react"
import { Register } from "./BikeServiceForm"

export const Login=()=>
{
    const[cview,setCview]=useState(false)
    const[user,setUser]=useState({
        "username":"",
        "password":""
    })
    const onPerform=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    return(
        <>
        {(cview)?
        <>
            {alert("new will call")}
            <Register/>
        </>
        :
        <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-10 col-sm-12 p-5 shadow-lg">
                    <div className="from group">
                        <label>UserName</label>
                        <input type="text" onChange={onPerform} value={user.username} name="username" placeholder="UserName please" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onPerform} value={user.password} name="password" placeholder="Password please" className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                        <button className="col-3 btn btn-outline-primary" onClick={async()=>{

                        }}>
                            Login
                        </button>
                        <button className="col-3 btn btn-outline-dark" type="reset">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
        }
        </>
    )
}