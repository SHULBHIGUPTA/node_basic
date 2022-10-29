const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [{
            name: 'note 5',
            brand: 'vivo',
            price: 320,
            category: 'mobile'
        }, 
        {
            name: 'note 6',
            brand: 'vivo',
            price: 320,
            category: 'mobile'
        },
        {
            name: 'note 7',
            brand: 'vivo',
            price: 320,
            category: 'mobile'
        },
    ]
    )
    if(result.acknowledged) {
        console.log("data inserted")
    }
}
insert()