Ext.define("MsTraining.store.Cities",
{
    extend: "Ext.data.Store",
    // 
    alias: 'store.cities',
    model: "MsTraining.model.City",
    data: [
        {id:1, name: "Nairobi", phone: "25462732819", age: 80},
        {id:2, name: "Nakuru", phone: "25462732820", age: 10},
        {id:3, name: "Machakos", phone: "25462732821", age: 50},
    ]
})