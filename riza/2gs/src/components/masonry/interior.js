import React, { Component } from 'react';
//Import responsive gallery component 
import ResponseiveGallery from './ResponsiveGallery';

// Define array of images with thumbnails
const DEFAULT_IMAGES = [{
  src: '/assets/images/interior/bathroom2.jpg',
  thumbnail: '/assets/images/interior/bathroom2.jpg',
  title: 'Image 3',
  cat: 'Interior',
  width:'100%',
},{
  src: 'https://unsplash.it/600?image=110',
  thumbnail: 'https://unsplash.it/600?random',
  title: 'Image 4',
  cat: 'Exterior',
  width:'100%',
},{
  src: '/assets/images/interior/Bathroom1.jpg',
  thumbnail: '/assets/images/interior/Bathroom1.jpg',
  title: 'Image 4',
  cat: 'Interior',
  width:'100%',
},];

export default class Interior extends Component {
  
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
