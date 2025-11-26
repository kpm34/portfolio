import React from 'react';

export const CfbArchitectureDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Frontend - Orange */}
                <linearGradient id="grad-fe" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-fe" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Backend - Green (Supabase) */}
                <linearGradient id="grad-be" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-be" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* 3D Engine - Blue */}
                <linearGradient id="grad-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* Markers */}
                <marker id="arrow-fe" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#F97316" />
                </marker>
                <marker id="arrow-be" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#22C55E" />
                </marker>
                <marker id="arrow-3d" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">CFB Fantasy Architecture</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">Full-Stack System Overview</text>

            {/* ==================== LEFT: FRONTEND ==================== */}
            <text x="50" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">CLIENT APP</text>

            <g transform="translate(50, 180)">
                <rect width="350" height="400" rx="12" fill="url(#grad-fe)" stroke="url(#stroke-fe)" strokeWidth="1" />
                <text x="30" y="40" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#F97316">Next.js App</text>

                {/* Modules */}
                <g transform="translate(30, 80)">
                    <rect width="290" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Draft Room</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Real-time Socket Connection</text>
                </g>

                <g transform="translate(30, 160)">
                    <rect width="290" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">League Dashboard</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Matchups & Standings</text>
                </g>

                <g transform="translate(30, 240)">
                    <rect width="290" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Team Management</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Roster & Waivers</text>
                </g>
            </g>

            {/* ==================== CENTER: BACKEND ==================== */}
            <text x="500" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">BACKEND SERVICES</text>

            <g transform="translate(500, 180)">
                <rect width="350" height="400" rx="12" fill="url(#grad-be)" stroke="url(#stroke-be)" strokeWidth="1" />
                <text x="30" y="40" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#22C55E">Supabase</text>

                {/* Database */}
                <g transform="translate(30, 80)">
                    <rect width="290" height="100" rx="6" fill="#000" fillOpacity="0.3" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">PostgreSQL DB</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Players • Leagues • Teams</text>
                    <text x="20" y="65" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Draft Picks • Scoring Settings</text>
                </g>

                {/* Realtime */}
                <g transform="translate(30, 200)">
                    <rect width="290" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Realtime Engine</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Pub/Sub for Draft Updates</text>
                </g>

                {/* Auth */}
                <g transform="translate(30, 280)">
                    <rect width="290" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Authentication</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">RLS Policies & User Mgmt</text>
                </g>
            </g>

            {/* ==================== RIGHT: 3D ENGINE ==================== */}
            <text x="950" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">VISUALIZATION</text>

            <g transform="translate(950, 180)">
                <rect width="350" height="250" rx="12" fill="url(#grad-3d)" stroke="url(#stroke-3d)" strokeWidth="1" />
                <text x="30" y="40" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#3B82F6">3D Engine</text>
                <text x="30" y="65" fontFamily="Inter, sans-serif" fontSize="14" fill="#3B82F6" opacity="0.8">React Three Fiber</text>

                <g transform="translate(30, 90)">
                    <rect width="290" height="120" rx="6" fill="#000" fillOpacity="0.3" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="20" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Stadium View</text>
                    <text x="20" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Interactive Seating</text>
                    <text x="20" y="65" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Dynamic Scoreboards</text>
                    <text x="20" y="85" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Helmet Customizer Integration</text>
                </g>
            </g>

            {/* ==================== CONNECTIONS ==================== */}

            {/* Client -> Backend */}
            <path d="M 400 380 L 500 380" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrow-fe)" />
            <text x="450" y="370" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F97316">Data Sync</text>

            {/* Backend -> Client (Realtime) */}
            <path d="M 500 230 L 400 230" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow-be)" />
            <text x="450" y="220" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">Live Events</text>

            {/* Client -> 3D */}
            <path d="M 225 580 L 225 650 L 1125 650 L 1125 430" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow-3d)" />
            <rect x="635" y="635" width="80" height="20" rx="4" fill="#000" stroke="#3B82F6" strokeWidth="1" />
            <text x="675" y="649" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">Context State</text>

        </svg>
    );
};
