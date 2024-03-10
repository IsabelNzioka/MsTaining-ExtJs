Ext.define('MsTraining.view.albums.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    store: {
        type: 'albums'
    },
    columns: [
        {xtype: 'rownumberer'},
        {dataIndex: '_id', text: 'ID' },
        {
            dataIndex: 'title',
            text: 'TITLE' ,
            flex: 2 ,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {dataIndex: 'userId', text: 'User Id', editor: 'textfield' },
    ],

    // selModel: {
    //     mode: 'SINGLE'
    // },
    selModel: 'cellmodel',
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    height: 600
})