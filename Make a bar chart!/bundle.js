(function (d3) {
  'use strict';

  const svg = d3.select('svg');
  const height = +svg.attr('height');
  const width = +svg.attr('width');

  const render = data => {
    const xValue = d => d.population;
    const yValue = d => d.country;
    const margin = {top:20, left:100, right: 40, bottom: 20};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
    	.domain([0, d3.max(data, xValue)])
    	.range([0, innerWidth]);
    const yScale = d3.scaleBand()
    	.domain(data.map(yValue))
    	.range([0, innerHeight])
    	.padding(0.1);

    
    const g = svg.append('g')
    	.attr('transform', `translate(${margin.left},${margin.top})`);
    
    g.append('g').call(d3.axisLeft(yScale));
    g.append('g').call(d3.axisBottom(xScale))
    	.attr('transform', `translate(0,${innerHeight})`);
    
    g.selectAll('rect').data(data)
    	.enter().append('rect')
    		.attr('y', d => yScale(yValue(d)))
    		.attr('width', d => xScale(xValue(d)))
    		.attr('height', yScale.bandwidth());
  };

  d3.csv('data.csv').then(data=>{
    data.forEach(d => {
      d.population = +d.population*1000;
    });
    render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwgXG4gICAgICAgIGNzdiwgXG4gICAgICAgIHNjYWxlTGluZWFyLCBcbiAgICAgICAgbWF4LCBcbiAgICAgICAgc2NhbGVCYW5kLFxuICAgICAgIFx0YXhpc0xlZnQsXG4gICAgICAgIGF4aXNCb3R0b21cbn0gZnJvbSAnZDMnO1xuXG5jb25zdCBzdmcgPSBzZWxlY3QoJ3N2ZycpO1xuY29uc3QgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbmNvbnN0IHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpO1xuXG5jb25zdCByZW5kZXIgPSBkYXRhID0+IHtcbiAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnBvcHVsYXRpb247XG4gIGNvbnN0IHlWYWx1ZSA9IGQgPT4gZC5jb3VudHJ5O1xuICBjb25zdCBtYXJnaW4gPSB7dG9wOjIwLCBsZWZ0OjEwMCwgcmlnaHQ6IDQwLCBib3R0b206IDIwfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIFxuICBjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gIFx0LmRvbWFpbihbMCwgbWF4KGRhdGEsIHhWYWx1ZSldKVxuICBcdC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pO1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUJhbmQoKVxuICBcdC5kb21haW4oZGF0YS5tYXAoeVZhbHVlKSlcbiAgXHQucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcbiAgXHQucGFkZGluZygwLjEpO1xuXG4gIFxuICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG4gIFx0LmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcbiAgXG4gIGcuYXBwZW5kKCdnJykuY2FsbChheGlzTGVmdCh5U2NhbGUpKTtcbiAgZy5hcHBlbmQoJ2cnKS5jYWxsKGF4aXNCb3R0b20oeFNjYWxlKSlcbiAgXHQuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aW5uZXJIZWlnaHR9KWApO1xuICBcbiAgZy5zZWxlY3RBbGwoJ3JlY3QnKS5kYXRhKGRhdGEpXG4gIFx0LmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgXHRcdC5hdHRyKCd5JywgZCA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgXHRcdC5hdHRyKCd3aWR0aCcsIGQgPT4geFNjYWxlKHhWYWx1ZShkKSkpXG4gIFx0XHQuYXR0cignaGVpZ2h0JywgeVNjYWxlLmJhbmR3aWR0aCgpKTtcbn07XG5cbmNzdignZGF0YS5jc3YnKS50aGVuKGRhdGE9PntcbiAgZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgIGQucG9wdWxhdGlvbiA9ICtkLnBvcHVsYXRpb24qMTAwMDtcbiAgfSlcbiAgcmVuZGVyKGRhdGEpO1xufSk7Il0sIm5hbWVzIjpbInNlbGVjdCIsInNjYWxlTGluZWFyIiwibWF4Iiwic2NhbGVCYW5kIiwiYXhpc0xlZnQiLCJheGlzQm90dG9tIiwiY3N2Il0sIm1hcHBpbmdzIjoiOzs7RUFTQSxNQUFNLEdBQUcsR0FBR0EsU0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakM7RUFDQSxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUk7RUFDdkIsRUFBRSxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQztFQUNuQyxFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0VB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