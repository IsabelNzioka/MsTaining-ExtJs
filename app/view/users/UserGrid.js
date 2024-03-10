Ext.define('MsTraining.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    reference: 'usergrid',
    controller: 'userviewcontroller',
    store: {
        type: 'users'
    },

    height: 900,
    title: 'Users',

    columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'name', text: 'Name' , flex: 2 },
        {dataIndex: 'email', text: 'Email' , flex: 2},
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
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    tbar: [
        {
            text: 'Add User'
        },
        {
            text: 'Model Binding',
            handler: 'onModelBinding',
        },
        '->', {
          text: 'Show Details',
          handler: 'onShowDetails' ,
          bind: {
            disabled: '{!usergrid.selection}'
          }
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners: {
        cellclick: 'onUserGridCellClick'
    },
    scrollable:true,
    // height: 600,
 
})