import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, CardMedia } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

const items = [
	{
		name: 'Random Name #1',
		description: 'Probably the most random thing you have ever seen!',
		image: 'https://via.placeholder.com/600x400',
	},
	{
		name: 'Random Name #2',
		description: 'Hello World!',
		image: 'https://via.placeholder.com/600x400',
	},
	{
		name: 'Random Name #3',
		description: 'Another random image!',
		image: 'https://via.placeholder.com/600x400',
	},
];

const ImageCarousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Box sx={{ width: '100%', maxHeight: 400, margin: 'auto' }}>
			<Slider {...settings}>
				{items.map((item, index) => (
					<Box sx={{ display: 'flex', justifyContent: 'center' }} key={index}>
						<CardMedia image={item.image} sx={{ maxWidth: '100%', width: 600, height: 400, maxHeight: '100%', margin: '0 auto' }} />
					</Box>
				))}
			</Slider>
		</Box>
	);
};

export default ImageCarousel;
