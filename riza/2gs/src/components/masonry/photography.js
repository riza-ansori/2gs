import React, { Component } from 'react';
//Import responsive gallery component 
import ResponseiveGallery from './ResponsiveGallery';

// Define array of images with thumbnails
const DEFAULT_IMAGES = [{
  src: '/assets/images/photography/evan16.jpg',
  thumbnail: '/assets/images/photography/evan16.jpg',
  title: 'Image 16',
  cat: 'Photography',
  width:'100%',
},
{
  src: 'https://unsplash.it/600?image=110',
  thumbnail: 'https://unsplash.it/600?image=110',
  title: 'Image 110',
  cat: 'Photography',
  width:'100%',
},
{
  src: 'https://unsplash.it/600?image=110',
  thumbnail: 'https://unsplash.it/600?random',
  title: 'Image 4',
  cat: 'Exterior',
  width:'100%',
},{
  src: '/assets/images/photography/evan17.jpg',
  thumbnail: '/assets/images/photography/evan17.jpg',
  title: 'Image 17',
  cat: 'Photography',
  width:'100%',
},];

export default class Photography extends Component {
  
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
