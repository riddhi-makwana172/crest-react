import React, { useEffect, useState } from 'react';
import "./image-gallery.css"
import { all, branding, design, development, gallery, photoGallery, staticText } from '../container/messages';
import Tag from './Tag';
import { imageApiCall } from '../container/constants';
import ImageGalleryComponent from './ImageGallery';

const ImageGalleryList = () => {
    const [selected, setSelected] = useState(1)
    const [images, setImages] = useState([])
    const [filteredImages, setFilteredImages] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [open, setOpen] = useState(false)

    const tagArr = [{ label: all, id: 1 },
    { label: branding, id: 2 },
    { label: design, id: 3 },
    { label: development, id: 4 }
    ]

    const getCategory = (id) => {
        if (id < 8)
            return branding;
        else if (id >= 8 && id < 12)
            return design;
        else if (id >= 12 && id <= 16)
            return development
    }

    const getImages = async () => {
        const anotherArr = []
        const result = await imageApiCall()
        const updatedArr = result.length > 0 && result.map((item) => {
            anotherArr.push({
                original: item.download_url,
                thumbnail: item.download_url
            })
            return {
                id: item.id,
                url: item.download_url,
                category: getCategory(item.id),
                original: item.download_url,
                thumbnail: item.download_url
            }
        })
        setImages(updatedArr)
        setFilteredImages(updatedArr)
    }

    useEffect(() => {
        getImages()
    }, [])

    const handleTagClick = (item) => {
        setSelected(item.id)
        const result = images.filter((image) => image.category === item.label)
        setFilteredImages(result.length > 0 ? result : images)
    }

    const handleImageClick = (index) => {
        setStartIndex(index); setOpen(true);
    }
    return (
        <div className='list-wrapper'>
            <h2>{gallery}</h2>
            <h1 className='text-center'>{photoGallery}</h1>
            <p className='text-center static-text'>{staticText}</p>
            <div className='tag-div'>
                {tagArr.map((item) => {
                    return <Tag text={item.label} key={item.id} selected={item.id === selected} handleTagClick={() => handleTagClick(item)} />
                })}
            </div>
            <div className='render-images'>
                <div className="image-list-gallery">
                    {filteredImages.length > 0 && filteredImages.map((image, index) => (
                        <img key={image.id} src={image.url} alt={`gallery ${image.id}`} onClick={() => handleImageClick(index)} />
                    ))}
                </div>
            </div>
            <ImageGalleryComponent imageArr={filteredImages} startIndex={startIndex} open={open} handleClose={() => setOpen(false)} />
        </div>
    );
};

export default ImageGalleryList;