var chart8;
nv.addGraph(function() {
     chart8 = nv.models.linePlusBarWithFocusChart()
        .margin({top: 30, right: 60, bottom: 50, left: 70})
        .x(function(d,i) { return i })
        .color(d3.scale.category10().range());

	chart8.xAxis.tickFormat(function(d) {

      var dx = Australia2[0].values[d] && Australia2[0].values[d].x || 0;
      if (dx > 0) {
			return dx
		  //return d3.time.format('%x')(new Date(dx))
      }
      return null;
    });
	
    chart8.x2Axis.tickFormat(function(d) {
      var dx = Australia2[0].values[d] && Australia2[0].values[d].x || 0;
	    if (dx > 0) {
	  return dx
      //return d3.time.format('%x')(new Date(dx))
	  }
    });
     
    chart8.y1Axis
        .tickFormat(d3.format(',f'));

    chart8.y3Axis
        .tickFormat(d3.format(',f'));
        
    chart8.y2Axis
        .tickFormat(function(d) { return d3.format(',.2f')(d) });

    chart8.y4Axis
        .tickFormat(function(d) { return d3.format(',.2f')(d) });
      
    chart8.bars.forceY([0]);
    chart8.bars2.forceY([0]);
    //chart.lines.forceY([0]);
    //nv.log(indonesia);
    d3.select('#chartExPerCapital svg')
        .datum(Australia2)
        .call(chart8);

//    nv.utils.windowResize(chart.update);

    return chart8;
});

$(".flag2").click(function(){
	//d3.select("#chartExPerCapital svg").remove();
	newMultiBar(window[this.id]);
});

function newMultiBar(country){
	nv.addGraph(function() {
     chart8 = nv.models.linePlusBarWithFocusChart()
        .margin({top: 30, right: 60, bottom: 50, left: 70})
        .x(function(d,i) { return i })
        .color(d3.scale.category10().range());

	chart8.xAxis.tickFormat(function(d) {

      var dx = country[0].values[d] && country[0].values[d].x || 0;
      if (dx > 0) {
			return dx
		  //return d3.time.format('%x')(new Date(dx))
      }
      return null;
    });
	
    chart8.x2Axis.tickFormat(function(d) {
      var dx = country[0].values[d] && country[0].values[d].x || 0;
	    if (dx > 0) {
	  return dx
      //return d3.time.format('%x')(new Date(dx))
	  }
    });
     
    chart8.y1Axis
        .tickFormat(d3.format(',f'));

    chart8.y3Axis
        .tickFormat(d3.format(',f'));
        
    chart8.y2Axis
        .tickFormat(function(d) { return d3.format(',.2f')(d) });

    chart8.y4Axis
        .tickFormat(function(d) { return d3.format(',.2f')(d) });
      
    chart8.bars.forceY([0]);
    chart8.bars2.forceY([0]);
    //chart.lines.forceY([0]);
    //nv.log(indonesia);
    d3.select('#chartExPerCapital svg')
        .datum(country)
        .call(chart8);

//    nv.utils.windowResize(chart.update);

    return chart8;
});
};