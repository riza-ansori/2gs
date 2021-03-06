import React, { Component } from 'react';
//Import responsive gallery component 
import ResponseiveGallery from './ResponsiveGallery';

// Define array of images with thumbnails
const DEFAULT_IMAGES = [{
  src: '/assets/images/exterior/exterior1.jpg',
  thumbnail: '/assets/images/exterior/exterior1.jpg',
  title: 'Image 1',
  cat: 'VR',
  width:'100%',
},{
  src: '/assets/images/exterior/FINAL-TABLE.jpg',
  thumbnail: '/assets/images/exterior/FINAL-TABLE.jpg',
  title: 'Image 2',
  cat: 'VR',
  width:'100%',
},{
  src: 'https://unsplash.it/600?image=916',
  thumbnail: 'https://unsplash.it/600?image=916',
  title: 'Image 3',
  cat: 'VR',
  width:'100%',
},{
  src: 'https://unsplash.it/600?image=110',
  thumbnail: 'https://unsplash.it/600?image=110',
  title: 'Image 4',
  cat: 'VR',
  width:'100%',
},{
  src: 'https://unsplash.it/600?random',
  thumbnail: 'https://unsplash.it/600?random',
  title: 'Image 5',
  cat: 'VR',
  width:'100%',
},
];

export default class Virtual extends Component {
  
  constructor (props) {
		super(props);
  }  
  
  render () {
		return (
			<ResponseiveGallery images={DEFAULT_IMAGES.map(({ src, thumbnail, title, cat }) => ({
        src,
        thumbnail,
        title,
        cat,
      }))} />
    )
  }  
}
