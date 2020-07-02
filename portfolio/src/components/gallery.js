import React, { Component } from "react";

class PhotoGallery extends Component {
    render() {
        return (
            <Gallery photos = {images} onClick = {openLightbox}/>

        )
    }
}
export default PhotoGallery;

const images = [
    {
        src: './assets/images/Jenny1.JPG',
        width: 4,
        height: 3
    },

    {
        src: './assets/images/Jenny2.JPG',
        width: 4,
        height: 3
    },

    {
        src: './assets/images/Kevin2.jpg',
        width: 4,
        height: 3
    },

    
    {
        src: './assets/images/Nick1.JPG',
        width: 4,
        height: 3
    },
    
]


