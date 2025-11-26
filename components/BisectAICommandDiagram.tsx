import React from 'react';

export const BisectAICommandDiagram = () => {
    return (
        <svg width="1600" height="1400" viewBox="0 0 1600 1400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1600" height="1400" fill="#030303" />

            {/* Gradients */}
            <defs>
                <linearGradient id="grad-input" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
                </linearGradient>

                <linearGradient id="grad-context" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.15)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-context" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.6)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-rag" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-rag" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-router" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(236, 72, 153, 0.15)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-router" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
                </linearGradient>

                <linearGradient id="grad-debate" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
                    <stop offset="100%" stopColor="rgba(24, 144, 255, 0.15)" />
                </linearGradient>
                <linearGradient id="stroke-debate" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(24, 144, 255, 0.6)" />
                </linearGradient>

                <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#666" />
                </marker>
                <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
                </marker>
                <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                </marker>
                <marker id="arrow-pink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ec4899" />
                </marker>
                <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
                </marker>
            </defs>

            {/* Title */}
            <text x="800" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="bold" fill="white">Agentic System Architecture</text>
            <text x="800" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fill="#888">Context Mapping, RAG, and Multi-Model Debate</text>

            {/* ==================== LEFT COLUMN: CONTEXT MAPPING ==================== */}
            <g transform="translate(50, 200)">
                <text x="0" y="-15" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#f59e0b">CONTEXT MAPPING</text>
                <rect width="350" height="400" rx="12" fill="url(#grad-context)" stroke="url(#stroke-context)" strokeWidth="1" strokeDasharray="5,5" />

                {/* Scene Graph */}
                <g transform="translate(25, 40)">
                    <rect width="300" height="100" rx="6" fill="#000" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#f59e0b">Scene Graph Builder</text>
                    <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Analyzes Spatial Relationships</text>
                    <text x="150" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888" fontStyle="italic">"Lamp ON_TOP_OF Table"</text>
                </g>

                {/* Visual Analysis */}
                <g transform="translate(25, 160)">
                    <rect width="300" height="100" rx="6" fill="#000" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#f59e0b">Visual Analysis Tools</text>
                    <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Mathematical Precision</text>
                    <text x="150" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888" fontStyle="italic">Color: #FF0000, UV Scale: 2.5</text>
                </g>

                {/* Spatial Awareness */}
                <g transform="translate(25, 280)">
                    <rect width="300" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#f59e0b">Spatial Awareness</text>
                    <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Bounds, Pivot Points, Hierarchy</text>
                </g>
            </g>

            {/* ==================== RIGHT COLUMN: KNOWLEDGE SYSTEM ==================== */}
            <g transform="translate(1200, 200)">
                <text x="0" y="-15" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#10b981">KNOWLEDGE SYSTEM (RAG)</text>
                <rect width="350" height="400" rx="12" fill="url(#grad-rag)" stroke="url(#stroke-rag)" strokeWidth="1" strokeDasharray="5,5" />

                {/* Vector DB */}
                <g transform="translate(25, 40)">
                    <rect width="300" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#10b981">Vector Database</text>
                    <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">ChromaDB / Embeddings</text>
                </g>

                {/* Material Knowledge */}
                <g transform="translate(25, 140)">
                    <rect width="300" height="120" rx="6" fill="#000" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#10b981">Material Knowledge Base</text>
                    <text x="25" y="65" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">• PBR Recipes (Gold, Wood)</text>
                    <text x="25" y="85" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">• Texture Map Rules</text>
                    <text x="25" y="105" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">• Material Physics</text>
                </g>

                {/* History */}
                <g transform="translate(25, 280)">
                    <rect width="300" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#10b981">Interaction History</text>
                    <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Past Edits & Outcomes</text>
                </g>
            </g>

            {/* ==================== CENTER COLUMN: EXECUTION FLOW ==================== */}

            {/* 1. User Input */}
            <g transform="translate(650, 150)">
                <rect width="300" height="70" rx="35" fill="url(#grad-input)" stroke="#333" strokeWidth="1" />
                <text x="150" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fill="white" fontStyle="italic">"Design a sci-fi city"</text>
            </g>

            <path d="M 800 220 L 800 280" stroke="#666" strokeWidth="2" markerEnd="url(#arrow-gray)" />

            {/* 2. Router */}
            <g transform="translate(600, 280)">
                <rect width="400" height="100" rx="12" fill="url(#grad-router)" stroke="url(#stroke-router)" strokeWidth="1" />
                <text x="200" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#ec4899">Multi-Model Router</text>
                <text x="200" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#ec4899" opacity="0.8">Intent Classification</text>
            </g>

            <path d="M 800 380 L 800 450" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrow-pink)" />

            {/* 3. Debate System */}
            <g transform="translate(500, 450)">
                <text x="0" y="-15" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#8b5cf6">AGENT DEBATE PROTOCOL</text>
                <rect width="600" height="400" rx="12" fill="url(#grad-debate)" stroke="url(#stroke-debate)" strokeWidth="1" />

                {/* Gemini */}
                <g transform="translate(40, 60)">
                    <rect width="240" height="140" rx="8" fill="#1890ff" fillOpacity="0.1" stroke="#1890ff" strokeWidth="1" />
                    <text x="120" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="bold" fill="#1890ff">Gemini 3.0</text>
                    <text x="120" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#1890ff">"The Visionary"</text>
                    <line x1="20" y1="80" x2="220" y2="80" stroke="#1890ff" strokeOpacity="0.3" />
                    <text x="120" y="105" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Synthesizes Scene Graph</text>
                    <text x="120" y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">& Visual Analysis</text>
                </g>

                {/* Claude */}
                <g transform="translate(320, 60)">
                    <rect width="240" height="140" rx="8" fill="#fa8c16" fillOpacity="0.1" stroke="#fa8c16" strokeWidth="1" />
                    <text x="120" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="bold" fill="#fa8c16">Claude 4.5</text>
                    <text x="120" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#fa8c16">"The Architect"</text>
                    <line x1="20" y1="80" x2="220" y2="80" stroke="#fa8c16" strokeOpacity="0.3" />
                    <text x="120" y="105" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Applies RAG Knowledge</text>
                    <text x="120" y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">to Technical Plan</text>
                </g>

                {/* Debate Loop Arrows */}
                <path d="M 280 130 L 320 130" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow-gray)" />
                <text x="300" y="120" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">Debate</text>

                {/* Consensus */}
                <g transform="translate(150, 260)">
                    <rect width="300" height="80" rx="8" fill="#000" fillOpacity="0.4" stroke="#8b5cf6" strokeWidth="1" />
                    <text x="150" y="35" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#8b5cf6">Consensus Engine</text>
                    <text x="150" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#ccc">Finalizes JSON Plan</text>
                </g>
            </g>

            <path d="M 800 850 L 800 920" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow-purple)" />

            {/* 4. Execution */}
            <g transform="translate(550, 920)">
                <text x="0" y="-10" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#10b981">EXECUTION ENGINE</text>
                <rect width="500" height="220" rx="12" fill="url(#grad-rag)" stroke="url(#stroke-rag)" strokeWidth="1" />
                <text x="250" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#10b981">Material Agent (GPT-4o)</text>

                {/* Split Execution */}
                <g transform="translate(30, 70)">
                    {/* Spline API */}
                    <rect width="200" height="120" rx="8" fill="#000" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
                    <text x="100" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#10b981">Spline Runtime API</text>
                    <text x="100" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">Event-Based Updates</text>
                    <text x="100" y="75" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">Property Mutation</text>
                </g>

                <g transform="translate(270, 70)">
                    {/* GLB Processing */}
                    <rect width="200" height="120" rx="8" fill="#000" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
                    <text x="100" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#10b981">GLB/glTF Processor</text>
                    <text x="100" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">Direct Binary Editing</text>
                    <text x="100" y="75" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">Limitless Geometry</text>
                    <text x="100" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#ccc">Universal Format</text>
                </g>
            </g>

            <path d="M 800 1140 L 800 1220" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />

            {/* 5. Scene */}
            <g transform="translate(650, 1220)">
                <rect width="300" height="100" rx="8" fill="#000" stroke="#333" strokeWidth="1" />
                <text x="150" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="white">Updated 3D Scene</text>
            </g>

            {/* ==================== CONNECTIONS ==================== */}

            {/* Context -> Gemini */}
            <path d="M 400 300 C 500 300, 500 550, 540 550" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrow-orange)" />
            <text x="470" y="420" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#f59e0b" transform="rotate(45 470,420)">Scene Data</text>

            {/* RAG -> Claude */}
            <path d="M 1200 300 C 1100 300, 1100 550, 1060 550" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow-green)" />
            <text x="1130" y="420" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#10b981" transform="rotate(-45 1130,420)">Knowledge</text>

            {/* Context -> Router */}
            <path d="M 400 250 C 450 250, 550 330, 600 330" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrow-orange)" />

            {/* Context -> Execution (GPT-4o) */}
            <path d="M 400 500 C 450 500, 450 1000, 550 1000" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#arrow-orange)" />
            <text x="480" y="900" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#f59e0b" transform="rotate(0 480,900)">Condensed Context (Vision)</text>

        </svg>
    );
};
