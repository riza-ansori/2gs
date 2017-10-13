import React, { Component } from 'react';
//Import responsive gallery component 
import ResponseiveGallery from './ResponsiveGallery';

// Define array of images with thumbnails
const DEFAULT_IMAGES = [{
  src: '/assets/images/exterior/exterior1.jpg',
  thumbnail: '/assets/images/exterior/exterior1.jpg',
  title: 'Starbucks Amsterdam',
  cat: 'Exterior',
  width:'100%',
  link: '/details',
},{
  src: '/assets/images/exterior/FINAL-TABLE.jpg',
  thumbnail: '/assets/images/exterior/FINAL-TABLE.jpg',
  title: 'Image 2',
  cat: 'Exterior',
  width:'100%',
  link: '/works',
},{
  src: '/assets/images/interior/bathroom2.jpg',
  thumbnail: '/assets/images/interior/bathroom2.jpg',
  title: 'Image 3',
  cat: 'Interior',
  width:'100%',
  link: '/works',
},{
  src: 'https://unsplash.it/600?image=110',
  thumbnail: 'https://unsplash.it/600?image=110',
  title: 'Image 4',
  cat: 'Animation',
  width:'100%',
},{
  src: 'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-dof-6_1600px.jpg',
  thumbnail: 'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-dof-6_1600px.jpg',
  title: 'Image 5',
  cat: 'VR',
  width:'100%',
  link: '/works',
},{
  src: '/assets/images/interior/Bathroom1.jpg',
  thumbnail: '/assets/images/interior/Bathroom1.jpg',
  title: 'Image 6',
  cat: 'Interior',
  width:'100%',
  link: '/works',
},{
  src: '/assets/images/photography/evan16.jpg',
  thumbnail: '/assets/images/photography/evan16.jpg',
  title: 'Image 7',
  cat: 'Photography',
  width:'100%',
  link: '/works',
},{
  src: 'https://unsplash.it/600?random',
  thumbnail: 'https://unsplash.it/600?random',
  title: 'Image 8',
  cat: 'Animation',
  width:'100%',
},{
  src: 'http://2gs.co/wp-content/uploads/2013/01/extadv-final-cam-1c.jpg',
  thumbnail: 'http://2gs.co/wp-content/uploads/2013/01/extadv-final-cam-1c.jpg',
  title: 'Image 9',
  cat: 'Animation',
  width:'100%',
  link: '/works',
},{
  src: 'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-dof-1_1600px.jpg',
  thumbnail: 'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-dof-1_1600px.jpg',
  title: 'Image 10',
  cat: 'VR',
  width:'100%',
  link: '/works',
},{
  src: '/assets/images/photography/evan17.jpg',
  thumbnail: '/assets/images/photography/evan17.jpg',
  title: 'Image 11',
  cat: 'Photography',
  width:'100%',
  link: '/works',
},
];

export default class App extends Component {
  
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
