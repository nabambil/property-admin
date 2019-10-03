// Morris bar chart
Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
        y: '2006',
        Sale: 100,
        Rent: 90,
        c: 60
    }, {
        y: '2007',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2008',
        Sale: 50,
        Rent: 40,
        c: 30
    }, {
        y: '2009',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2010',
        Sale: 50,
        Rent: 40,
        c: 30
    }, {
        y: '2011',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2012',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2013',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2014',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2015',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2016',
        Sale: 100,
        Rent: 90,
        c: 40
    }],
    xkey: 'y',
    ykeys: ['Sale', 'Rent', 'c'],
    labels: ['Arts', 'Commerce', 'Science'],
    barColors: ['#012241', '#00a5e5', '#00c292'],
    hideHover: 'auto',
    barSizeRatio: 0.45,
    gridLineColor: '#eef0f2',
    resize: true
});

// This is for the sparkline chart

var sparklineLogin = function() {

    $('#sparkline2dash').sparkline([6, 10, 9, 11, 9, 10, 12], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#25a6f7'
    });
    $('#sales1').sparkline([6, 10, 9, 11, 9, 10, 12], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#fff'
    });

}
var sparkResize;

$(window).resize(function(e) {
    clearTimeout(sparkResize);
    sparkResize = setTimeout(sparklineLogin, 500);
});
sparklineLogin();