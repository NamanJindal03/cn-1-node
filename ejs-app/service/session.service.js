const inMemorySessionUserMapping = new Map();

function setUser(id, user){
    inMemorySessionUserMapping.set(id, user);
    console.log(inMemorySessionUserMapping);
}

function getUser(id){
    return inMemorySessionUserMapping.get(id)
}

module.exports = {setUser, getUser}