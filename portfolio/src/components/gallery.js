import React, {  useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
function PhotoGallery() {
        
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }
    return (
        <div className = "container">
            <Gallery photos = {photos} onClick ={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen? (
                    <Modal onClose = {closeLightbox}>
                        <Carousel currentIndex = {currentImage}
                            views = {photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null }
            </ModalGateway>
        </div>
    );
      
}
export default PhotoGallery

const photos = [
    {
        src: require('../assets/images/Jenny1.jpg'),
        height: 4,
        width: 6,
    },

    {
        src: require('../assets/images/Jenny2.jpg'),
        height: 4,
        width: 6,
    },

    {
        src: require('../assets/images/Nick1.jpg'),
        height: 3,
        width: 4,
    },

    {
        src: require('../assets/images/Kevin1.jpg'),
        height: 5,
        width: 7,
    },


    {
        src: require('../assets/images/Kevin3.jpg'),
        height: 5,
        width: 8,
    },

    {
        src: require('../assets/images/Kevin4.jpg'),
        height: 5,
        width: 7,
    },

    {
        src: require('../assets/images/CPPSquad1.jpg'),
        height: 4,
        width: 6,
    },

    {
        src: require('../assets/images/CPPSquad2.jpg'),
        height: 6,
        width: 8,
    },

    {
        src: require('../assets/images/Nick2.jpg'),
        height: 6,
        width: 9,
    },

    {
        src: require('../assets/images/Nick3.jpg'),
        height: 6,
        width: 9,
    },

    {
        src: require('../assets/images/Jenn1.jpg'),
        height: 3,
        width: 5,
    },

    {
        src: require('../assets/images/Kevin5.jpg'),
        height: 3,
        width: 6,
    },





    
];


