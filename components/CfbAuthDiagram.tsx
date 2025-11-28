import React from 'react';

export const CfbAuthDiagram = () => {
    return (
        <svg width="700" height="950" viewBox="0 0 700 950" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="950" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* User - Gray */}
                <linearGradient id="grad-user" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(156, 163, 175, 0.15)" />
                    <stop offset="100%" stopColor="rgba(156, 163, 175, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-user" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(156, 163, 175, 0.6)" />
                    <stop offset="100%" stopColor="rgba(156, 163, 175, 0.2)" />
                </linearGradient>

                {/* Supabase Auth - Green */}
                <linearGradient id="grad-supa-auth" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-supa-auth" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Middleware - Purple */}
                <linearGradient id="grad-mw" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-mw" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* RLS - Orange */}
                <linearGradient id="grad-rls" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-rls" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Protected - Cyan */}
                <linearGradient id="grad-protected" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-protected" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Arrow marker - filled triangle pointing down */}
                <marker id="arrow-down-auth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
                </marker>
            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Authentication & Security</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Supabase Auth + Row Level Security</text>

            {/* ==================== LAYER 1: USER ==================== */}
            <g transform="translate(50, 90)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#9CA3AF" letterSpacing="1">USER</text>

                <rect x="0" y="15" width="600" height="90" rx="8" fill="url(#grad-user)" stroke="url(#stroke-user)" strokeWidth="1" />

                <g transform="translate(150, 30)">
                    <rect width="130" height="55" rx="6" fill="#000" fillOpacity="0.4" stroke="#9CA3AF" strokeOpacity="0.3" />
                    <text x="65" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Email/Password</text>
                    <text x="65" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Sign up / Sign in</text>
                </g>
                <g transform="translate(320, 30)">
                    <rect width="130" height="55" rx="6" fill="#000" fillOpacity="0.4" stroke="#9CA3AF" strokeOpacity="0.3" />
                    <text x="65" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">OAuth</text>
                    <text x="65" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Google / Discord</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 200 L 350 220" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-auth)" />

            {/* ==================== LAYER 2: SUPABASE AUTH ==================== */}
            <g transform="translate(50, 235)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">SUPABASE AUTH</text>

                <rect x="0" y="15" width="600" height="110" rx="8" fill="url(#grad-supa-auth)" stroke="url(#stroke-supa-auth)" strokeWidth="1" />

                {/* Three auth components */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">JWT Token</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">1 hour expiry</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Auto-refresh</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Session Cookie</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">7 day expiry</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">HTTP-only secure</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Email Verify</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Confirmation link</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">hCaptcha protected</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 365 L 350 385" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-auth)" />

            {/* ==================== LAYER 3: MIDDLEWARE ==================== */}
            <g transform="translate(50, 400)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">MIDDLEWARE</text>

                <rect x="0" y="15" width="600" height="130" rx="8" fill="url(#grad-mw)" stroke="url(#stroke-mw)" strokeWidth="1" />

                <text x="300" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">middleware.ts</text>

                {/* Middleware rules */}
                <g transform="translate(30, 55)">
                    <rect width="540" height="28" rx="4" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.2" />
                    <text x="20" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">Auto-refresh expired tokens</text>
                </g>
                <g transform="translate(30, 90)">
                    <rect width="260" height="28" rx="4" fill="#000" fillOpacity="0.3" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="15" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">Protected:</text>
                    <text x="80" y="18" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/dashboard, /leagues/*, /profile</text>
                </g>
                <g transform="translate(310, 90)">
                    <rect width="260" height="28" rx="4" fill="#000" fillOpacity="0.3" stroke="#9CA3AF" strokeOpacity="0.3" />
                    <text x="15" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#9CA3AF">Public:</text>
                    <text x="55" y="18" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">/auth/*, /about, /blog, /</text>
                </g>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 550 L 350 570" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-auth)" />

            {/* ==================== LAYER 4: RLS POLICIES ==================== */}
            <g transform="translate(50, 585)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">ROW LEVEL SECURITY</text>

                <rect x="0" y="15" width="600" height="110" rx="8" fill="url(#grad-rls)" stroke="url(#stroke-rls)" strokeWidth="1" />

                {/* Three RLS policies */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">League Access</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Members only view</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Commissioner edit</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Team Owner</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Own teams only</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Roster changes</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Draft Turn</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Current picker only</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Pick validation</text>
                </g>
            </g>

            {/* Arrow 4 */}
            <path d="M 350 715 L 350 735" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-auth)" />

            {/* ==================== LAYER 5: PROTECTED DATA ==================== */}
            <g transform="translate(50, 750)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">PROTECTED DATA</text>

                <rect x="0" y="15" width="600" height="90" rx="8" fill="url(#grad-protected)" stroke="url(#stroke-protected)" strokeWidth="1" />

                <text x="300" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Only YOUR Data Visible</text>
                <text x="300" y="75" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#06B6D4">Leagues  |  Teams  |  Rosters  |  Draft Picks</text>
                <text x="300" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Others hidden at database level - zero trust architecture</text>
            </g>

        </svg>
    );
};
