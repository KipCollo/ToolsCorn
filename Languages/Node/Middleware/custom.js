function custom_middleware(req,res,next) {
    //body
    console.log("Authentication..");
    next();
}

module.exports=custom