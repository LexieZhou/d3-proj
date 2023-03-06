import { select, arc } from 'd3';

const svg = select('svg');
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
	.attr('d', arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3/2
  }));
