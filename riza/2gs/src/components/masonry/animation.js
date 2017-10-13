import React, { Component } from 'react';
//Import responsive gallery component 
import ResponseiveGallery from './ResponsiveGallery';

// Define array of images with thumbnails

const DEFAULT_IMAGES = [{
  src: '/assets/images/exterior/exterior1.jpg',
  thumbnail: '/assets/images/exterior/exterior1.jpg',
  title: 'Image 1',
  cat: 'Animation',
  width:'100%',
},{
  src: '/assets/images/exterior/FINAL-TABLE.jpg',
  thumbnail: '/assets/images/exterior/FINAL-TABLE.jpg',
  title: 'Image 2',
  cat: 'Animation',
  width:'100%',
},
,{
  src: '/assets/images/photography/evan17.jpg',
  thumbnail: '/assets/images/photography/evan17.jpg',
  title: 'Image 7',
  cat: 'Animation',
  width:'100%',
},{
  src: 'https://unsplash.it/600?image=110',
  thumbnail: 'https://unsplash.it/600?image=110',
  title: 'Image 4',
  cat: 'Animation',
  width:'100%',
},{
  src: '/assets/images/interior/Bathroom1.jpg',
  thumbnail: '/assets/images/interior/Bathroom1.jpg',
  title: 'Image 4',
  cat: 'Animation',
  width:'100%',
},{
src: '/assets/images/exterior/exterior1.jpg',
thumbnail: '/assets/images/exterior/exterior1.jpg',
title: 'Starbucks Amsterdam',
cat: 'Exterior',
width:'100%',
link: '/details',
},
];

export default class Animation extends Component {
  
  constructor (props) {
		super(props);
  }  
  
  render () {
		return (
			<ResponseiveGallery images={DEFAULT_IMAGES.map(({ src, thumbnail, title, cat, link }) => ({
        src,
        thumbnail,
        title,
        cat,
        link,
      }))} />
    )
  }  
}
