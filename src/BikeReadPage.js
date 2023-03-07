import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readonebikevalue } from './Connect'
export const Reading=()=>
{
    // const[bikevalue,setBikevalue]=useState({
    //     "cusId":"",
    //     "cusName":"",
    //     "cusContact":"",
    //     "cusEmail":"",
    //     "cusDate":""
    // })
    const {myid}=useParams();
    const[bikevalue,setBikevalue]=useState({})
    useEffect(()=>
    {
        callreading()
    })
    const callreading=async()=>
    {
        // setBikevalue(read(myvalue.who))
        const t=await readonebikevalue(myid);
        setBikevalue(t.data);
    }
    return(
        <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="card bg-info col-lg-5 col-md-8 col-sm-12">
                    <div className="card-tittle">
                        {bikevalue.cusName}
                    </div>
                    <div className="card-body">
                        <p>{bikevalue.cusId}</p>
                        <p>{bikevalue.cusContactno}</p>
                        <p>{bikevalue.cusEmail}</p>
                        <p>{bikevalue.cusDateofpurchase}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}