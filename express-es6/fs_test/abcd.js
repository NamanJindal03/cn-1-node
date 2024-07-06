function higher(param1, param2, cb){
    const complexCalculation = param1 + param2;
    setTimeout(()=>{
        console.log('complex calcution is done');
        cb(complexCalculation)
    },1000)
}
higher(10, 20, (result)=> {
    console.log('execute');
    toBeExecutedAfterCalc();
});

function toBeExecutedAfterCalc(){
    console.log('random');
}
