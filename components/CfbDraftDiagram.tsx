import React from 'react';

export const CfbDraftDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-draft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(239, 68, 68, 0.15)" />
                    <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-draft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(239, 68, 68, 0.6)" />
                    <stop offset="100%" stopColor="rgba(239, 68, 68, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-state" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(234, 179, 8, 0.15)" />
                    <stop offset="100%" stopColor="rgba(234, 179, 8, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-state" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(234, 179, 8, 0.6)" />
                    <stop offset="100%" stopColor="rgba(234, 179, 8, 0.2)" />
                </linearGradient>

                <marker id="arrow-draft" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#EF4444" />
                </marker>
                <marker id="arrow-state" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#EAB308" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">Real-Time Draft System</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">WebSocket State Synchronization</text>

            {/* Draft Client */}
            <g transform="translate(100, 300)">
                <rect width="300" height="200" rx="12" fill="url(#grad-draft)" stroke="url(#stroke-draft)" strokeWidth="1" />
                <text x="150" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#EF4444">Draft Room UI</text>
                <text x="150" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Player Selection</text>
                <text x="150" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Timer Display</text>
            </g>

            {/* Sync Engine */}
            <g transform="translate(600, 300)">
                <circle cx="100" cy="100" r="80" fill="#000" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" />
                <text x="100" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Supabase</text>
                <text x="100" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Realtime</text>
            </g>

            {/* State Machine */}
            <g transform="translate(1000, 300)">
                <rect width="300" height="200" rx="12" fill="url(#grad-state)" stroke="url(#stroke-state)" strokeWidth="1" />
                <text x="150" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#EAB308">Draft State</text>
                <text x="150" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Turn Management</text>
                <text x="150" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Pick Validation</text>
            </g>

            {/* Connections */}
            <path d="M 400 350 L 600 350" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow-draft)" />
            <text x="500" y="340" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#EF4444">Make Pick</text>

            <path d="M 800 350 L 1000 350" stroke="#EAB308" strokeWidth="2" markerEnd="url(#arrow-state)" />
            <text x="900" y="340" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#EAB308">Update State</text>

            <path d="M 1000 450 L 800 450" stroke="#EAB308" strokeWidth="2" markerEnd="url(#arrow-state)" />
            <path d="M 600 450 L 400 450" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow-draft)" />
            <text x="700" y="440" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#fff">Broadcast Update</text>

        </svg>
    );
};
