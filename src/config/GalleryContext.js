import React, { useContext, useState } from 'react';

const GalleryContext = React.createContext();
const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

export function useGallery() {
    return useContext(GalleryContext);
}

export function GalleryProvider(props) {

    const [hits, setHits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const value = {
        hits,
        isLoading,
        getImages
    }

    async function getImages(search) {   
        try {
            console.log(search);
            setIsLoading(true)
            const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${search}&image_type=photo&pretty=true`);
            const resData= await response.json();
            setHits(resData.hits);
            console.log(hits);
            setIsLoading(false);
        } catch {
            setHits([]);
        }
    }

    return (
        <GalleryContext.Provider value={value}>
            {props.children}
        </GalleryContext.Provider>
    )

}