import axios from "axios";

const url="http://localhost:8080/mybikeproject"

export const Loginperformance=async(object)=>
{
    const credetails=object.username+":"+object.password
    const token=btoa(credetails);
    try
    {
        const t=await axios.get(`http://localhost:8080/mybikeproject/`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        if(t.data)
        {
            sessionStorage.setItem("auth",token)
            return;
        }
    }
    catch(err)
    {
        alert(err)
    }
}

export const CreatebikeDetails=async(object)=>
{
    const temp=await axios.post(`${url}/createbikedetails`,object);
    alert(JSON.stringify(temp.data)+"has been added in backend")
    return temp;
}

export const DisplayAllbikevalues=async()=>
{
    const t=await axios.get(`${url}/listbikedetails`)
    return t;
}
export const readonebikevalue=async(id)=>
{
    const t=await axios.get(`${url}/listonebikedetails/${id}`)
    return t;
}

export const updatebikevalue=async(object)=>
{
    const t=await axios.put(`${url}/updatebikedetails`,object)
    return t;
}

export const deletebybikedetails=async(key)=>
{
    const t=await axios.delete(`${url}/deletebybikedetails/${key}`)
    return t;
}

export const createservicedetails=async(object)=>
{
    const t=await axios.post(`${url}/createnewservice`,object);
    alert(JSON.stringify(t.data)+"has been service added backend");
    return t;
}

export const readbikenumber=async(number)=>
{
    const t=await axios.get(`${url}/findbikenumber/${number}`)
    return t;
}