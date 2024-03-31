






const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

const connection_port = "mongodb://localhost:27017/";

const dbase = "database-project";

mongoclient.connect(connection_port , (error,response)=>{
    if (error) {
        console.log("error 404");
        return;
    }
    console.log("All perfect");
    /////////////////////////////////////////////////////////
    const db = response.db(dbase);
    
    // insertOne  2
    // db.collection('users').insertOne({
    //     name : "fouad" , 
    //     age : 19
    // } , (error , data)=>{
    //     if (error) {
    //         console.log("error in data");
    //         return;
    //     }
    //     console.log(data);
    // })

    //////////////////////////////////////////////////////////
    
    // insertMany 10   5 of them have the same age 27 y
    // db.collection('users').insertMany([
    //     {
    //         name : "ali" ,
    //         age : 27
    //     },
    //     {
    //         name : "ali" ,
    //         age : 27
    //     },
    //     {
    //         name : "ali" ,
    //         age : 27
    //     },
    //     {
    //         name : "ali" ,
    //         age : 27
    //     },
    //     {
    //         name : "ali" ,
    //         age : 27
    //     },
    //     {
    //         name : "ali" ,
    //         age : 21
    //     },
    //     {
    //         name : "ali" ,
    //         age : 22
    //     },
    //     {
    //         name : "ali" ,
    //         age : 28
    //     },
    //     {
    //         name : "ali" ,
    //         age : 24
    //     },
    //     {
    //         name : "ahmed" ,
    //         age : 23
    //     }
    // ] , (error , data)=>{
    //     if (error) {
    //         console.log("error in data");
    //         return;
    //     }
    //     console.log(data);
    // })

    //////////////////////////////////////////////////////

    //  find   match  27 y  
    //  limit first 3    27y
    // db.collection('users').find({age : 27}).limit(3).toArray((error , data)=>{
    //     if (error) {
    //         console.log("error can't connect");
    //         return;
    //     }
    //     console.log(data);
    // })

    ///////////////////////////////////////////////////////

    //  $set name for the first 4
    // db.collection('users').find({}).limit(4).toArray((error , data)=>{
    //     if (error) {
    //         console.log("error");
    //         return;
    //     }
    //     data.forEach((element)=>{
    //         db.collection('users').updateOne({_id : mongodb.ObjectId(element._id.toString())} , {
    //             $set : {name : "mohamed"}
    //         }).then((data)=>console.log(data)).catch((error)=>console.log("error in update"))
    //     })
    // })

    /////////////////////////////////////////////////////////
    
    //  $inc age for the first 4
    // db.collection('users').find({}).limit(4).toArray((error , data)=>{
    //     if (error) {
    //         console.log("error");
    //         return;
    //     }
    //     data.forEach((element)=>{
    //         db.collection('users').updateOne({_id : mongodb.ObjectId(element._id.toString())} , {
    //             $set : {age : 39}
    //         }).then((data)=>console.log(data.acknowledged)).catch((error)=>console.log("error in update"))
    //     })
    // })

    ////////////////////////////////////////////////////////////
 
    //  updateone for 1  inc age 5
    // db.collection('users').updateOne({ _id : mongodb.ObjectId("6609c47b700307b948519ba3")} , {
    //     $inc : { age : 5}
    // }).then((data)=>console.log(data.modifiedCount)).catch((error)=>console.log(error))

    ///////////////////////////////////////////////////////////

    //  updateMany  inc age 10
    // db.collection('users').updateMany({} , {
    //     $inc : {age : 10}
    // }).then((data)=>console.log(data.modifiedCount)).catch((error)=>console.log(error))

    ///////////////////////////////////////////////////////////

    //  deleteMany  age 41   ==>> deletedCount 
   // db.collection('users').deleteMany({age:41}).then((data)=>{console.log(data.deletedCount)}).catch((error)=> {console.log(error)})

})

