import React from 'react';

export const EzWorksArchitectureDiagram = () => {
    return (
        <svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background */}
            <rect width="1400" height="900" fill="#030303" />

            {/* Gradients */}
            <defs>
                {/* Client / Frontend - Purple */}
                <linearGradient id="grad-client" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-client" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>

                {/* Infrastructure / Backend - Pink */}
                <linearGradient id="grad-infra" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(236, 72, 153, 0.15)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-infra" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
                </linearGradient>

                {/* AI / GPU - Blue/Cyan */}
                <linearGradient id="grad-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                </linearGradient>

                {/* Queue / Redis - Red/Orange */}
                <linearGradient id="grad-queue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
                </linearGradient>
                <linearGradient id="stroke-queue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
                </linearGradient>

                {/* Markers */}
                <marker id="arrow-client" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#A855F7" />
                </marker>
                <marker id="arrow-infra" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#EC4899" />
                </marker>
                <marker id="arrow-ai" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#06B6D4" />
                </marker>
                <marker id="arrow-queue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#F97316" />
                </marker>
                <marker id="arrow-socket" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#fff" fillOpacity="0.5" />
                </marker>
            </defs>

            {/* Title */}
            <text x="50" y="60" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="bold" fill="white">EZ Works Architecture</text>
            <text x="50" y="90" fontFamily="Inter, sans-serif" fontSize="16" fill="#888">Scalable AI Image Generation Pipeline</text>

            {/* ==================== LEFT COLUMN: CLIENT ==================== */}
            <text x="50" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">CLIENT LAYER</text>

            {/* Next.js App */}
            <g transform="translate(50, 180)">
                <rect width="300" height="400" rx="12" fill="url(#grad-client)" stroke="url(#stroke-client)" strokeWidth="1" />
                <text x="20" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" fill="#A855F7">Next.js Application</text>
                <text x="20" y="55" fontFamily="Inter, sans-serif" fontSize="12" fill="#A855F7" opacity="0.8">React 19 • Server Components</text>

                <line x1="20" y1="70" x2="280" y2="70" stroke="#A855F7" strokeOpacity="0.2" />

                {/* UI Components */}
                <g transform="translate(20, 90)">
                    <rect width="260" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="15" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Workflow Builder</text>
                    <text x="15" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Node-based Interface</text>
                </g>

                <g transform="translate(20, 170)">
                    <rect width="260" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="15" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Real-time Preview</text>
                    <text x="15" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">WebSocket Listener</text>
                </g>

                <g transform="translate(20, 250)">
                    <rect width="260" height="60" rx="6" fill="#000" fillOpacity="0.3" stroke="#A855F7" strokeOpacity="0.3" />
                    <text x="15" y="25" fontFamily="Inter, sans-serif" fontSize="14" fill="#fff">Asset Gallery</text>
                    <text x="15" y="45" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">S3 Image Loader</text>
                </g>
            </g>

            {/* ==================== CENTER COLUMN: INFRASTRUCTURE ==================== */}
            <text x="450" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">INFRASTRUCTURE</text>

            {/* API Gateway */}
            <g transform="translate(450, 180)">
                <rect width="260" height="120" rx="8" fill="url(#grad-infra)" stroke="url(#stroke-infra)" strokeWidth="1" />
                <text x="130" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#EC4899">API Gateway</text>
                <text x="130" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#EC4899" opacity="0.8">Next.js API Routes</text>

                <g transform="translate(30, 70)" fontFamily="Inter, sans-serif" fontSize="11" fill="#ddd">
                    <text x="0" y="0">• Auth (Clerk)</text>
                    <text x="0" y="20">• Rate Limiting</text>
                    <text x="100" y="0">• Validation</text>
                    <text x="100" y="20">• Billing (Stripe)</text>
                </g>
            </g>

            {/* Redis Queue */}
            <g transform="translate(450, 350)">
                <rect width="260" height="100" rx="8" fill="url(#grad-queue)" stroke="url(#stroke-queue)" strokeWidth="1" />
                <text x="130" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#F97316">Job Queue</text>
                <text x="130" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#F97316" opacity="0.8">Redis / BullMQ</text>
                <text x="130" y="75" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#aaa">Priority Queuing • Job Deduplication</text>
            </g>

            {/* WebSocket Server */}
            <g transform="translate(450, 500)">
                <rect width="260" height="80" rx="8" fill="url(#grad-infra)" stroke="url(#stroke-infra)" strokeWidth="1" strokeDasharray="4,4" />
                <text x="130" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#fff">Socket Server</text>
                <text x="130" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#aaa">Real-time Status Updates</text>
            </g>

            {/* ==================== RIGHT COLUMN: PROCESSING ==================== */}
            <text x="850" y="150" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#888" letterSpacing="1">AI PROCESSING</text>

            {/* Worker Cluster */}
            <g transform="translate(850, 180)">
                <rect width="450" height="400" rx="12" fill="url(#grad-ai)" stroke="url(#stroke-ai)" strokeWidth="1" />
                <text x="30" y="40" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#06B6D4">GPU Cluster</text>
                <text x="30" y="65" fontFamily="Inter, sans-serif" fontSize="14" fill="#06B6D4" opacity="0.8">FastAPI Workers + ComfyUI</text>

                {/* Worker Node */}
                <g transform="translate(30, 90)">
                    <rect width="390" height="280" rx="8" fill="#000" fillOpacity="0.3" stroke="#06B6D4" strokeOpacity="0.3" />
                    <text x="20" y="30" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Worker Node (Python)</text>

                    {/* ComfyUI Instance */}
                    <g transform="translate(20, 50)">
                        <rect width="350" height="150" rx="6" fill="#111" stroke="#333" />
                        <text x="175" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#ddd">ComfyUI Engine</text>

                        {/* Nodes */}
                        <rect x="40" y="50" width="60" height="60" rx="4" fill="#333" />
                        <rect x="145" y="50" width="60" height="60" rx="4" fill="#333" />
                        <rect x="250" y="50" width="60" height="60" rx="4" fill="#333" />

                        <path d="M 100 80 L 145 80" stroke="#666" strokeWidth="2" />
                        <path d="M 205 80 L 250 80" stroke="#666" strokeWidth="2" />

                        <text x="70" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Load</text>
                        <text x="175" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">KSampler</text>
                        <text x="280" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">VAE Decode</text>
                    </g>

                    {/* S3 Upload */}
                    <g transform="translate(20, 220)">
                        <rect width="350" height="40" rx="4" fill="#111" stroke="#333" />
                        <text x="175" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#aaa">S3 / R2 Storage Uploader</text>
                    </g>
                </g>
            </g>

            {/* ==================== CONNECTIONS ==================== */}

            {/* Client -> API */}
            <path d="M 350 240 L 450 240" stroke="#A855F7" strokeWidth="2" markerEnd="url(#arrow-client)" />
            <rect x="365" y="225" width="70" height="16" rx="4" fill="#000" stroke="#A855F7" strokeWidth="1" />
            <text x="400" y="236" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#A855F7">REST / POST</text>

            {/* API -> Queue */}
            <path d="M 580 300 L 580 350" stroke="#EC4899" strokeWidth="2" markerEnd="url(#arrow-infra)" />
            <text x="590" y="330" fontFamily="Inter, sans-serif" fontSize="10" fill="#EC4899">Push Job</text>

            {/* Queue -> Worker */}
            <path d="M 710 400 L 850 400" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrow-queue)" />
            <rect x="750" y="385" width="60" height="16" rx="4" fill="#000" stroke="#F97316" strokeWidth="1" />
            <text x="780" y="396" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F97316">Poll / Pop</text>

            {/* Worker -> Socket */}
            <path d="M 850 540 L 710 540" stroke="#fff" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrow-socket)" />
            <text x="780" y="530" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#aaa">Progress Events</text>

            {/* Socket -> Client (Real-time Preview) */}
            <path d="M 450 540 L 400 540 L 400 380 L 330 380" stroke="#fff" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrow-socket)" />

            {/* ==================== LEGEND / FOOTER ==================== */}
            <line x1="50" y1="750" x2="1350" y2="750" stroke="#333" />

            <g transform="translate(50, 780)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#666">TECHNOLOGIES</text>
                <g transform="translate(0, 20)" fontFamily="Inter, sans-serif" fontSize="12" fill="#555">
                    <text x="0" y="0">Next.js 16</text>
                    <text x="100" y="0">FastAPI</text>
                    <text x="200" y="0">Redis</text>
                    <text x="300" y="0">ComfyUI</text>
                    <text x="400" y="0">WebSocket</text>
                </g>
            </g>

        </svg>
    );
};
