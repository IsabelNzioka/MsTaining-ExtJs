Ext.define('MsTraining.view.employee.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employeegrid',

    // reference: 'employeegrid',
    // controller: "employeegridviewcontroller",
    title: 'Employee Grouping',
    store: {
        type: 'employees'
    },
    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Seniority', dataIndex: 'seniority', flex: 1 }
    ],
    features: [{ftype:'grouping'}],

})