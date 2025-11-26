import React from 'react';

export const AgentDebateDiagram = () => {
    return (
        <svg width="1000" height="1200" viewBox="0 0 1000 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1000" height="1200" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-gemini" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(24, 144, 255, 0.15)" />
                    <stop offset="100%" stopColor="rgba(24, 144, 255, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-gemini" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(24, 144, 255, 0.6)" />
                    <stop offset="100%" stopColor="rgba(24, 144, 255, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-claude" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(250, 140, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(250, 140, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-claude" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(250, 140, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(250, 140, 22, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-exec" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(82, 196, 26, 0.15)" />
                    <stop offset="100%" stopColor="rgba(82, 196, 26, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-exec" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(82, 196, 26, 0.6)" />
                    <stop offset="100%" stopColor="rgba(82, 196, 26, 0.2)" />
                </linearGradient>

                <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#1890ff" />
                </marker>
                <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#fa8c16" />
                </marker>
                <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#52c41a" />
                </marker>
            </defs>

            {/* Title */}
            <text x="500" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">Agent Debate Architecture</text>
            <text x="500" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">Gemini 3.0 (Vision) vs Claude 4.5 (Architecture)</text>

            {/* ==================== 1. TRIGGER (Top) ==================== */}
            <g transform="translate(400, 150)">
                <rect width="200" height="60" rx="30" fill="#1f1f1f" stroke="#333" strokeWidth="1" />
                <text x="100" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#ccc">Complex User Request</text>
            </g>

            <path d="M 500 210 L 500 260" stroke="#666" strokeWidth="2" markerEnd="url(#arrow-blue)" />

            {/* ==================== 2. DEBATE ARENA (Center) ==================== */}
            <rect x="100" y="260" width="800" height="500" rx="20" fill="#0a0a0a" stroke="#333" strokeWidth="1" strokeDasharray="5,5" />
            <text x="500" y="290" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#666">DEBATE LOOP</text>

            {/* Gemini (Left) */}
            <g transform="translate(150, 350)">
                <rect width="300" height="200" rx="12" fill="url(#grad-gemini)" stroke="url(#stroke-gemini)" strokeWidth="1" />
                <text x="150" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#1890ff">Gemini 3.0</text>
                <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#1890ff" opacity="0.8">"The Visionary"</text>

                <g transform="translate(30, 90)" fontFamily="Inter, sans-serif" fontSize="13" fill="#ccc">
                    <text x="0" y="0">• Spatial Reasoning</text>
                    <text x="0" y="25">• Aesthetic Direction</text>
                    <text x="0" y="50">• Scene Composition</text>
                    <text x="0" y="75">• Multimodal Context</text>
                </g>
            </g>

            {/* Claude (Right) */}
            <g transform="translate(550, 350)">
                <rect width="300" height="200" rx="12" fill="url(#grad-claude)" stroke="url(#stroke-claude)" strokeWidth="1" />
                <text x="150" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#fa8c16">Claude 4.5</text>
                <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#fa8c16" opacity="0.8">"The Architect"</text>

                <g transform="translate(30, 90)" fontFamily="Inter, sans-serif" fontSize="13" fill="#ccc">
                    <text x="0" y="0">• Technical Planning</text>
                    <text x="0" y="25">• Code Generation</text>
                    <text x="0" y="50">• API Constraints</text>
                    <text x="0" y="75">• Execution Logic</text>
                </g>
            </g>

            {/* Arrows between Agents */}
            {/* Vision -> Blueprint */}
            <path d="M 450 400 L 550 400" stroke="#1890ff" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="500" y="390" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1890ff">1. Design Brief</text>

            {/* Blueprint -> Critique */}
            <path d="M 550 450 L 450 450" stroke="#fa8c16" strokeWidth="2" markerEnd="url(#arrow-orange)" />
            <text x="500" y="440" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#fa8c16">2. Technical Plan</text>

            {/* Critique -> Refinement */}
            <path d="M 450 500 L 550 500" stroke="#1890ff" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="500" y="490" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1890ff">3. Aesthetic Critique</text>

            {/* ==================== 3. HANDOVER (Bottom) ==================== */}
            <path d="M 700 550 L 700 800 L 600 800" stroke="#fa8c16" strokeWidth="2" fill="none" markerEnd="url(#arrow-orange)" />
            <text x="710" y="680" fontFamily="Inter, sans-serif" fontSize="11" fill="#fa8c16">4. Final JSON Plan</text>

            {/* ==================== 4. EXECUTION (Bottom Center) ==================== */}
            <g transform="translate(300, 800)">
                <rect width="400" height="150" rx="12" fill="url(#grad-exec)" stroke="url(#stroke-exec)" strokeWidth="1" />
                <text x="200" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="bold" fill="#52c41a">Execution Engine</text>
                <text x="200" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#52c41a" opacity="0.8">GPT-4o (Material Agent)</text>

                <rect x="50" y="80" width="300" height="40" rx="4" fill="#000" fillOpacity="0.3" />
                <text x="200" y="105" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#ccc">SplineAPI.setObjectProperty(...)</text>
            </g>

            {/* Connection to Scene */}
            <path d="M 500 950 L 500 1020" stroke="#52c41a" strokeWidth="2" markerEnd="url(#arrow-green)" />

            <g transform="translate(350, 1020)">
                <rect width="300" height="80" rx="8" fill="#000" stroke="#333" strokeWidth="1" />
                <text x="150" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="white">Updated 3D Scene</text>
            </g>

        </svg>
    );
};
