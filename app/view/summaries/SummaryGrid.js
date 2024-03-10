Ext.define('MsTraining.view.summaries.SummaryGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'summarygrid',
    with: 700,

    title: 'Summary Test',
    store: {
        type: 'summaries'
    },
    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Seniority', dataIndex: 'seniority', flex: 2}
    ],

    style: 'border: 2px solid #A76F6F',
    features: [{
        ftype: 'summary'
    }],

    columns: [{
        dataIndex: 'student',
        text: 'Name',
        summaryType: 'count',
        summaryRenderer: function(value, summaryData, dataIndex) {
            return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
        }
    }, {
        dataIndex: 'mark',
        text: 'Mark',
        summaryType: 'average'
    }]

})