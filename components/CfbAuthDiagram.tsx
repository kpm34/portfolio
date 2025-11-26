import React from 'react';

export const CfbAuthDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-auth" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-auth" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                <marker id="arrow-auth" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#A855F7" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">Authentication & Security</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">Supabase Auth + RLS Policies</text>

            {/* Client */}
            <g transform="translate(100, 350)">
                <rect width="200" height="150" rx="12" fill="#111" stroke="#666" strokeWidth="1" />
                <text x="100" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#fff">User</text>
            </g>

            {/* Middleware */}
            <g transform="translate(500, 300)">
                <rect width="250" height="250" rx="12" fill="url(#grad-auth)" stroke="url(#stroke-auth)" strokeWidth="1" />
                <text x="125" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#A855F7">Middleware</text>
                <text x="125" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Session Check</text>
                <text x="125" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Route Protection</text>
            </g>

            {/* Database */}
            <g transform="translate(950, 300)">
                <rect width="250" height="250" rx="12" fill="#111" stroke="#22C55E" strokeWidth="1" />
                <text x="125" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#22C55E">Database</text>
                <text x="125" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">RLS Policies</text>
                <text x="125" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Row Security</text>
            </g>

            {/* Connections */}
            <path d="M 300 425 L 500 425" stroke="#A855F7" strokeWidth="2" markerEnd="url(#arrow-auth)" />
            <text x="400" y="415" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#A855F7">Request</text>

            <path d="M 750 425 L 950 425" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow-auth)" />
            <text x="850" y="415" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#22C55E">Query (Authenticated)</text>

        </svg>
    );
};
