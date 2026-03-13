import React from 'react';

export const CfbScoringDiagram = () => {
    return (
        <svg width="700" height="860" viewBox="0 0 700 860" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="860" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Scoring Modes - Purple */}
                <linearGradient id="grad-modes" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-modes" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Position Calculations - Cyan */}
                <linearGradient id="grad-positions" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-positions" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Bonuses - Orange */}
                <linearGradient id="grad-bonuses" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-bonuses" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Real-time - Green */}
                <linearGradient id="grad-realtime" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-realtime" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Fantasy Scoring System</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">PPR, Half-PPR & Standard Scoring Engine</text>

            {/* ==================== LAYER 1: SCORING MODES ==================== */}
            <g transform="translate(50, 90)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">SCORING MODES</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-modes)" stroke="url(#stroke-modes)" strokeWidth="1" />

                {/* Three scoring modes */}
                <g transform="translate(20, 35)">
                    <rect width="175" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="87" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Standard</text>
                    <text x="87" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">No reception bonus</text>
                    <text x="87" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">0 pts/catch</text>
                </g>

                <g transform="translate(212, 35)">
                    <rect width="175" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="87" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Half-PPR</text>
                    <text x="87" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Balanced scoring</text>
                    <text x="87" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">0.5 pts/catch</text>
                </g>

                <g transform="translate(404, 35)">
                    <rect width="175" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="87" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Full PPR</text>
                    <text x="87" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Points Per Reception</text>
                    <text x="87" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">1 pt/catch</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 230 L 350 248" stroke="#666" strokeWidth="1.5" />
            <polygon points="350,258 344,248 356,248" fill="#666" />

            {/* ==================== LAYER 2: POSITION CALCULATIONS ==================== */}
            <g transform="translate(50, 265)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">POSITION CALCULATIONS</text>

                <rect x="0" y="15" width="600" height="200" rx="8" fill="url(#grad-positions)" stroke="url(#stroke-positions)" strokeWidth="1" />

                {/* Four positions - Row 1 */}
                <g transform="translate(20, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="67" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#06B6D4">Quarterback</text>
                    <text x="67" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Pass: 0.04 pts/yd</text>
                    <text x="67" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">TD Pass: 4 pts</text>
                    <text x="67" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F87171">INT: -2 pts</text>
                </g>

                <g transform="translate(165, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="67" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#06B6D4">Running Back</text>
                    <text x="67" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Rush: 0.1 pts/yd</text>
                    <text x="67" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">TD Rush: 6 pts</text>
                    <text x="67" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F87171">Fumble: -1 pt</text>
                </g>

                <g transform="translate(310, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="67" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#06B6D4">Wide Receiver</text>
                    <text x="67" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Rec: 0.1 pts/yd</text>
                    <text x="67" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">TD Rec: 6 pts</text>
                    <text x="67" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#A855F7">+ PPR Bonus</text>
                </g>

                <g transform="translate(455, 30)">
                    <rect width="125" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="62" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#06B6D4">Tight End</text>
                    <text x="62" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Rec: 0.1 pts/yd</text>
                    <text x="62" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">TD Rec: 6 pts</text>
                    <text x="62" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#A855F7">+ PPR Bonus</text>
                </g>

                {/* Secondary row - more positions */}
                <g transform="translate(100, 115)">
                    <rect width="200" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="100" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#06B6D4">FLEX (RB/WR/TE)</text>
                    <text x="100" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Same scoring as position</text>
                    <text x="100" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Max roster flexibility</text>
                </g>

                <g transform="translate(320, 115)">
                    <rect width="200" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="100" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#06B6D4">K / DEF</text>
                    <text x="100" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">FG: 3-5 pts by distance</text>
                    <text x="100" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">DEF: Points allowed scale</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 485 L 350 503" stroke="#666" strokeWidth="1.5" />
            <polygon points="350,513 344,503 356,503" fill="#666" />

            {/* ==================== LAYER 3: BONUSES ==================== */}
            <g transform="translate(50, 520)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">BONUSES & MULTIPLIERS</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-bonuses)" stroke="url(#stroke-bonuses)" strokeWidth="1" />

                {/* Three bonus types */}
                <g transform="translate(20, 30)">
                    <rect width="175" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="87" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">100+ Yard Game</text>
                    <text x="87" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F97316">+3 pts bonus</text>
                    <text x="87" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Rush or Receiving</text>
                </g>

                <g transform="translate(212, 30)">
                    <rect width="175" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="87" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Long TD Bonus</text>
                    <text x="87" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F97316">50+ yards = +2 pts</text>
                    <text x="87" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Any TD play</text>
                </g>

                <g transform="translate(404, 30)">
                    <rect width="175" height="65" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="87" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">2PT Conversion</text>
                    <text x="87" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F97316">+2 pts</text>
                    <text x="87" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Pass, Rush, or Rec</text>
                </g>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 640 L 350 658" stroke="#666" strokeWidth="1.5" />
            <polygon points="350,668 344,658 356,658" fill="#666" />

            {/* ==================== LAYER 4: REAL-TIME CALCULATION ==================== */}
            <g transform="translate(50, 675)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">REAL-TIME CALCULATION</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-realtime)" stroke="url(#stroke-realtime)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Supabase → player_stats → Fantasy Points</text>

                {/* Pipeline visualization - horizontal with right arrows */}
                <g transform="translate(20, 55)">
                    <rect width="170" height="45" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#22C55E">Cron Job</text>
                    <text x="85" y="36" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">60-second refresh</text>
                </g>

                <path d="M 190 77 L 210 77" stroke="#22C55E" strokeWidth="1.5" />
                <polygon points="208,73 216,77 208,81" fill="#22C55E" />

                <g transform="translate(215, 55)">
                    <rect width="170" height="45" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#22C55E">Score Engine</text>
                    <text x="85" y="36" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Apply scoring rules</text>
                </g>

                <path d="M 385 77 L 405 77" stroke="#22C55E" strokeWidth="1.5" />
                <polygon points="403,73 411,77 403,81" fill="#22C55E" />

                <g transform="translate(410, 55)">
                    <rect width="170" height="45" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="85" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#22C55E">UI Update</text>
                    <text x="85" y="36" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Realtime broadcast</text>
                </g>
            </g>

            {/* Footer stats */}
            <g transform="translate(50, 800)">
                <rect width="180" height="28" rx="14" fill="#000" stroke="#666" strokeOpacity="0.3" />
                <text x="90" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">25+ Config Parameters</text>
            </g>
            <g transform="translate(260, 800)">
                <rect width="180" height="28" rx="14" fill="#000" stroke="#666" strokeOpacity="0.3" />
                <text x="90" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Position-Specific Rules</text>
            </g>
            <g transform="translate(470, 800)">
                <rect width="180" height="28" rx="14" fill="#000" stroke="#666" strokeOpacity="0.3" />
                <text x="90" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Live Game Detection</text>
            </g>

        </svg>
    );
};
