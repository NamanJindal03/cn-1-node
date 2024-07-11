const data = {
    "1a1": {
        user_id: '1a1',
        name: 'naman',
        age: 10,
        gender: 'm'
    },
    "2ad": {
        user_id: '2ad',
        name: 'krishna',
        age: 20,
        gender: 'm'
    },
    "3fc": {
        user_id: '3fc',
        name: 'bhanvi',
        age: 30,
        gender: 'm'
    },
}

//case 1 allow
return {
    name: 'krisna',
    following: 100,
    followers: 100000,
    noOfPost: 100,
    post: [
        {}, {}, {}, {} //all of these are post
    ],
    profilePicture: '',
    status: 'visible'
    //some more info
}
//case 2 -> partial data -> not connectede or not public profiel
return {
    name: 'krishna',
    following: 100,
    followers: 100000,
    noOfPost: 100,
    profilePicture: '',
    status: 'not visible'
}


/*
    if(logged in user == mutual friend (profile requested) || requested profile == public)
        send the complete data

    else 
        send partial profile data 
*/

const data2 = [
    {
        user_id: '1a1',
        name: 'naman',
        age: 10,
        gender: 'm'
    },
    {
        user_id: '2ad',
        name: 'krishna',
        age: 20,
        gender: 'm'
    },
    {
        user_id: '3fc',
        name: 'bhanvi',
        age: 30,
        gender: 'm'
    },
]