
Ext.define(
    'MsTraining.model.City', // className => 
    {
        extend: 'Ext.data.Model',
        fields: [
           "id", "name",
           {name: "phone", type: "string"} ,
           {name: "age", type: "int"} ,
        //    {name: "phone"} -- type is optional
        ]

    }, // Object - the configuration/ Properties
    function(){
        var city = Ext.create('MsTraining.model.City')
        console.log(city)
    }  //callback function
) 