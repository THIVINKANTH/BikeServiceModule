import { useState } from "react"
import { createservicedetails, readbikenumber } from "./Connect"


export const Newservicedetails=()=>
{

    const[process,setProcess]=useState({
        "bikeJobcardno":0,
        "bikeIssuse":[],
        "bikeDateofservice":"",
        "bikeKilometer":0,
        "bikeStatus":"",
        "bikeTypeofservice":"",
        "bikeEstimatecharge":0,
        "bikeNewproductcost":0,
        "bikeLabourcharge":0,
        "bikeFinalamount":0,
        "bikeDetails1":""
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

    const[issues,setIssues]=useState("");
   
    const tracking=(myvalues)=>
    {
        setIssues(myvalues.target.value)
    }
    const regis=async()=>
    {
        // alert("Welcome to BikeServicedetails Process"+JSON.stringify(process));
        const bikenumber=await readbikenumber(process.bikeDetails1);
        process.bikeDetails1=bikenumber.data;
        process.bikeIssues=issues.split(",");
        const t=await createservicedetails(process);

        alert(t.data);
        // navi("/")
    }
    const reset=()=>
    {
        alert('Rejected.....!')
    }
    
    return(
        <>
        <div id="servicebg">
            <span id="service"></span>
            <div className="container">
                <h1 className="text-center fs-5 mt-5" id="textting">New Service Details Generated</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9 col-sm-12 p-4 shadow-lg rounded-5">
                        <div className="form-group">
                            <label>BikeJobcardNumber</label>
                            <input type="text"
                            className="form-control"
                            placeholder="Automatic"
                            onChange={track}
                            value={process.bikeJobcardno}
                            name="bikeJobcardno"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeIssues</label>
                            <input type="text"
                            className="form-control"
                            placeholder="problems"
                            onChange={track}
                            value={process.bikeIssuse}
                            name="bikeIssuse"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeDateofservice</label>
                            <input type="date"
                            className="form-control"
                            placeholder="yyyy-mm-dd"
                            onChange={track}
                            value={process.bikeDateofservice}
                            name="bikeDateofservice"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeKilometer</label>
                            <input type="number"
                            className="form-control"
                            placeholder="23345"
                            onChange={track}
                            value={process.bikeKilometer}
                            name="bikeKilometer"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeStatus</label>
                            <input type="text"
                            className="form-control"
                            placeholder="approved/Success/Process"
                            onChange={track}
                            value={process.bikeStatus}
                            name="bikeStatus"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeTypeofsevice</label>
                            <input type="text"
                            className="form-control"
                            placeholder="Paid/Free"
                            onChange={track}
                            value={issues.bikeTypeofservice}
                            name="bikeTypeofservice"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeEstimatecharge</label>
                            <input type="number"
                            className="form-control"
                            placeholder="Payment"
                            onChange={track}
                            value={process.bikeEstimatecharge}
                            name="bikeEstimatecharge"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeNewproductcost</label>
                            <input type="number"
                            className="form-control"
                            placeholder="payment"
                            onChange={track}
                            value={process.bikeNewproductcost}
                            name="bikeNewproductcost"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeLabourcharge</label>
                            <input type="number"
                            className="form-control"
                            placeholder="Salary for employe"
                            onChange={track}
                            value={process.bikeLabourcharge}
                            name="bikeLabourcharge"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeFinalAmount</label>
                            <input type="number"
                            className="form-control"
                            placeholder="Salary for employe"
                            onChange={track}
                            value={process.bikeFinalamount}
                            name="bikeFinalamount"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeDetails</label>
                            <input type="text"
                            className="form-control"
                            placeholder="Enter bike number"
                            onChange={track}
                            value={process.bikeDetails1}
                            name="bikeDetails1"
                            />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="btn btn-outline-info col-4" onClick={regis} type="submit" value="Register">
                                Add ServiceDetails
                                <i className="bi bi-database-add"></i>
                            </button>
                            <button className=" btn btn-outline-dark col-4" onClick={reset} type="reset" value="Cancel">
                                Cancelled ServiceDetails <i className="bi bi-x-octagon-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}