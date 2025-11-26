import React from 'react';

export const CfbProjectionsDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-data" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-data" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                <marker id="arrow-data" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#06B6D4" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">Projections Pipeline</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">Data Ingestion & Scoring</text>

            {/* Source */}
            <g transform="translate(100, 350)">
                <rect width="200" height="150" rx="12" fill="#111" stroke="#666" strokeWidth="1" />
                <text x="100" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#fff">Stats API</text>
            </g>

            {/* Processing */}
            <g transform="translate(500, 300)">
                <rect width="250" height="250" rx="12" fill="url(#grad-data)" stroke="url(#stroke-data)" strokeWidth="1" />
                <text x="125" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#06B6D4">ETL Engine</text>
                <text x="125" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Normalize Data</text>
                <text x="125" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Calculate Score</text>
            </g>

            {/* Database */}
            <g transform="translate(950, 300)">
                <rect width="250" height="250" rx="12" fill="#111" stroke="#22C55E" strokeWidth="1" />
                <text x="125" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#22C55E">Database</text>
                <text x="125" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Player Stats</text>
                <text x="125" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Fantasy Points</text>
            </g>

            {/* Connections */}
            <path d="M 300 425 L 500 425" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrow-data)" />
            <text x="400" y="415" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#06B6D4">Raw Data</text>

            <path d="M 750 425 L 950 425" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrow-data)" />
            <text x="850" y="415" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#06B6D4">Upsert Records</text>

        </svg>
    );
};
