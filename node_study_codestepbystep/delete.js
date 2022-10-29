const dbConnect = require("./mongodb");

const deleteData = async() => {
    let db = await dbConnect();
    let result = await db.deleteMany({name:"note 6 abc"})
    console.log(result);
    if(result.acknowledged)
    {
        console.log("recorded delete successfully")
    }
}

deleteData()