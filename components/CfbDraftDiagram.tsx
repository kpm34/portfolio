import React from 'react';

export const CfbDraftDiagram = () => {
    return (
        <svg width="700" height="1000" viewBox="0 0 700 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="1000" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* User Action - Red */}
                <linearGradient id="grad-action" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(239, 68, 68, 0.15)" />
                    <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-action" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(239, 68, 68, 0.6)" />
                    <stop offset="100%" stopColor="rgba(239, 68, 68, 0.2)" />
                </linearGradient>

                {/* UI - Orange */}
                <linearGradient id="grad-ui" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-ui" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Validation - Purple */}
                <linearGradient id="grad-valid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-valid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Realtime - Green */}
                <linearGradient id="grad-rt" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-rt" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* State - Yellow */}
                <linearGradient id="grad-state" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(234, 179, 8, 0.15)" />
                    <stop offset="100%" stopColor="rgba(234, 179, 8, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-state" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(234, 179, 8, 0.6)" />
                    <stop offset="100%" stopColor="rgba(234, 179, 8, 0.2)" />
                </linearGradient>

                {/* Database - Cyan */}
                <linearGradient id="grad-persist" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-persist" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Arrow marker - filled triangle pointing down */}
                <marker id="arrow-down-draft" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
                </marker>
            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Real-Time Draft System</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">WebSocket State Synchronization</text>

            {/* ==================== LAYER 1: USER ACTION ==================== */}
            <g transform="translate(50, 90)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#EF4444" letterSpacing="1">USER ACTION</text>

                <rect x="0" y="15" width="600" height="70" rx="8" fill="url(#grad-action)" stroke="url(#stroke-action)" strokeWidth="1" />

                <g transform="translate(150, 30)">
                    <rect width="130" height="40" rx="6" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeOpacity="0.5" />
                    <text x="65" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Make Pick</text>
                </g>
                <g transform="translate(320, 30)">
                    <rect width="130" height="40" rx="6" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeOpacity="0.5" />
                    <text x="65" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Place Bid</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 180 L 350 200" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-draft)" />

            {/* ==================== LAYER 2: DRAFT ROOM UI ==================== */}
            <g transform="translate(50, 215)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">DRAFT ROOM UI</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-ui)" stroke="url(#stroke-ui)" strokeWidth="1" />

                {/* Three UI components */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Player List</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Searchable</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Position Filters</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Pick Timer</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">30s - 300s</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Server-synced</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">My Roster</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Draft Picks</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Position Slots</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 335 L 350 355" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-draft)" />

            {/* ==================== LAYER 3: VALIDATION ==================== */}
            <g transform="translate(50, 370)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">VALIDATION LAYER</text>

                <rect x="0" y="15" width="600" height="90" rx="8" fill="url(#grad-valid)" stroke="url(#stroke-valid)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Server-Side Validation</text>

                {/* Validation rules */}
                <text x="120" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">Is it your turn?</text>
                <text x="300" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">Player available?</text>
                <text x="480" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">Valid roster slot?</text>

                <text x="120" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Snake order check</text>
                <text x="300" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Not drafted yet</text>
                <text x="480" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Position cap</text>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 480 L 350 500" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-draft)" />

            {/* ==================== LAYER 4: SUPABASE REALTIME ==================== */}
            <g transform="translate(50, 515)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">SUPABASE REALTIME</text>

                <rect x="0" y="15" width="600" height="85" rx="8" fill="url(#grad-rt)" stroke="url(#stroke-rt)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Broadcast Pick to All Clients</text>

                {/* Latency badge */}
                <g transform="translate(250, 55)">
                    <rect width="100" height="24" rx="12" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeOpacity="0.5" />
                    <text x="50" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#22C55E">&lt; 100ms</text>
                </g>

                <text x="300" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">WebSocket Pub/Sub  |  Postgres Changes</text>
            </g>

            {/* Arrow 4 */}
            <path d="M 350 620 L 350 640" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-draft)" />

            {/* ==================== LAYER 5: STATE UPDATE ==================== */}
            <g transform="translate(50, 655)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#EAB308" letterSpacing="1">STATE UPDATE</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-state)" stroke="url(#stroke-state)" strokeWidth="1" />

                {/* Three state components */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#EAB308" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Next Turn</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#EAB308">Snake Logic</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Round flip calc</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#EAB308" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Draft Board</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Pick History</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">All teams view</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#EAB308" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Auto-Pick</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Queue / Best Avail</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Timer expire trigger</text>
                </g>
            </g>

            {/* Arrow 5 */}
            <path d="M 350 775 L 350 795" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-draft)" />

            {/* ==================== LAYER 6: DATABASE ==================== */}
            <g transform="translate(50, 810)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">DATABASE PERSIST</text>

                <rect x="0" y="15" width="600" height="70" rx="8" fill="url(#grad-persist)" stroke="url(#stroke-persist)" strokeWidth="1" />

                {/* Table pills */}
                <g transform="translate(80, 35)">
                    <rect width="120" height="28" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.4" />
                    <text x="60" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">draft_sessions</text>
                </g>
                <g transform="translate(230, 35)">
                    <rect width="100" height="28" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.4" />
                    <text x="50" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">draft_picks</text>
                </g>
                <g transform="translate(360, 35)">
                    <rect width="80" height="28" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.4" />
                    <text x="40" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">rosters</text>
                </g>
                <g transform="translate(470, 35)">
                    <rect width="80" height="28" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.4" />
                    <text x="40" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">teams</text>
                </g>
            </g>

            {/* Draft types badge on side */}
            <g transform="translate(660, 400)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="9" fill="#666" transform="rotate(90)">Snake Draft  |  Auction Draft</text>
            </g>

        </svg>
    );
};
