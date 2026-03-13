import React from 'react';

export const ThirdEye3DJourneyDiagram = () => {
    return (
        <svg width="900" height="700" viewBox="0 0 900 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="900" height="700" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Valuation - Blue */}
                <linearGradient id="grad-val" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-val" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* Technical - Purple */}
                <linearGradient id="grad-tech" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-tech" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Quant - Cyan */}
                <linearGradient id="grad-quant" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-quant" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Implementation - Green */}
                <linearGradient id="grad-impl" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-impl" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Arrow markers */}
                <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
                </marker>
                <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#A855F7" />
                </marker>
            </defs>

            {/* Title */}
            <text x="450" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">3D Financial Journey</text>
            <text x="450" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">60+ Nodes with Scroll-Driven Camera Movement</text>

            {/* ==================== SCROLL PROGRESS BAR ==================== */}
            <g transform="translate(50, 85)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#888" letterSpacing="1">SCROLL PROGRESS</text>

                <rect x="0" y="12" width="800" height="30" rx="15" fill="#111" stroke="#333" strokeWidth="1" />

                {/* Progress segments */}
                <rect x="4" y="16" width="260" height="22" rx="11" fill="url(#grad-val)" stroke="url(#stroke-val)" />
                <rect x="270" y="16" width="260" height="22" rx="11" fill="url(#grad-tech)" stroke="url(#stroke-tech)" />
                <rect x="536" y="16" width="260" height="22" rx="11" fill="url(#grad-quant)" stroke="url(#stroke-quant)" />

                <text x="134" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">0% - 33%</text>
                <text x="400" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">33% - 66%</text>
                <text x="666" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">66% - 100%</text>
            </g>

            {/* ==================== THREE DISCIPLINE BOXES ==================== */}

            {/* Valuation */}
            <g transform="translate(50, 160)">
                <rect width="250" height="200" rx="12" fill="url(#grad-val)" stroke="url(#stroke-val)" strokeWidth="1" />
                <text x="125" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#3B82F6">VALUATION</text>
                <text x="125" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888">20 Concept Nodes</text>

                <line x1="30" y1="70" x2="220" y2="70" stroke="#3B82F6" strokeOpacity="0.2" />

                <g transform="translate(30, 85)" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">
                    <text x="0" y="0">• DCF Analysis</text>
                    <text x="0" y="22">• Comparable Multiples</text>
                    <text x="0" y="44">• NAV Calculation</text>
                    <text x="0" y="66">• Gordon Growth Model</text>
                    <text x="0" y="88">• Enterprise Value</text>
                    <text x="0" y="110">• WACC Estimation</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 300 260 L 325 260" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow-blue)" />

            {/* Technical */}
            <g transform="translate(325, 160)">
                <rect width="250" height="200" rx="12" fill="url(#grad-tech)" stroke="url(#stroke-tech)" strokeWidth="1" />
                <text x="125" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#A855F7">TECHNICAL</text>
                <text x="125" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888">20 Concept Nodes</text>

                <line x1="30" y1="70" x2="220" y2="70" stroke="#A855F7" strokeOpacity="0.2" />

                <g transform="translate(30, 85)" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">
                    <text x="0" y="0">• RSI (Relative Strength)</text>
                    <text x="0" y="22">• MACD Divergence</text>
                    <text x="0" y="44">• Bollinger Bands</text>
                    <text x="0" y="66">• Moving Averages</text>
                    <text x="0" y="88">• Fibonacci Retracement</text>
                    <text x="0" y="110">• Volume Analysis</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 575 260 L 600 260" stroke="#A855F7" strokeWidth="2" markerEnd="url(#arrow-purple)" />

            {/* Quant */}
            <g transform="translate(600, 160)">
                <rect width="250" height="200" rx="12" fill="url(#grad-quant)" stroke="url(#stroke-quant)" strokeWidth="1" />
                <text x="125" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#06B6D4">QUANTITATIVE</text>
                <text x="125" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888">20 Concept Nodes</text>

                <line x1="30" y1="70" x2="220" y2="70" stroke="#06B6D4" strokeOpacity="0.2" />

                <g transform="translate(30, 85)" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">
                    <text x="0" y="0">• Linear Regression</text>
                    <text x="0" y="22">• Value at Risk (VaR)</text>
                    <text x="0" y="44">• Monte Carlo Simulation</text>
                    <text x="0" y="66">• Factor Models</text>
                    <text x="0" y="88">• Covariance Matrix</text>
                    <text x="0" y="110">• Portfolio Optimization</text>
                </g>
            </g>

            {/* ==================== IMPLEMENTATION LAYER ==================== */}
            <g transform="translate(50, 400)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">IMPLEMENTATION</text>

                <rect x="0" y="15" width="800" height="130" rx="8" fill="url(#grad-impl)" stroke="url(#stroke-impl)" strokeWidth="1" />

                {/* Three implementation details */}
                <g transform="translate(20, 35)">
                    <rect width="240" height="85" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="120" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#22C55E">InstancedMesh</text>
                    <text x="120" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">GPU-efficient rendering</text>
                    <text x="120" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">60+ objects, single draw call</text>
                    <text x="120" y="77" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Three.InstancedMesh</text>
                </g>

                <g transform="translate(280, 35)">
                    <rect width="240" height="85" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="120" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#22C55E">Exponential Fog</text>
                    <text x="120" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">Depth perception effect</text>
                    <text x="120" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">fog.near/far tied to scroll %</text>
                    <text x="120" y="77" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">Reveals nodes progressively</text>
                </g>

                <g transform="translate(540, 35)">
                    <rect width="240" height="85" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="120" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#22C55E">GSAP ScrollTrigger</text>
                    <text x="120" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff">Smooth camera animation</text>
                    <text x="120" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Lerp interpolation to scroll</text>
                    <text x="120" y="77" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">60fps consistent updates</text>
                </g>
            </g>

            {/* ==================== TECH STACK FOOTER ==================== */}
            <g transform="translate(50, 565)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">TECHNOLOGY</text>

                <g transform="translate(0, 15)">
                    <rect width="90" height="26" rx="13" fill="#000" stroke="#3B82F6" strokeOpacity="0.5" />
                    <text x="45" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">Three.js</text>
                </g>
                <g transform="translate(100, 15)">
                    <rect width="130" height="26" rx="13" fill="#000" stroke="#3B82F6" strokeOpacity="0.5" />
                    <text x="65" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">React Three Fiber</text>
                </g>
                <g transform="translate(240, 15)">
                    <rect width="60" height="26" rx="13" fill="#000" stroke="#22C55E" strokeOpacity="0.5" />
                    <text x="30" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">GSAP</text>
                </g>
                <g transform="translate(310, 15)">
                    <rect width="80" height="26" rx="13" fill="#000" stroke="#A855F7" strokeOpacity="0.5" />
                    <text x="40" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">Anime.js</text>
                </g>
                <g transform="translate(400, 15)">
                    <rect width="100" height="26" rx="13" fill="#000" stroke="#06B6D4" strokeOpacity="0.5" />
                    <text x="50" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#06B6D4">TypeScript</text>
                </g>
            </g>

            {/* Inspiration note */}
            <text x="850" y="650" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#555">Inspired by mont-fort.com</text>

        </svg>
    );
};
