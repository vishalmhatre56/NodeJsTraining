var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "vishal" 
    }
    callback(user); 
}

getUser(21,(userObj)=>{
    console.log(userObj);
})