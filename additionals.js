// console.log(__dirname);
// console.log(__filename);

/* 
    relative path(relative path) and absolute path -> 
*/

/* 
    node -> modules
    require -> 
    exports 


    app.js

    operations.js
    ((__dirname, __filename, modules, require, exports)=>{
        const abcd = 10;
    })()
    
    console.log(abcd);//output? 
    IIFE -. immediately invoked function expression
*/

// const path = require('path');
// /* 
//     path.join() -> fs module
// */
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// const os = require('os');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

//inbuilt modules -> 
//custom modules 
//external modules -> AXIOS -> package

/* 
    package?
    package.json 
    package.lock.json 

    opensource -> 
        1) Code is publically available ->
        2) Anyone can contribute to that code if their PR is accepted -> 
        3) Moderators each repository -> 
        4) why opensource?? -> development becomes faster -> 
            limited resources -> free -> the whole world -> (contributions, large comapnies)
        5) why you should be careful about using any opensource code -> 
            large companies -> 
                opensourcce code -> approval -> 
            stop maintaining that code -> 
                lodash -> node 10 -> node 20
        6) npmjs
    
    npm -> node package manager -> 

    Fetch and Axios -> API calls

    fetch ->

    the way status codes are treated ->
    axios is a more feature rich package ->
        Error handling -> 
    4xx 
    try -> 
        response.ok -> fetch?? 400
        throw error
    catch ->

    Axios -> 4xx errors

    const respone = fetch()
    
    response.json() -> stream to json -> 
    Axios handles it automatically -> 

    Axios more feature packaged -> a little bulky than fetch 
*/