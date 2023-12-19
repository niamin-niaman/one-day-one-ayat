'use client';
import React from 'react';

interface FullBackgroundImageProps {
    imageUrl: string;
    children?: React.ReactNode;
}

const FullBackgroundImage: React.FC<FullBackgroundImageProps> = ({ children, imageUrl }) => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center">
            <div
                className="bg-cover bg-center h-full w-full"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            >
                {/* Content goes here */}
                {children}
            </div>
        </div>
    );
};

export default FullBackgroundImage;
