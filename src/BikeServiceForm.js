import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreatebikeDetails } from './Connect'
import './Image.css'

export let Register=()=>
{
    const navi=useNavigate();
    const[process,setProcess]=useState({
        "cusId":0,
        "cusBikeno":"",
        "cusName":"",
        "cusContactno":"",
        "cusEmail":"",
        "cusDateofpurchase":""
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const register=async()=>
    {
        // alert('Welcome to Zealous Service Center'+JSON.stringify(process))
        // create(process);
        const temp=await CreatebikeDetails(process);
        alert(temp.data);
        navi("/listallbikedetails")
    }
    const reset=()=>
    {
        alert('Rejected.....!')
    }
    return(
        <>
        <div className="container bg-info">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3" id="Center">
                <h3 className="text-center mt-5 mb-5"id="Center2">Bike Details Form</h3>
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col">
                            <label className="form-label">RegisterNumber</label>
                            <input type="text"
                            name="cusId"
                            onChange={track}
                            value={process.cusId}
                            className="form-control"/>
                        </div>
                        <div className="col">
                            <label className="form-label">CustomerBikeNo</label>
                            <input type="text"
                            name="cusBikeno"
                            onChange={track}
                            value={process.cusBikeno}
                            className="form-control"/>

                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="form-label">CustomerName</label>
                    <input type="text"
                    name="cusName"
                    onChange={track}
                    value={process.cusName}
                    className="form-control"/>
                </div>
                <div className="mt-3">
                    <label className="form-label">CustomerContactNo</label>
                    <input type="tel"
                    name="cusContactno"
                    value={process.cusContactno}
                    onChange={track}
                    className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">CustomerEmail</label>
                    <input type="email"
                    name="cusEmail"
                    value={process.cusEmail}
                    onChange={track}
                    className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">DateofPurchase</label>
                    <input type="date"
                    name="cusDateofpurchase"
                    value={process.cusDate}
                    onChange={track}
                    className="form-control" />
                </div>
                <div className="row justify-content-around mt-4">
                    <button className="btn btn-outline-success col-3 ms-3" onClick={register} type="submit" value="Register">Register</button>
                    <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset">Reset</button>
                </div>
                </div>

            </div>

        </div>
        </>
    )
}