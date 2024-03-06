Ext.define("MsTraining.store.Users", {


    extend: 'Ext.data.Store',
    alias: 'store.users',
    model:'MsTraining.model.User',
    requires: ['MsTraining.model.User'],
    autoLoad: true,
    pageSize: 25,

})