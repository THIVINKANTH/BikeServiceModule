let Bikevalues=[
    {
        "cusId":"TN93A4287",
        "cusName":"Thivinkanth",
        "cusContact":"9514594679",
        "cusEmail":"thivinkanth@gmail.com",
        "cusDate":"06-06-2018"
    },
    {
        "cusId":"TN93A4287",
        "cusName":"Thivinkanth",
        "cusContact":"9514594679",
        "cusEmail":"thivinkanth@gmail.com",
        "cusDate":"06-06-2018"
    }
]

export const create=(data)=>
{
    Bikevalues.push(data)
}
export const list=()=>
{
    return Bikevalues;
}
export const read=(index)=>
{
    return Bikevalues[index];
}
export const FetchExact=(name)=>
{
    const temp=Bikevalues.filter((element)=>
    {
        return element.cusName===name;
    })
    return temp[0];
}
export const alert1=(data,pos)=>
{
    Bikevalues[pos]=data;
}
export const remove=(index)=>
{
    Bikevalues=Bikevalues.filter((data,ind)=>
    {
        return ind!==index;
    })
    return Bikevalues;
}