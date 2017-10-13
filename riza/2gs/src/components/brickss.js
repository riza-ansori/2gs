import Bricks from 'bricks.js'
import React, { Component } from 'react';

class Brickss extends React.Component{
    constructor() {
    super();
    this.state = {
        galleryItems: []
    };
    this.instance = {}
    }
    getItems(limit){
    fetch('http://localhost:3000/api/posts/next/' + limit)
        .then((response) => {
        return response.json()
        }).then((data) => {
        this.setState({galleryItems: data});
        })
    }
    componentDidMount(){
    this.getItems(5)
    //sizes for Brick.js
    const sizes = [
        { columns: 5, gutter: 3 },
        { mq: '768px', columns: 2, gutter: 3 },
        { mq: '1024px', columns: 3, gutter: 3 }
    ]
    //init instance
    this.instance = Bricks({
        container: '.gallery',
        packed: 'packed',
        sizes: sizes
    })
    this.instance.resize(true);  //<-adds a resize event listener
    if (this.state.galleryItems.length > 0) {
        this.instance.pack() //<- This should create the masonry layout
    }
    }
    componentDidUpdate(){
    if (this.state.galleryItems.length > 0) {
        return this.instance.pack()
    }
    else{
        return this.instance.update() //<- updates the layout
    }
    }
    render() {
    const items = this.state.galleryItems.map((item, _id) => {
        return <Item key={_id} url={this.state.url + item.url}></Item>
    })
    return (
        <div>
        Home Component
        <div className="gallery">
            {items}
        </div>
        </div>
    );
    }
}
export default Brickss