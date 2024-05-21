
import Image from 'next/image';
import React from 'react'

const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
  ];

export default function GalleryPage() {
    return (
        <div className="container mx-auto py-12 px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full h-64">
                        <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                        <h1>Image</h1>
                    </div>
                ))}
            </div>
        </div>

    )
}