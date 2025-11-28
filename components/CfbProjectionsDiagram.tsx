import React from 'react';

export const CfbProjectionsDiagram = () => {
    return (
        <svg width="700" height="950" viewBox="0 0 700 950" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="950" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Data Sources - Blue */}
                <linearGradient id="grad-source" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-source" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* Cron - Purple */}
                <linearGradient id="grad-cron" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-cron" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Transform - Cyan */}
                <linearGradient id="grad-transform" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-transform" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Database - Green */}
                <linearGradient id="grad-db-proj" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-db-proj" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Live - Orange */}
                <linearGradient id="grad-live" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-live" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Arrow marker - filled triangle pointing down */}
                <marker id="arrow-down-proj" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
                </marker>
            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Projections Pipeline</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">ETL Data Ingestion & Fantasy Scoring</text>

            {/* ==================== LAYER 1: DATA SOURCES ==================== */}
            <g transform="translate(50, 90)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#3B82F6" letterSpacing="1">DATA SOURCES</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-source)" stroke="url(#stroke-source)" strokeWidth="1" />

                {/* Three data sources */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">CFBD API</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Player stats</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Game results</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">ESPN JSON</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Scoreboard data</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Game status</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Live Scores</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Real-time updates</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">In-game stats</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 210 L 350 230" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-proj)" />

            {/* ==================== LAYER 2: CRON JOBS ==================== */}
            <g transform="translate(50, 245)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">VERCEL CRON JOBS</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-cron)" stroke="url(#stroke-cron)" strokeWidth="1" />

                <g transform="translate(30, 30)">
                    <rect width="540" height="28" rx="4" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.2" />
                    <text x="20" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">/api/cron/update-game-statuses</text>
                    <text x="350" y="18" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Every minute during games</text>
                </g>
                <g transform="translate(30, 65)">
                    <rect width="540" height="28" rx="4" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.2" />
                    <text x="20" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">/api/cron/calculate-scores</text>
                    <text x="350" y="18" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Fantasy point calculation</text>
                </g>
                <g transform="translate(30, 100)">
                    <rect width="540" height="28" rx="4" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.2" />
                    <text x="20" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">/api/cron/check-week-completion</text>
                    <text x="350" y="18" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Finalize matchups</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 385 L 350 405" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-proj)" />

            {/* ==================== LAYER 3: TRANSFORM ==================== */}
            <g transform="translate(50, 420)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">TRANSFORM & CALCULATE</text>

                <rect x="0" y="15" width="600" height="150" rx="8" fill="url(#grad-transform)" stroke="url(#stroke-transform)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Fantasy Scoring Algorithm</text>

                {/* Scoring rules */}
                <g transform="translate(40, 60)">
                    <rect width="160" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="80" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#06B6D4">Passing</text>
                    <text x="80" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">0.04 pts/yard</text>
                    <text x="80" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">4 pts/TD</text>
                    <text x="80" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">-2 pts/INT</text>
                </g>

                <g transform="translate(220, 60)">
                    <rect width="160" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="80" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#06B6D4">Rushing</text>
                    <text x="80" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">0.1 pts/yard</text>
                    <text x="80" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">6 pts/TD</text>
                    <text x="80" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">-1 pts/fumble</text>
                </g>

                <g transform="translate(400, 60)">
                    <rect width="160" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="80" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#06B6D4">Receiving</text>
                    <text x="80" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">0.1 pts/yard</text>
                    <text x="80" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">6 pts/TD</text>
                    <text x="80" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">PPR: +1/catch</text>
                </g>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 590 L 350 610" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-proj)" />

            {/* ==================== LAYER 4: DATABASE ==================== */}
            <g transform="translate(50, 625)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">DATABASE STORAGE</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-db-proj)" stroke="url(#stroke-db-proj)" strokeWidth="1" />

                {/* Three tables */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">games</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Game status</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Final scores</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">player_stats</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Weekly stats</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Fantasy points</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">matchups</text>
                    <text x="85" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Team scores</text>
                    <text x="85" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Win/loss record</text>
                </g>
            </g>

            {/* Arrow 4 */}
            <path d="M 350 745 L 350 765" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-proj)" />

            {/* ==================== LAYER 5: LIVE UPDATE ==================== */}
            <g transform="translate(50, 780)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">LIVE UPDATE</text>

                <rect x="0" y="15" width="600" height="80" rx="8" fill="url(#grad-live)" stroke="url(#stroke-live)" strokeWidth="1" />

                <text x="300" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Supabase Realtime → Scoreboard UI</text>

                {/* Update badge */}
                <g transform="translate(220, 60)">
                    <rect width="160" height="24" rx="12" fill="#F97316" fillOpacity="0.2" stroke="#F97316" strokeOpacity="0.5" />
                    <text x="80" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#F97316">Every 60 seconds</text>
                </g>
            </g>

        </svg>
    );
};
