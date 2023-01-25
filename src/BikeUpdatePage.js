import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { alert1 } from './BikeDetailsvalues'
export let Updating=(myvalue)=>
{
    const[pos,setPos]=useState(myvalue.who)
    const[process,setProcess]=useState({
        "cusId":myvalue.mention.cusId,
        "cusName":myvalue.mention.cusName,
        "cusContact":myvalue.mention.cusContact,
        "cusEmail":myvalue.mention.cusEmail,
        "cusDate":myvalue.mention.cusDate
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
    const register=()=>
    {
        alert1(process,pos)
        alert1("Your value is Updated successfully")
    }
    const reset=()=>
    {
        alert('Rejected...!')
    }
    return(
        <>
        <div className="container bg-secondary">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3" id="Center">
                    <h4 className="text-center mt-5 mb-5" id="Center2">Bike Details Form</h4>
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col">
                                <label className="form-label">RegisterNumber</label>
                                <input type="text"
                                name="cusId"
                                onChange={track}
                                value={process.cusId}
                                className="form-control" />
                            </div>
                            <div className="col">
                                <label className="form-label">CustomerName</label>
                                <input type="text"
                                name="cusName"
                                onChange={track}
                                value={process.cusName}
                                className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">CustomerContact</label>
                        <input type="tel"
                        name="cusContact"
                        onChange={track}
                        value={process.cusContact}
                        className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">CustomerEmail</label>
                        <input type="email"
                        name="cusEmail"
                        onChange={track}
                        value={process.cusEmail}
                        className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">DateofPurchase</label>
                        <input type="date"
                        name="cusDate"
                        onChange={track}
                        value={process.cusDate}
                        className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={register}>Update</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset">Reset</button>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}