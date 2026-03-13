import React from 'react';

export const ThirdEyeCFAPlatformDiagram = () => {
    return (
        <svg width="900" height="750" viewBox="0 0 900 750" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="900" height="750" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Views - Purple */}
                <linearGradient id="grad-cfa-views" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-cfa-views" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Curriculum - Blue */}
                <linearGradient id="grad-cfa-curr" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-cfa-curr" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* State - Green */}
                <linearGradient id="grad-cfa-state" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-cfa-state" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Arrow markers */}
                <marker id="arrow-cfa" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#A855F7" />
                </marker>
                <marker id="arrow-cfa-down" markerWidth="8" markerHeight="8" refX="3" refY="7" orient="auto">
                    <path d="M0,0 L6,0 L3,7 z" fill="#A855F7" />
                </marker>
            </defs>

            {/* Title */}
            <text x="450" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">CFA Learning Platform</text>
            <text x="450" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Multi-View State Machine with Hierarchical Navigation</text>

            {/* ==================== VIEW STATES SECTION ==================== */}
            <g transform="translate(50, 90)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">VIEW STATES (9 views managed by Zustand)</text>

                <rect x="0" y="15" width="800" height="310" rx="8" fill="url(#grad-cfa-views)" stroke="url(#stroke-cfa-views)" strokeWidth="1" />

                {/* Main navigation flow - Row 1 */}
                <g transform="translate(30, 45)">
                    <rect width="100" height="50" rx="6" fill="#A855F7" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.6" />
                    <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">HOME</text>
                    <text x="50" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#A855F7">/study</text>
                </g>

                <path d="M 130 70 L 160 70" stroke="#A855F7" strokeWidth="1.5" markerEnd="url(#arrow-cfa)" />

                <g transform="translate(170, 45)">
                    <rect width="100" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">SUBJECTS</text>
                    <text x="50" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Level selection</text>
                </g>

                <path d="M 270 70 L 300 70" stroke="#A855F7" strokeWidth="1.5" markerEnd="url(#arrow-cfa)" />

                <g transform="translate(310, 45)">
                    <rect width="100" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">TOPICS</text>
                    <text x="50" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Subject topics</text>
                </g>

                <path d="M 410 70 L 440 70" stroke="#A855F7" strokeWidth="1.5" markerEnd="url(#arrow-cfa)" />

                <g transform="translate(450, 45)">
                    <rect width="100" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">LESSONS</text>
                    <text x="50" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Topic content</text>
                </g>

                {/* Down arrows from HOME */}
                <path d="M 80 95 L 80 120" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.5" />
                <polygon points="76,118 84,118 80,126" fill="#A855F7" fillOpacity="0.5" />

                {/* Down arrows from LESSONS */}
                <path d="M 500 95 L 500 120" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.5" />
                <polygon points="496,118 504,118 500,126" fill="#A855F7" fillOpacity="0.5" />

                {/* Row 2 - Flashcards and Quizzes */}
                <g transform="translate(30, 135)">
                    <rect width="120" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="60" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">FLASHCARDS</text>
                    <text x="60" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Spaced repetition</text>
                </g>

                <g transform="translate(430, 135)">
                    <rect width="120" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="60" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">QUIZZES</text>
                    <text x="60" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Topic quizzes</text>
                </g>

                {/* Down arrows */}
                <path d="M 90 185 L 90 210" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.5" />
                <polygon points="86,208 94,208 90,216" fill="#A855F7" fillOpacity="0.5" />

                <path d="M 490 185 L 490 210" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.5" />
                <polygon points="486,208 494,208 490,216" fill="#A855F7" fillOpacity="0.5" />

                {/* Row 3 - Exams, Progress, Practice */}
                <g transform="translate(30, 225)">
                    <rect width="100" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">EXAMS</text>
                    <text x="50" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Mock exams</text>
                </g>

                <g transform="translate(250, 225)">
                    <rect width="100" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">PROGRESS</text>
                    <text x="50" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Stats tracking</text>
                </g>

                <g transform="translate(420, 225)">
                    <rect width="160" height="50" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="80" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">PRACTICE PROBLEMS</text>
                    <text x="80" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Worked examples</text>
                </g>

                {/* Stats badge */}
                <g transform="translate(620, 45)">
                    <rect width="150" height="80" rx="8" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.2" strokeDasharray="4,4" />
                    <text x="75" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#A855F7">View State</text>
                    <text x="75" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Zustand Store</text>
                    <text x="75" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Persistent navigation</text>
                </g>
            </g>

            {/* ==================== CURRICULUM STRUCTURE ==================== */}
            <g transform="translate(50, 430)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#3B82F6" letterSpacing="1">CURRICULUM STRUCTURE</text>

                <rect x="0" y="15" width="800" height="150" rx="8" fill="url(#grad-cfa-curr)" stroke="url(#stroke-cfa-curr)" strokeWidth="1" />

                {/* Three CFA levels */}
                <g transform="translate(25, 35)">
                    <rect width="240" height="110" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="120" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#3B82F6">Level I</text>
                    <text x="120" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#fff">10 Topics</text>
                    <line x1="20" y1="55" x2="220" y2="55" stroke="#3B82F6" strokeOpacity="0.2" />
                    <text x="120" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Ethics & Standards</text>
                    <text x="120" y="85" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Quantitative Methods</text>
                    <text x="120" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Economics, FRA...</text>
                </g>

                <g transform="translate(280, 35)">
                    <rect width="240" height="110" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="120" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#3B82F6">Level II</text>
                    <text x="120" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#fff">10 Topics</text>
                    <line x1="20" y1="55" x2="220" y2="55" stroke="#3B82F6" strokeOpacity="0.2" />
                    <text x="120" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Fixed Income</text>
                    <text x="120" y="85" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Derivatives</text>
                    <text x="120" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Alternative Investments...</text>
                </g>

                <g transform="translate(535, 35)">
                    <rect width="240" height="110" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="120" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#3B82F6">Level III</text>
                    <text x="120" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#fff">7 Topics</text>
                    <line x1="20" y1="55" x2="220" y2="55" stroke="#3B82F6" strokeOpacity="0.2" />
                    <text x="120" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Portfolio Management</text>
                    <text x="120" y="85" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Private Wealth</text>
                    <text x="120" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Institutional Investors...</text>
                </g>
            </g>

            {/* ==================== STATE MANAGEMENT ==================== */}
            <g transform="translate(50, 610)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">STATE MANAGEMENT</text>

                <rect x="0" y="15" width="800" height="70" rx="8" fill="url(#grad-cfa-state)" stroke="url(#stroke-cfa-state)" strokeWidth="1" />

                {/* State features */}
                <g transform="translate(30, 30)">
                    <rect width="175" height="40" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="87" y="26" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#22C55E">Zustand + Persist</text>
                </g>

                <g transform="translate(220, 30)">
                    <rect width="175" height="40" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="87" y="26" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#22C55E">6,192 Lines UI Code</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="175" height="40" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="87" y="26" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#22C55E">Hierarchical Nav</text>
                </g>

                <g transform="translate(600, 30)">
                    <rect width="175" height="40" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="87" y="26" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#22C55E">Progress Tracking</text>
                </g>
            </g>

            {/* Footer note */}
            <text x="850" y="720" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#555">Full CFA curriculum • 27+ study topics</text>

        </svg>
    );
};
