const dbConnect = require("./mongodb");

const updateData = async() => {
    let db = await dbConnect();
    let result = await db.update(
        {brand: 'vivo'}, {
            $set: {name: 'note 6', branch: 'hbmm'}}
    )
    console.log(result);
}

updateData()