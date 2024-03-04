Ext.define('MsTraining.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid1',
    store: {
        type: 'users'
    },

    title: 'Users',
    columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'name', text: 'Name' , flex: 1 },
        {dataIndex: 'email', text: 'Email' , flex: 1},
        {dataIndex: 'street', text: 'Street', flex: 1 },
        {dataIndex: 'suite', text: 'Suite' },
        {dataIndex: 'city', text: 'City' },
        {dataIndex: 'zipcode', text: 'ZipCode', flex: 2 },
        {dataIndex: 'lat', text: 'Lat' },
        {dataIndex: 'lng', text: 'Lng', flex: 1 },
        {dataIndex: 'phone', text: 'Phone' },
        {dataIndex: 'website', text: 'Website' },
        {dataIndex: 'name', text: 'Company Name', flex: 1  },
        {dataIndex: 'catchPhrase', text: 'CatchPhrase', flex: 1  },
        {dataIndex: 'bs', text: 'Bs', flex: 1  },
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        // pageSize: 10
       
    },
    scrollable:true,
    height: 600,
 
})