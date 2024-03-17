Ext.define('MsTraining.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    reference: 'usergrid',

    controller: 'userviewcontroller',
    store: {
        type: 'users'
    },
 

    height: 600,
    title: 'Users',
    style: 'margin-top: 5px;',
  

    columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'name', text: 'Name' , flex: 2, editor: 'textfield' },
        {
            dataIndex: 'email', 
            text: 'Email' ,
            flex: 2,
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
            },
        {dataIndex: 'street', text: 'Street', flex: 1 ,  editor: 'textfield'},
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

    selModel: 'rowmodel',
    // selModel: {
    //     selType: 'checkboxmodel',
    //     mode: 'SINGLE'
    // },
    plugins: {
        rowediting: {
            clicksToEdit: 1
        }
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
        cellclick: 'onUserGridCellClick',
        celldblclick: 'onUserGridCellDblClick',
        cellcontextmenu: 'onUserGridCellContextMenu'
    },
    scrollable:true,
    // height: 600,
 
})