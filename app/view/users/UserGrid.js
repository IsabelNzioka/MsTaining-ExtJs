Ext.define('MsTraining.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    store: {
        type: 'users'
    },

    title: 'Users',
    columns: [
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'name', text: 'Name' , flex: 1 },
        {dataIndex: 'email', text: 'Email' , flex: 1},
        {dataIndex: 'street', text: 'Street' },
        {dataIndex: 'suite', text: 'Suite' },
        {dataIndex: 'city', text: 'City' },
        {dataIndex: 'zipcode', text: 'ZipCode' },
        {dataIndex: 'lat', text: 'Lat' },
        {dataIndex: 'lng', text: 'Lng' },
     
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    height: 800
})