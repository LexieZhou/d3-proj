(function (d3) {
	'use strict';

	const svg = d3.select('svg');
	const height = +svg.attr('height');
	const width = +svg.attr('width');

	const g = svg.append('g')
		.attr('transform', `translate(${width/2},${height/2})`);

	const circle = g.append('circle')
		.attr('r', height / 2)
		.attr('fill', 'yellow')
		.attr('stroke', 'black');

	const eyeSpacing = 100;
	const eyeOffset = 100;
	const eyeRadius = 40;
	const eyeBrowWidth = 70;
	const eyeBrowHeight = 15;
	const eyeBrowOffset = 70;

	const eyeG = g.append('g')
		.attr('transform', `translate(0,-${eyeOffset})`);

	const lefteye = eyeG.append('circle')
		.attr('r', eyeRadius)
		.attr('cx', - eyeSpacing);

	const righteye = eyeG.append('circle')
		.attr('r', eyeRadius)
		.attr('cx', + eyeSpacing);

	const leftEyeBrow = eyeG.append('rect')
		.attr('x',- eyeSpacing - eyeBrowWidth/2)
		.attr('y',- eyeBrowOffset)
		.attr('width', eyeBrowWidth)
		.attr('height', eyeBrowHeight)
		.transition().duration(200)
			.attr('y', - eyeBrowOffset - 30);

	const rightEyeBrow = eyeG.append('rect')
		.attr('x', eyeSpacing - eyeBrowWidth/2)
		.attr('y', - eyeBrowOffset)
		.attr('width', eyeBrowWidth)
		.attr('height', eyeBrowHeight)
		.transition().duration(200)
			.attr('y', - eyeBrowOffset - 30);

	const mouth = g.append('path')
		.attr('d', d3.arc()({
	    innerRadius: 150,
	    outerRadius: 170,
	    startAngle: Math.PI / 2,
	    endAngle: Math.PI * 3/2
	  }));

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwgYXJjIH0gZnJvbSAnZDMnO1xuXG5jb25zdCBzdmcgPSBzZWxlY3QoJ3N2ZycpO1xuY29uc3QgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbmNvbnN0IHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpO1xuXG5jb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG5cdC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7d2lkdGgvMn0sJHtoZWlnaHQvMn0pYCk7XG5cbmNvbnN0IGNpcmNsZSA9IGcuYXBwZW5kKCdjaXJjbGUnKVxuXHQuYXR0cigncicsIGhlaWdodCAvIDIpXG5cdC5hdHRyKCdmaWxsJywgJ3llbGxvdycpXG5cdC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKTtcblxuY29uc3QgZXllU3BhY2luZyA9IDEwMDtcbmNvbnN0IGV5ZU9mZnNldCA9IDEwMDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDQwO1xuY29uc3QgZXllQnJvd1dpZHRoID0gNzA7XG5jb25zdCBleWVCcm93SGVpZ2h0ID0gMTU7XG5jb25zdCBleWVCcm93T2Zmc2V0ID0gNzA7XG5cbmNvbnN0IGV5ZUcgPSBnLmFwcGVuZCgnZycpXG5cdC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsLSR7ZXllT2Zmc2V0fSlgKTtcblxuY29uc3QgbGVmdGV5ZSA9IGV5ZUcuYXBwZW5kKCdjaXJjbGUnKVxuXHQuYXR0cigncicsIGV5ZVJhZGl1cylcblx0LmF0dHIoJ2N4JywgLSBleWVTcGFjaW5nKTtcblxuY29uc3QgcmlnaHRleWUgPSBleWVHLmFwcGVuZCgnY2lyY2xlJylcblx0LmF0dHIoJ3InLCBleWVSYWRpdXMpXG5cdC5hdHRyKCdjeCcsICsgZXllU3BhY2luZyk7XG5cbmNvbnN0IGxlZnRFeWVCcm93ID0gZXllRy5hcHBlbmQoJ3JlY3QnKVxuXHQuYXR0cigneCcsLSBleWVTcGFjaW5nIC0gZXllQnJvd1dpZHRoLzIpXG5cdC5hdHRyKCd5JywtIGV5ZUJyb3dPZmZzZXQpXG5cdC5hdHRyKCd3aWR0aCcsIGV5ZUJyb3dXaWR0aClcblx0LmF0dHIoJ2hlaWdodCcsIGV5ZUJyb3dIZWlnaHQpXG5cdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjAwKVxuXHRcdC5hdHRyKCd5JywgLSBleWVCcm93T2Zmc2V0IC0gMzApO1xuXG5jb25zdCByaWdodEV5ZUJyb3cgPSBleWVHLmFwcGVuZCgncmVjdCcpXG5cdC5hdHRyKCd4JywgZXllU3BhY2luZyAtIGV5ZUJyb3dXaWR0aC8yKVxuXHQuYXR0cigneScsIC0gZXllQnJvd09mZnNldClcblx0LmF0dHIoJ3dpZHRoJywgZXllQnJvd1dpZHRoKVxuXHQuYXR0cignaGVpZ2h0JywgZXllQnJvd0hlaWdodClcblx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbigyMDApXG5cdFx0LmF0dHIoJ3knLCAtIGV5ZUJyb3dPZmZzZXQgLSAzMCk7XG5cbmNvbnN0IG1vdXRoID0gZy5hcHBlbmQoJ3BhdGgnKVxuXHQuYXR0cignZCcsIGFyYygpKHtcbiAgICBpbm5lclJhZGl1czogMTUwLFxuICAgIG91dGVyUmFkaXVzOiAxNzAsXG4gICAgc3RhcnRBbmdsZTogTWF0aC5QSSAvIDIsXG4gICAgZW5kQW5nbGU6IE1hdGguUEkgKiAzLzJcbiAgfSkpO1xuIl0sIm5hbWVzIjpbInNlbGVjdCIsImFyYyJdLCJtYXBwaW5ncyI6Ijs7O0NBRUEsTUFBTSxHQUFHLEdBQUdBLFNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUMxQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDbkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDO0NBQ0EsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDekIsRUFB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