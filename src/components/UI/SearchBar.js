import classes from './SearchBar.module.css';

import Button from './Button';
import { useGallery } from '../../config/GalleryContext';
import { useRef } from 'react';

export default function SearchBar() {

    const { getImages } = useGallery();
    const searchRef = useRef();

    function handleSearch() {
        searchRef.current.value.replace(" ", "+")
        getImages(searchRef.current.value);
        searchRef.current.value = '';
    }

    return (
        <div className={classes.bar}> 
            <input ref={searchRef} type="text" id="search" placeholder="Search over 4B+ photos..." />
            <Button onClick={handleSearch} className={classes['search-btn']}><i className="fas fa-search"></i></Button>
        </div>
    )
}
