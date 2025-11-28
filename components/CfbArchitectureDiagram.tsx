import React from 'react';

export const CfbArchitectureDiagram = () => {
    return (
        <svg width="700" height="1100" viewBox="0 0 700 1100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="1100" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Frontend - Orange */}
                <linearGradient id="grad-client" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-client" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* API - Purple */}
                <linearGradient id="grad-api" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-api" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Supabase - Green */}
                <linearGradient id="grad-supa" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-supa" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Database - Cyan */}
                <linearGradient id="grad-db" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-db" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Assets - Blue */}
                <linearGradient id="grad-assets" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-assets" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* Arrow marker - filled triangle pointing down */}
                <marker id="arrow-down" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
                </marker>
            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">CFB Fantasy Architecture</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Full-Stack System Overview</text>

            {/* Tech badges */}
            <g transform="translate(200, 75)">
                <rect width="70" height="20" rx="10" fill="#000" stroke="#F97316" strokeOpacity="0.5" />
                <text x="35" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">Next.js 15</text>
            </g>
            <g transform="translate(280, 75)">
                <rect width="65" height="20" rx="10" fill="#000" stroke="#3B82F6" strokeOpacity="0.5" />
                <text x="32" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#3B82F6">React 19</text>
            </g>
            <g transform="translate(355, 75)">
                <rect width="75" height="20" rx="10" fill="#000" stroke="#06B6D4" strokeOpacity="0.5" />
                <text x="37" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">TypeScript</text>
            </g>

            {/* ==================== LAYER 1: CLIENT ==================== */}
            <g transform="translate(50, 110)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">CLIENT LAYER</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-client)" stroke="url(#stroke-client)" strokeWidth="1" />

                {/* Three client modules */}
                <g transform="translate(20, 35)">
                    <rect width="170" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Draft Room</text>
                    <text x="85" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Real-time Picks</text>
                    <text x="85" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Snake & Auction</text>
                </g>

                <g transform="translate(215, 35)">
                    <rect width="170" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">League Dashboard</text>
                    <text x="85" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Standings & Stats</text>
                    <text x="85" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Matchups & Scores</text>
                </g>

                <g transform="translate(410, 35)">
                    <rect width="170" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Team Manager</text>
                    <text x="85" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Roster & Lineup</text>
                    <text x="85" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Waivers & Trades</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 250 L 350 270" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

            {/* ==================== LAYER 2: API ==================== */}
            <g transform="translate(50, 285)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">API LAYER</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-api)" stroke="url(#stroke-api)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Next.js API Routes</text>
                <text x="300" y="65" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#A855F7">37 Endpoints</text>

                {/* Endpoint groups */}
                <text x="80" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/api/draft/*</text>
                <text x="200" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/api/leagues/*</text>
                <text x="320" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/api/scoring/*</text>
                <text x="440" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/api/cron/*</text>
                <text x="550" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/api/auth/*</text>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 405 L 350 425" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

            {/* ==================== LAYER 3: SUPABASE ==================== */}
            <g transform="translate(50, 440)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">SUPABASE LAYER</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-supa)" stroke="url(#stroke-supa)" strokeWidth="1" />

                {/* Three supabase services */}
                <g transform="translate(20, 35)">
                    <rect width="170" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Auth</text>
                    <text x="85" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">JWT Tokens</text>
                    <text x="85" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Session Management</text>
                </g>

                <g transform="translate(215, 35)">
                    <rect width="170" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Realtime</text>
                    <text x="85" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">WebSocket Pub/Sub</text>
                    <text x="85" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">&lt;100ms Latency</text>
                </g>

                <g transform="translate(410, 35)">
                    <rect width="170" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">RLS Policies</text>
                    <text x="85" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Row Level Security</text>
                    <text x="85" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Per-User Data Access</text>
                </g>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 580 L 350 600" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

            {/* ==================== LAYER 4: DATABASE ==================== */}
            <g transform="translate(50, 615)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">DATABASE LAYER</text>

                <rect x="0" y="15" width="600" height="140" rx="8" fill="url(#grad-db)" stroke="url(#stroke-db)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">PostgreSQL</text>
                <text x="300" y="65" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#06B6D4">18 Tables  |  28 Migrations</text>

                {/* Table pills - Row 1 */}
                <g transform="translate(45, 80)">
                    <rect width="70" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="35" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">leagues</text>
                </g>
                <g transform="translate(125, 80)">
                    <rect width="70" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="35" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">teams</text>
                </g>
                <g transform="translate(205, 80)">
                    <rect width="70" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="35" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">players</text>
                </g>
                <g transform="translate(285, 80)">
                    <rect width="70" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="35" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">rosters</text>
                </g>
                <g transform="translate(365, 80)">
                    <rect width="85" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="42" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">draft_picks</text>
                </g>
                <g transform="translate(460, 80)">
                    <rect width="95" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="47" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">draft_sessions</text>
                </g>

                {/* Table pills - Row 2 */}
                <g transform="translate(85, 112)">
                    <rect width="80" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="40" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">matchups</text>
                </g>
                <g transform="translate(175, 112)">
                    <rect width="85" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="42" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">player_stats</text>
                </g>
                <g transform="translate(270, 112)">
                    <rect width="60" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="30" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">games</text>
                </g>
                <g transform="translate(340, 112)">
                    <rect width="65" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="32" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">profiles</text>
                </g>
                <g transform="translate(415, 112)">
                    <rect width="90" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="45" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">transactions</text>
                </g>
            </g>

            {/* Arrow 4 */}
            <path d="M 350 775 L 350 795" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

            {/* ==================== LAYER 5: ASSETS ==================== */}
            <g transform="translate(50, 810)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#3B82F6" letterSpacing="1">3D / ASSETS LAYER</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-assets)" stroke="url(#stroke-assets)" strokeWidth="1" />

                {/* Two asset groups */}
                <g transform="translate(60, 35)">
                    <rect width="220" height="60" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="110" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">React Three Fiber</text>
                    <text x="110" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">3D Helmet Customizer</text>
                </g>

                <g transform="translate(320, 35)">
                    <rect width="220" height="60" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="110" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Vercel CDN</text>
                    <text x="110" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">GLB Models & Static Assets</text>
                </g>
            </g>

            {/* External integrations label on side */}
            <g transform="translate(660, 500)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="9" fill="#666" transform="rotate(90)">CFBD API  |  ESPN  |  Resend Email</text>
            </g>

        </svg>
    );
};
