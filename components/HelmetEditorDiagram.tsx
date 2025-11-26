import React from 'react';

export const HelmetEditorDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-r3f" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-r3f" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                <marker id="arrow-r3f" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">Helmet Editor Architecture</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">React Three Fiber + State Management</text>

            {/* UI Controls */}
            <g transform="translate(100, 350)">
                <rect width="200" height="150" rx="12" fill="#111" stroke="#666" strokeWidth="1" />
                <text x="100" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#fff">UI Controls</text>
                <text x="100" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#aaa">Color Picker</text>
                <text x="100" y="110" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#aaa">Material Select</text>
            </g>

            {/* State */}
            <g transform="translate(500, 300)">
                <rect width="250" height="250" rx="12" fill="url(#grad-r3f)" stroke="url(#stroke-r3f)" strokeWidth="1" />
                <text x="125" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#3B82F6">Zustand Store</text>
                <text x="125" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Helmet Config</text>
                <text x="125" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Zone Colors</text>
            </g>

            {/* 3D Scene */}
            <g transform="translate(950, 300)">
                <rect width="250" height="250" rx="12" fill="#111" stroke="#3B82F6" strokeWidth="1" />
                <text x="125" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#3B82F6">3D Scene</text>
                <text x="125" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Mesh Updates</text>
                <text x="125" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Material Props</text>
            </g>

            {/* Connections */}
            <path d="M 300 425 L 500 425" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow-r3f)" />
            <text x="400" y="415" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#3B82F6">Update Action</text>

            <path d="M 750 425 L 950 425" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow-r3f)" />
            <text x="850" y="415" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#3B82F6">Reactive Props</text>

        </svg>
    );
};
