Ext.define("MsTraining.model.User", {


    extend: 'Ext.data.Model',
    fields: [
        'id','name', 'username', 'email', 
        {name: 'street', type: 'string', mapping: 'address.street'},
        {name: 'suite', type: 'string', mapping: 'address.suite'},
        {name: 'city', type: 'string', mapping: 'address.city'},
        {name: 'zipcode', type: 'string', mapping: 'address.zipcode'},
        {name: 'lat', type: 'string', mapping: 'address.geo.lat'},
        {name: 'lng', type: 'string', mapping: 'address.geo.lng'}
    ],

    proxy: {
      
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/users',
        reader: {
            type: 'json',
        }
    }

})