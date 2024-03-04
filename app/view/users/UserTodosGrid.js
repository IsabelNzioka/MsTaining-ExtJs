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
            { dataIndex: 'city', text: 'City' },
            { dataIndex: 'zipcode', text: 'ZipCode' },
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
