Ext.define("MsTraining.view.users.UserViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',

    init: function() {
        let grid = this.getView(),
        store = grid.getStore();
        store.load();
        // load data at demand instead of using autoLoad
    },


    onUserGridCellClick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        console.log(record.get('_id'));

        let postsStore = Ext.ComponentQuery.query('postgrid')[0].getStore();
        let todosStore = Ext.ComponentQuery.query('todosgrid')[0].getStore();
        

        postsStore.reload({
            params:{
                userId: record.get('_id')
            }
        })
        todosStore.reload({
            params:{
                userId: record.get('_id')
            }
        })

    },

    onShowDetails: function(btn, state) {
        let userGrid = this.getView();
        let lowerPanel = Ext.ComponentQuery.query('staticdatamanagementtabpanel')[0];
        if(userGrid.getHeight() === 900){
            userGrid.setHeight(400)
            lowerPanel.setHeight(600)
            btn.setText("Hide Details")
        }else{
            userGrid.setHeight(900)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },

    onModelBinding: function(btn, e, eOpts) {

        Ext.create({
            xtype: 'modelbindingform'
        })
    }
 
})