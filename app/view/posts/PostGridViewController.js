Ext.define("MsTraining.view.posts.PostGridViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',

    onAddPostClicked: function(btn, e, eOpts) {
        console.log(btn.getText() + " was clicked")
    }

})