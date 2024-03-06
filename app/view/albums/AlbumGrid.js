Ext.define('MsTraining.view.albums.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    store: {
        type: 'albums'
    },
    columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    height: 600
})