Ext.define('MsTraining.view.users.UserTodosGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'usergrid',
    referenceHolder: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    viewModel: 'userviewmodel',
    controller: 'userviewcontroller',

    items: [{
        title: 'Users',
        xtype: 'grid',
        bind: '{users}',
        reference: 'userGrid',
        flex: 1,

        columns: [
            { dataIndex: '_id', text: 'ID' },
            { dataIndex: 'name', text: 'Name', flex: 1 },
            { dataIndex: 'email', text: 'Email', flex: 1 },
            { dataIndex: 'street', text: 'Street', flex: 1 },
            { dataIndex: 'suite', text: 'Suite' },
            { dataIndex: 'city', text: 'City' , flex: 1},
            { dataIndex: 'zipcode', text: 'ZipCode' },
            {dataIndex: 'lat', text: 'Lat' },
            {dataIndex: 'lng', text: 'Lng', flex: 1 },
            {dataIndex: 'phone', text: 'Phone' },
            {dataIndex: 'website', text: 'Website' },
            {dataIndex: 'companyName', text: 'Company Name', flex: 1  },
            {dataIndex: 'companyCatchPhrase', text: 'CatchPhrase', flex: 1  },
            {dataIndex: 'companyBs', text: 'Bs', flex: 1  },
        ],

        selModel: {
            listeners: {
                select: 'onUserSelectionChange'
              }
        }
       

    },
    {
        title: 'Todos',
        xtype: 'grid',
        bind: '{userTodos}',
        margin: '0 0 0 10',
        flex: 1,
        columns: [
            { dataIndex: '_id', text: 'ID' },
            { dataIndex: 'title', text: 'TITLE', flex: 2 },
            { dataIndex: 'userId', text: 'User Id' },
            { dataIndex: 'completed', text: 'Completed' },
        ],

    },
    ],

    scrollable: true,
    height: 600,

})
