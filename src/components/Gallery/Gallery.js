import React from 'react';
import { useGallery } from '../../config/GalleryContext';

import classes from './Gallery.module.css';

export default function Gallery() {

    const { hits, isLoading } = useGallery()

    const images = hits.map(hit => hit.largeImageURL);

    return (
        <section>
            <div className={classes.gallery}>
                {(!isLoading && hits.length > 0) &&
                    images.map((imageURL, index) =>
                        <img
                            key={index}
                            src={imageURL}
                            alt={imageURL}
                        />)
                }
            </div>
            {(!isLoading && hits.length === 0) &&
                    <div className={classes.error}>
                        <h1>No results Found</h1>
                    </div>
                }
        </section>
    )
}
