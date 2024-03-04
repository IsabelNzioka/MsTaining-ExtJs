Ext.define("MsTraining.model.User", {


    extend: 'Ext.data.Model',
    fields: [
        '_id','name', 'username', 'email', 
        {name: 'street', type: 'string', mapping: 'address.street'},
        {name: 'suite', type: 'string', mapping: 'address.suite'},
        {name: 'city', type: 'string', mapping: 'address.city'},
        {name: 'zipcode', type: 'string', mapping: 'address.zipcode'},
        {name: 'lat', type: 'string', mapping: 'address.geo.lat'},
        {name: 'lng', type: 'string', mapping: 'address.geo.lng'},
       'hone', 'website',
        {name: 'name', type: 'string', mapping: 'company.name'},
        {name: 'catchPhrase', type: 'string', mapping: 'company.catchPhrase'},
        {name: 'bs', type: 'string', mapping: 'company.bs'},
    ],

    proxy: {
      
        type: 'rest',
        url: 'http://localhost:3000/users',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            countProperty: 'totalCount'
        }
    }

})