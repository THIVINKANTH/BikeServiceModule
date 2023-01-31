import { useState } from "react"


export const Newservicedetails=()=>
{
    const[process,setProcess]=useState({
        "bikeJobcardno":0,
        "bikeIssues":new Array(),
        "bikeDateofservice":"",
        "bikeKilometer":0,
        "bikeStatus":"",
        "bikeTypeofsevice":"",
        "bikeEstimatecharge":0,
        "bikeNewproductcost":0,
        "bikeLabourcharge":0,
    })
    const regis=()=>
    {
        alert("Welcome to BikeServicedetails Process"+JSON.stringify(process));
    }
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
                            value={process.bikeIssues}
                            name="bikeIssues"
                            />
                        </div>
                        <div className="form-group">
                            <label>BikeDateofservice</label>
                            <input type="text"
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
                            value={process.bikeTypeofsevice}
                            name="BikeTypeofsevice"
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
                        <div className="mt-3 row justify-contant-around">
                            <button className="btn btn-outline-info col-2" onClick={regis}>
                                Add ServiceDetails
                            </button>
                            <button className="btn btn-outline-dark col-2" type="reset" value="Cancel">
                                Cancelled ServiceDetails
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}