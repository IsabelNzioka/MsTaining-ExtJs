Ext.define("MsTraining.view.demo.CustomWindow", {
 
    extend: 'Ext.window.Window',
    xtype: 'customwindow',

    title: "My Custom Title",
    height: 200,
    width: 220,
    autoShow: true,
    closable: true,
    maximizable: true,
    // draggable: true,
    modal: true
}
// , function() {
    // Ext.create("MsTraining.view.demo.CustomWindow")
    // Ext.create({
    //     xtype: "customwindow",
    // })
//     var wd = Ext.create({
//         xtype: "customwindow",
//     });
//     wd.show();
// }
)
Ext.onReady(
    function() {
        var wd = Ext.create({
        xtype: "customwindow",
    });
    wd.show();

    }
)