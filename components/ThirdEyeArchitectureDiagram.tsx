import React from 'react';

export const ThirdEyeArchitectureDiagram = () => {
    return (
        <svg width="700" height="950" viewBox="0 0 700 950" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="950" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Client - Orange */}
                <linearGradient id="grad-te-client" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-te-client" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Visualization - Blue */}
                <linearGradient id="grad-te-viz" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-te-viz" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* Metrics - Cyan */}
                <linearGradient id="grad-te-metrics" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-te-metrics" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Backend - Green */}
                <linearGradient id="grad-te-backend" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-te-backend" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Arrow marker */}
                <marker id="arrow-te" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
                </marker>
            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Third Eye Capital Architecture</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Newsletter Platform + Financial Visualization</text>

            {/* Tech badges */}
            <g transform="translate(170, 75)">
                <rect width="70" height="20" rx="10" fill="#000" stroke="#F97316" strokeOpacity="0.5" />
                <text x="35" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">Next.js</text>
            </g>
            <g transform="translate(250, 75)">
                <rect width="65" height="20" rx="10" fill="#000" stroke="#3B82F6" strokeOpacity="0.5" />
                <text x="32" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#3B82F6">Three.js</text>
            </g>
            <g transform="translate(325, 75)">
                <rect width="55" height="20" rx="10" fill="#000" stroke="#22C55E" strokeOpacity="0.5" />
                <text x="27" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#22C55E">GSAP</text>
            </g>
            <g transform="translate(390, 75)">
                <rect width="70" height="20" rx="10" fill="#000" stroke="#06B6D4" strokeOpacity="0.5" />
                <text x="35" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">Recharts</text>
            </g>

            {/* ==================== LAYER 1: CLIENT ==================== */}
            <g transform="translate(50, 110)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">CLIENT LAYER</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-te-client)" stroke="url(#stroke-te-client)" strokeWidth="1" />

                {/* Four client modules */}
                <g transform="translate(15, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="67" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Newsletter</text>
                    <text x="67" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Landing page</text>
                    <text x="67" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Subscription flow</text>
                    <text x="67" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">/</text>
                </g>

                <g transform="translate(160, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="67" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">3D Journey</text>
                    <text x="67" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">60+ nodes</text>
                    <text x="67" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Scroll experience</text>
                    <text x="67" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">/explore</text>
                </g>

                <g transform="translate(305, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="67" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">CFA Platform</text>
                    <text x="67" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Study materials</text>
                    <text x="67" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Practice exams</text>
                    <text x="67" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">/study</text>
                </g>

                <g transform="translate(450, 30)">
                    <rect width="135" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="67" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Analytics</text>
                    <text x="67" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Portfolio metrics</text>
                    <text x="67" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Forecasting tools</text>
                    <text x="67" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">/tools</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 250 L 350 270" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-te)" />

            {/* ==================== LAYER 2: VISUALIZATION ==================== */}
            <g transform="translate(50, 285)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#3B82F6" letterSpacing="1">VISUALIZATION LAYER</text>

                <rect x="0" y="15" width="600" height="140" rx="8" fill="url(#grad-te-viz)" stroke="url(#stroke-te-viz)" strokeWidth="1" />

                {/* Two visualization systems */}
                <g transform="translate(20, 30)">
                    <rect width="270" height="90" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="135" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#3B82F6">Three.js + React Three Fiber</text>
                    <text x="135" y="48" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">60+ Financial Concept Nodes</text>
                    <text x="135" y="65" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">InstancedMesh for GPU efficiency</text>
                    <text x="135" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">GSAP scroll-driven camera</text>
                </g>

                <g transform="translate(310, 30)">
                    <rect width="270" height="90" rx="6" fill="#000" fillOpacity="0.4" stroke="#3B82F6" strokeOpacity="0.3" />
                    <text x="135" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#3B82F6">Recharts Analytics</text>
                    <text x="135" y="48" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">Performance Charts</text>
                    <text x="135" y="65" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Monte Carlo forecasts</text>
                    <text x="135" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Portfolio simulations</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 445 L 350 465" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-te)" />

            {/* ==================== LAYER 3: METRICS ENGINE ==================== */}
            <g transform="translate(50, 480)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">METRICS ENGINE</text>

                <rect x="0" y="15" width="600" height="160" rx="8" fill="url(#grad-te-metrics)" stroke="url(#stroke-te-metrics)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">14 Financial Metrics from Real Trade Data</text>

                {/* Metric pills - Row 1 */}
                <g transform="translate(30, 60)">
                    <rect width="80" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="40" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Sharpe</text>
                </g>
                <g transform="translate(120, 60)">
                    <rect width="80" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="40" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Sortino</text>
                </g>
                <g transform="translate(210, 60)">
                    <rect width="80" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="40" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Calmar</text>
                </g>
                <g transform="translate(300, 60)">
                    <rect width="80" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="40" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Alpha</text>
                </g>
                <g transform="translate(390, 60)">
                    <rect width="80" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="40" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Beta</text>
                </g>
                <g transform="translate(480, 60)">
                    <rect width="90" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="45" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">VaR (95%)</text>
                </g>

                {/* Metric pills - Row 2 */}
                <g transform="translate(70, 95)">
                    <rect width="110" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="55" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Max Drawdown</text>
                </g>
                <g transform="translate(195, 95)">
                    <rect width="90" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="45" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Win Rate</text>
                </g>
                <g transform="translate(300, 95)">
                    <rect width="90" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="45" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">Profit Factor</text>
                </g>
                <g transform="translate(405, 95)">
                    <rect width="110" height="26" rx="4" fill="#000" fillOpacity="0.5" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="55" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">R-Squared</text>
                </g>

                {/* Bottom description */}
                <text x="300" y="145" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Real-time calculations from trade history • Configurable time periods</text>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 660 L 350 680" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-te)" />

            {/* ==================== LAYER 4: BACKEND ==================== */}
            <g transform="translate(50, 695)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">BACKEND SERVICES</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-te-backend)" stroke="url(#stroke-te-backend)" strokeWidth="1" />

                {/* Two backend services */}
                <g transform="translate(30, 30)">
                    <rect width="260" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="130" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#22C55E">Appwrite</text>
                    <text x="130" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">Trade Storage & History</text>
                    <text x="130" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">User accounts & auth</text>
                    <text x="130" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Batch operations • Pending states</text>
                </g>

                <g transform="translate(310, 30)">
                    <rect width="260" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="130" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#22C55E">GoHighLevel CRM</text>
                    <text x="130" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">Subscriber Management</text>
                    <text x="130" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Email sequences & tiers</text>
                    <text x="130" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Basic • Premium • Professional</text>
                </g>
            </g>

            {/* Footer stats */}
            <g transform="translate(50, 840)">
                <rect width="180" height="28" rx="14" fill="#000" stroke="#666" strokeOpacity="0.3" />
                <text x="90" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">3 Subscriber Tiers</text>
            </g>
            <g transform="translate(260, 840)">
                <rect width="180" height="28" rx="14" fill="#000" stroke="#666" strokeOpacity="0.3" />
                <text x="90" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">6K+ Lines CFA UI</text>
            </g>
            <g transform="translate(470, 840)">
                <rect width="180" height="28" rx="14" fill="#000" stroke="#666" strokeOpacity="0.3" />
                <text x="90" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Monte Carlo Engine</text>
            </g>

        </svg>
    );
};
