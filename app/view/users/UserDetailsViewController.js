Ext.define("MsTraining.view.users.UserDetailsViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdetailsviewcontroller',


    onUserGridCellClick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let me = this,
            view = me.getView(), 
            vm = me.getViewModel(), 
            refs=me.getReferences();
        console.log('getView ---Meeeeeeeeeeeeee' + view);

        vm.set("record", record)
    },

    onShowDetails: function(btn, state) {
        let userGrid = this.getView();
        console.log('getView ---Meeeeeeeeeeeeee' + userGrid);

     let lowerPanel = Ext.ComponentQuery.query('userdetailstab')[0];
        if(userGrid.getHeight() === 600){
            userGrid.setHeight(300)
            lowerPanel.setHeight(400)
            btn.setText("Hide Details")
        }else{
            userGrid.setHeight(600)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },

    onSelectUser:  function (id) {
        let me = this,
            grid = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
            
        let record = grid.getStore().findRecord('_id', id)

        vm.set("record", record)
        grid.getSelectionModel().select(record)
    }
})
