import React from 'react';

export const HelmetEditorDiagram = () => {
    return (
        <svg width="700" height="1050" viewBox="0 0 700 1050" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="700" height="1050" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Input - Gray */}
                <linearGradient id="grad-input" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(156, 163, 175, 0.15)" />
                    <stop offset="100%" stopColor="rgba(156, 163, 175, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-input" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(156, 163, 175, 0.6)" />
                    <stop offset="100%" stopColor="rgba(156, 163, 175, 0.2)" />
                </linearGradient>

                {/* Store - Purple */}
                <linearGradient id="grad-store" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-store" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Zones - Orange */}
                <linearGradient id="grad-zones" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-zones" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Materials - Cyan */}
                <linearGradient id="grad-mat" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-mat" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* R3F - Blue */}
                <linearGradient id="grad-r3f-new" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-r3f-new" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                {/* Output - Green */}
                <linearGradient id="grad-output" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-output" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                </linearGradient>

                {/* Arrow marker - filled triangle pointing down */}
                <marker id="arrow-down-helmet" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
                </marker>
            </defs>

            {/* Title */}
            <text x="350" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Helmet Editor Architecture</text>
            <text x="350" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">React Three Fiber + Zone-Based Customization</text>

            {/* ==================== LAYER 1: USER INPUT ==================== */}
            <g transform="translate(50, 90)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#9CA3AF" letterSpacing="1">USER INPUT</text>

                <rect x="0" y="15" width="600" height="90" rx="8" fill="url(#grad-input)" stroke="url(#stroke-input)" strokeWidth="1" />

                {/* Three input types */}
                <g transform="translate(20, 30)">
                    <rect width="170" height="60" rx="6" fill="#000" fillOpacity="0.4" stroke="#9CA3AF" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Color Picker</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Zone selection</text>
                </g>

                <g transform="translate(215, 30)">
                    <rect width="170" height="60" rx="6" fill="#000" fillOpacity="0.4" stroke="#9CA3AF" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Material Select</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Finish type</text>
                </g>

                <g transform="translate(410, 30)">
                    <rect width="170" height="60" rx="6" fill="#000" fillOpacity="0.4" stroke="#9CA3AF" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Stripe Pattern</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Bezier curves</text>
                </g>
            </g>

            {/* Arrow 1 */}
            <path d="M 350 200 L 350 220" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-helmet)" />

            {/* ==================== LAYER 2: ZUSTAND STORE ==================== */}
            <g transform="translate(50, 235)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">ZUSTAND STORE</text>

                <rect x="0" y="15" width="600" height="100" rx="8" fill="url(#grad-store)" stroke="url(#stroke-store)" strokeWidth="1" />

                <text x="300" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Helmet Configuration</text>

                {/* Config items */}
                <g transform="translate(40, 55)">
                    <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">shellColor</text>
                    <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">facemaskColor</text>
                </g>
                <g transform="translate(180, 55)">
                    <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">chinstrapColor</text>
                    <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">paddingColor</text>
                </g>
                <g transform="translate(340, 55)">
                    <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">stripeColor</text>
                    <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#A855F7">materialFinish</text>
                </g>
                <g transform="translate(480, 55)">
                    <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">4 finish types</text>
                    <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">5 color zones</text>
                </g>
            </g>

            {/* Arrow 2 */}
            <path d="M 350 355 L 350 375" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-helmet)" />

            {/* ==================== LAYER 3: 5-ZONE SYSTEM ==================== */}
            <g transform="translate(50, 390)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F97316" letterSpacing="1">5-ZONE SYSTEM</text>

                <rect x="0" y="15" width="600" height="120" rx="8" fill="url(#grad-zones)" stroke="url(#stroke-zones)" strokeWidth="1" />

                {/* Zone row 1 - 3 zones */}
                <g transform="translate(20, 30)">
                    <rect width="110" height="50" rx="6" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeOpacity="0.4" />
                    <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Shell</text>
                    <text x="55" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Main body</text>
                </g>
                <g transform="translate(145, 30)">
                    <rect width="110" height="50" rx="6" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeOpacity="0.4" />
                    <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Facemask</text>
                    <text x="55" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Grill</text>
                </g>
                <g transform="translate(270, 30)">
                    <rect width="110" height="50" rx="6" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeOpacity="0.4" />
                    <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Chinstrap</text>
                    <text x="55" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Strap</text>
                </g>

                {/* Zone row 2 - 2 zones */}
                <g transform="translate(145, 88)">
                    <rect width="110" height="50" rx="6" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeOpacity="0.4" />
                    <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Padding</text>
                    <text x="55" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Inner</text>
                </g>
                <g transform="translate(270, 88)">
                    <rect width="110" height="50" rx="6" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeOpacity="0.4" />
                    <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Stripe</text>
                    <text x="55" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Decal</text>
                </g>

                {/* Feature on right */}
                <g transform="translate(410, 45)">
                    <rect width="170" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#F97316" strokeOpacity="0.3" />
                    <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Per-Zone Colors</text>
                    <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Independent control</text>
                    <text x="85" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Team branding ready</text>
                </g>
            </g>

            {/* Arrow 3 */}
            <path d="M 350 530 L 350 550" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-helmet)" />

            {/* ==================== LAYER 4: MATERIAL FINISHES ==================== */}
            <g transform="translate(50, 565)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">MATERIAL FINISHES</text>

                <rect x="0" y="15" width="600" height="85" rx="8" fill="url(#grad-mat)" stroke="url(#stroke-mat)" strokeWidth="1" />

                {/* Four finish types */}
                <g transform="translate(20, 30)">
                    <rect width="130" height="55" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="65" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Glossy</text>
                    <text x="65" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">clearcoat: 1</text>
                </g>
                <g transform="translate(165, 30)">
                    <rect width="130" height="55" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="65" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Matte</text>
                    <text x="65" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">roughness: 0.9</text>
                </g>
                <g transform="translate(310, 30)">
                    <rect width="130" height="55" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="65" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Chrome</text>
                    <text x="65" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">metalness: 1</text>
                </g>
                <g transform="translate(455, 30)">
                    <rect width="130" height="55" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="65" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#fff">Brushed</text>
                    <text x="65" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">anisotropy: 1</text>
                </g>
            </g>

            {/* Arrow 4 */}
            <path d="M 350 670 L 350 690" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-helmet)" />

            {/* ==================== LAYER 5: REACT THREE FIBER ==================== */}
            <g transform="translate(50, 705)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#3B82F6" letterSpacing="1">REACT THREE FIBER</text>

                <rect x="0" y="15" width="600" height="110" rx="8" fill="url(#grad-r3f-new)" stroke="url(#stroke-r3f-new)" strokeWidth="1" />

                <text x="300" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">MeshPhysicalMaterial</text>

                {/* Properties */}
                <g transform="translate(100, 55)">
                    <rect width="130" height="50" rx="4" fill="#000" fillOpacity="0.3" stroke="#3B82F6" strokeOpacity="0.2" />
                    <text x="65" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">clearcoat</text>
                    <text x="65" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">metalness</text>
                </g>
                <g transform="translate(250, 55)">
                    <rect width="130" height="50" rx="4" fill="#000" fillOpacity="0.3" stroke="#3B82F6" strokeOpacity="0.2" />
                    <text x="65" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">roughness</text>
                    <text x="65" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">sheen</text>
                </g>
                <g transform="translate(400, 55)">
                    <rect width="130" height="50" rx="4" fill="#000" fillOpacity="0.3" stroke="#22C55E" strokeOpacity="0.3" />
                    <text x="65" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">60fps preview</text>
                    <text x="65" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#22C55E">Real-time</text>
                </g>
            </g>

            {/* Arrow 5 */}
            <path d="M 350 835 L 350 855" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow-down-helmet)" />

            {/* ==================== LAYER 6: OUTPUT ==================== */}
            <g transform="translate(50, 870)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">OUTPUT</text>

                <rect x="0" y="15" width="600" height="70" rx="8" fill="url(#grad-output)" stroke="url(#stroke-output)" strokeWidth="1" />

                <text x="300" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">GLB Export → Vercel CDN</text>
                <text x="300" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Blender-generated base model  |  Web-optimized</text>
            </g>

        </svg>
    );
};
