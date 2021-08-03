import React from 'react';
import { GalleryProvider } from '../../config/GalleryContext';
import Gallery from '../Gallery/Gallery';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../UI/SearchBar';
import classes from './Hero.module.css';

export default function Hero() {

    return (
        <section>
            <Navbar />
            <div className={classes.container}>
                <GalleryProvider>
                    <SearchBar />
                    <Gallery />
                </GalleryProvider>
            </div>
        </section>
    )
}
