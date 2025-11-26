import React from 'react';

export const BisectArchitectureDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-vector" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-vector" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-texture" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-texture" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-bridge" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.15)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-bridge" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.6)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-infra" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
                </linearGradient>
                <linearGradient id="stroke-infra" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
                </linearGradient>

                {/* Markers */}
                <marker id="arrow-vector" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#10B981" />
                </marker>
                <marker id="arrow-texture" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#8B5CF6" />
                </marker>
                <marker id="arrow-bridge" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#F59E0B" />
                </marker>
                <marker id="arrow-3d" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
                </marker>
                <marker id="arrow-white" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#aaa" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">Bisect Creative Pipeline</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">Unified Asset Generation & Assembly Flow</text>

            {/* ==================== LEFT COLUMN: CREATION ==================== */}
            <text x="50" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">CREATION</text>

            {/* Vector Studio */}
            <g transform="translate(50, 180)">
                <rect width="300" height="180" rx="12" fill="url(#grad-vector)" stroke="url(#stroke-vector)" strokeWidth="1" />
                <text x="20" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" fill="#10B981">Vector Studio</text>
                <text x="20" y="55" fontFamily="Inter, sans-serif" fontSize="12" fill="#10B981" opacity="0.8">SVG & Shape Generation</text>

                <line x1="20" y1="70" x2="280" y2="70" stroke="#10B981" strokeOpacity="0.2" />

                <g transform="translate(20, 95)" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">
                    <text x="0" y="0">• 15+ Drawing Tools</text>
                    <text x="0" y="25">• AI Vectorization</text>
                    <text x="0" y="50">• React/JSX Export</text>
                </g>
            </g>

            {/* Texture Studio */}
            <g transform="translate(50, 400)">
                <rect width="300" height="180" rx="12" fill="url(#grad-texture)" stroke="url(#stroke-texture)" strokeWidth="1" />
                <text x="20" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" fill="#8B5CF6">Texture Studio</text>
                <text x="20" y="55" fontFamily="Inter, sans-serif" fontSize="12" fill="#8B5CF6" opacity="0.8">Material Generation</text>

                <line x1="20" y1="70" x2="280" y2="70" stroke="#8B5CF6" strokeOpacity="0.2" />

                <g transform="translate(20, 95)" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">
                    <text x="0" y="0">• AI MatCap Gen</text>
                    <text x="0" y="25">• PBR Maps (Normal/Rough)</text>
                    <text x="0" y="50">• 4K Upscaling</text>
                </g>
            </g>

            {/* ==================== CENTER COLUMN: TRANSFORMATION ==================== */}
            <text x="450" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">TRANSFORMATION</text>

            {/* Bridge */}
            <g transform="translate(450, 250)">
                <rect width="260" height="260" rx="130" fill="url(#grad-bridge)" stroke="url(#stroke-bridge)" strokeWidth="1" />
                <text x="130" y="110" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#F59E0B">BRIDGE</text>
                <text x="130" y="135" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#F59E0B" opacity="0.9">Format Conversion</text>
                <text x="130" y="155" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ddd">SVG → Mesh</text>
                <text x="130" y="170" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ddd">Image → PBR Material</text>
            </g>

            {/* AI Orchestrator (Floating above) */}
            <g transform="translate(450, 60)">
                <rect width="260" height="100" rx="8" fill="url(#grad-infra)" stroke="url(#stroke-infra)" strokeWidth="1" strokeDasharray="4,4" />
                <text x="130" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="white">AI Orchestrator</text>
                <text x="130" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Multi-Agent Routing</text>
                <text x="130" y="75" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">Gemini • GPT-4o • Claude</text>
            </g>

            {/* Unified Store (Floating below) */}
            <g transform="translate(450, 600)">
                <rect width="260" height="100" rx="8" fill="url(#grad-infra)" stroke="url(#stroke-infra)" strokeWidth="1" />
                <text x="130" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="white">Unified Store</text>
                <text x="130" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Zustand + IndexedDB</text>
                <text x="130" y="75" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">State Persistence</text>
            </g>

            {/* ==================== RIGHT COLUMN: ASSEMBLY ==================== */}
            <text x="850" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">ASSEMBLY</text>

            {/* 3D Studio */}
            <g transform="translate(850, 180)">
                <rect width="450" height="400" rx="12" fill="url(#grad-3d)" stroke="url(#stroke-3d)" strokeWidth="1" />

                {/* Header */}
                <text x="30" y="40" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#3B82F6">3D Studio</text>
                <text x="30" y="65" fontFamily="Inter, sans-serif" fontSize="14" fill="#3B82F6" opacity="0.8">Scene Assembly & Composition</text>

                {/* Inner Canvas Representation */}
                <rect x="30" y="90" width="390" height="200" rx="8" fill="#000" fillOpacity="0.3" stroke="#3B82F6" strokeOpacity="0.3" />
                <text x="225" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="#555">R3F Canvas / Spline Runtime</text>

                {/* Features */}
                <g transform="translate(30, 320)" fontFamily="Inter, sans-serif" fontSize="13" fill="#ccc">
                    <text x="0" y="0">• Universal Format Support (GLTF/OBJ)</text>
                    <text x="0" y="25">• Natural Language Scene Commands</text>
                    <text x="0" y="50">• 600+ Material Library</text>
                    <text x="220" y="0">• Scene Hierarchy</text>
                    <text x="220" y="25">• Transform Controls</text>
                    <text x="220" y="50">• Export to Web/React</text>
                </g>
            </g>

            {/* ==================== CONNECTIONS ==================== */}

            {/* Vector -> Bridge */}
            <path d="M 350 270 L 450 330" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-vector)" />
            <rect x="360" y="275" width="80" height="20" rx="4" fill="#000" stroke="#10B981" strokeWidth="1" />
            <text x="400" y="289" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#10B981">SVG Data</text>

            {/* Texture -> Bridge */}
            <path d="M 350 490 L 450 430" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrow-texture)" />
            <rect x="360" y="465" width="80" height="20" rx="4" fill="#000" stroke="#8B5CF6" strokeWidth="1" />
            <text x="400" y="479" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#8B5CF6">Texture Maps</text>

            {/* Bridge -> 3D Studio */}
            <path d="M 710 380 L 850 380" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrow-bridge)" />
            <rect x="740" y="365" width="80" height="24" rx="4" fill="#000" stroke="#F59E0B" strokeWidth="1" />
            <text x="780" y="381" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#F59E0B">ASSETS</text>

            {/* Orchestrator -> 3D Studio */}
            <path d="M 710 110 L 850 180" stroke="#fff" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrow-white)" />
            <text x="780" y="135" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#aaa" transform="rotate(15 780 135)">AI Commands</text>

            {/* 3D Studio -> Store */}
            <path d="M 1075 580 L 1075 650 L 710 650" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow-3d)" />
            <rect x="850" y="635" width="100" height="20" rx="4" fill="#000" stroke="#3B82F6" strokeWidth="1" />
            <text x="900" y="649" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#3B82F6">Persist State</text>

            {/* ==================== FOOTER ==================== */}
            <line x1="50" y1="750" x2="1350" y2="750" stroke="#333" />

            <text x="50" y="780" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#666">CORE LIBRARY</text>
            <g transform="translate(50, 800)" fontFamily="Inter, sans-serif" fontSize="12" fill="#555">
                <text x="0" y="0">Scene Adapters</text>
                <text x="150" y="0">Geometry Utils</text>
                <text x="300" y="0">RAG Memory System</text>
                <text x="450" y="0">Asset Converters</text>
            </g>

            <text x="850" y="780" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#666">EXTERNAL SERVICES</text>
            <g transform="translate(850, 800)" fontFamily="Inter, sans-serif" fontSize="12" fill="#555">
                <text x="0" y="0">OpenAI API</text>
                <text x="150" y="0">Google Gemini API</text>
                <text x="300" y="0">Anthropic API</text>
            </g>
        </svg>
    );
};
