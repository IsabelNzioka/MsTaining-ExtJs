Ext.define('MsTraining.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Security',
                iconCls:'fas fa-users-cog',
                children:[
                    {
                        text:'Users',
                        iconCls:'fa fa-users',
                        className:'parentpanel',
                        leaf:true
                    },
                    {
                        text:'UsersDetails',
                        iconCls:'fa fa-users',
                        className:'users',
                        leaf:true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fas fa-user-secret',
                        className: 'todogrid',
                        leaf: true
                    }
                ]
              
            },
            {
                text: 'Static Data',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Posts',
                        iconCls: 'fa fa-users',
                        className:'postgrid',
                        leaf: true
                    },
                    
                    {
                        text: 'Albums',
                        iconCls: 'fa fa-users',
                        className: 'albumgrid', //albumgrid
                        leaf: true
                    },
                    {
                        text: 'Posts',
                        iconCls: 'fa fa-users',
                        className:'postgrid',
                        leaf: true
                    },
                    {
                        text: 'UserTodos',
                        iconCls: 'fa fa-users',
                        className: 'usertodosgrid', //albumgrid, checkoutform
                        leaf: true
                    },
                    {
                        text: 'Permission',
                        iconCls: 'fa fa-users',
                        className: 'todogrid', //albumgrid,transactionsgrid  checkoutform
                        leaf: true
                    },

                ]

            },
            {
                text: 'Accounting',
                iconCls:'fas fa-users-cog',
                children:[
                    {
                        text:'Trial Balance',
                        iconCls:'fa fa-users',
                        className:'transactionsgrid',
                        leaf:true
                    },
                    
                ]
              
            },
        ]
    }
})