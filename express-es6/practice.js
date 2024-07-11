const obj = {name: 'naman', age: 10}
function exec(data){
    //your task -> to do operation such that the output is equivalent to 


    /* 
        {name: 'naman', age: 10, address8: 'delhi'}
    */
   obj ={...obj, [data.key]: data.value}
}
// const data = {address8 :'delhi'}
const data = {key: 'address8', value: 'delhi'};
exec(data)

