import React from 'react';

export const NightkeyFloorPlanDiagram = () => {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="900" height="900" fill="#030303" />

      <defs>
        <linearGradient id="nf-grad-editor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.18)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
        </linearGradient>
        <linearGradient id="nf-grad-canon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.18)" />
          <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
        </linearGradient>
        <linearGradient id="nf-grad-rt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.18)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
        </linearGradient>
        <linearGradient id="nf-grad-state" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.18)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
        </linearGradient>

        <marker id="nf-arrow-down" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
        </marker>
      </defs>

      <text x="450" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Floor Plan &amp; Bookings</text>
      <text x="450" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Konva Editor → Canonical Layout → Realtime Sync → Booking State Machine</text>

      {/* 1: Editor */}
      <g transform="translate(60, 100)">
        <rect width="780" height="180" rx="8" fill="url(#nf-grad-editor)" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F59E0B" letterSpacing="1">1 · KONVA FLOOR-PLAN EDITOR (iPAD)</text>

        <g transform="translate(30, 40)">
          <rect width="225" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="112" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Canvas primitives</text>
          <text x="112" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Tables · seats · zones</text>
          <text x="112" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Shapes · walls · DJ booth</text>
          <text x="112" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Drag · resize · rotate</text>
          <text x="112" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Snap-to-grid</text>
          <text x="112" y="116" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Touch + Apple Pencil</text>
        </g>

        <g transform="translate(285, 40)">
          <rect width="225" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="112" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Auto-layout templates</text>
          <text x="112" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Bottle service standard</text>
          <text x="112" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Lounge · Stage front</text>
          <text x="112" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">VIP rooms</text>
          <text x="112" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Generate from capacity</text>
          <text x="112" y="116" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Operator picks · adjusts</text>
        </g>

        <g transform="translate(540, 40)">
          <rect width="225" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="112" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Table metadata</text>
          <text x="112" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Min spend · party cap</text>
          <text x="112" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Tier · zone · shareable</text>
          <text x="112" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Photo · description</text>
          <text x="112" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Server assignment</text>
          <text x="112" y="116" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Drives booking surface</text>
        </g>
      </g>

      <path d="M 450 290 L 450 315" stroke="#666" strokeWidth="1.5" markerEnd="url(#nf-arrow-down)" />

      {/* 2: Canonical layout */}
      <g transform="translate(60, 325)">
        <rect width="780" height="110" rx="8" fill="url(#nf-grad-canon)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">2 · CANONICAL POSTGRES LAYOUT</text>

        <text x="390" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">tables · floor_plans · zones · server_assignments</text>
        <text x="390" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888">One source of truth · referenced by every downstream surface</text>
        <text x="390" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#999">RLS: operators write · clients read (active) · servers read (assigned)</text>
      </g>

      <path d="M 450 445 L 450 470" stroke="#666" strokeWidth="1.5" markerEnd="url(#nf-arrow-down)" />

      {/* 3: Surfaces that consume */}
      <g transform="translate(60, 480)">
        <rect width="780" height="170" rx="8" fill="url(#nf-grad-rt)" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">3 · CONSUMING SURFACES · REALTIME</text>

        <g transform="translate(30, 40)">
          <rect width="170" height="115" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Tonight cockpit</text>
          <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Operator iPad</text>
          <text x="85" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Occupancy heatmap</text>
          <text x="85" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Arrivals · pending</text>
          <text x="85" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Server map</text>
        </g>

        <g transform="translate(218, 40)">
          <rect width="170" height="115" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Guest booking</text>
          <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Mobile (Expo)</text>
          <text x="85" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Live availability</text>
          <text x="85" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Table preview</text>
          <text x="85" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Min spend rules</text>
        </g>

        <g transform="translate(406, 40)">
          <rect width="170" height="115" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Bottle server view</text>
          <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Tablet</text>
          <text x="85" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Only assigned tables</text>
          <text x="85" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Open tab · settle</text>
          <text x="85" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Tip splits</text>
        </g>

        <g transform="translate(594, 40)">
          <rect width="170" height="115" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="85" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Door / Host</text>
          <text x="85" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Web or tablet</text>
          <text x="85" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Guest check-in</text>
          <text x="85" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Walk-up seating</text>
          <text x="85" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">ID verify</text>
        </g>
      </g>

      <path d="M 450 660 L 450 685" stroke="#666" strokeWidth="1.5" markerEnd="url(#nf-arrow-down)" />

      {/* 4: State machine */}
      <g transform="translate(60, 695)">
        <rect width="780" height="140" rx="8" fill="url(#nf-grad-state)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">4 · BOOKING STATE MACHINE</text>

        {/* States pill row */}
        <g transform="translate(40, 50)">
          <rect width="100" height="34" rx="17" fill="#000" stroke="#F59E0B" strokeOpacity="0.6" />
          <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#F59E0B">pending</text>
        </g>
        <path d="M 145 67 L 175 67" stroke="#666" strokeWidth="1.5" markerEnd="url(#nf-arrow-down)" transform="rotate(-90 160 67)" />
        <g transform="translate(180, 50)">
          <rect width="110" height="34" rx="17" fill="#000" stroke="#3B82F6" strokeOpacity="0.6" />
          <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#3B82F6">confirmed</text>
        </g>
        <path d="M 295 67 L 325 67" stroke="#666" strokeWidth="1.5" markerEnd="url(#nf-arrow-down)" transform="rotate(-90 310 67)" />
        <g transform="translate(330, 50)">
          <rect width="90" height="34" rx="17" fill="#000" stroke="#22C55E" strokeOpacity="0.6" />
          <text x="45" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#22C55E">active</text>
        </g>
        <path d="M 425 67 L 455 67" stroke="#666" strokeWidth="1.5" markerEnd="url(#nf-arrow-down)" transform="rotate(-90 440 67)" />
        <g transform="translate(460, 50)">
          <rect width="110" height="34" rx="17" fill="#000" stroke="#888" strokeOpacity="0.6" />
          <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#aaa">completed</text>
        </g>

        {/* Terminal branches */}
        <g transform="translate(600, 36)">
          <rect width="160" height="26" rx="13" fill="#000" stroke="#EF4444" strokeOpacity="0.6" />
          <text x="80" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#EF4444">cancelled</text>
        </g>
        <g transform="translate(600, 70)">
          <rect width="160" height="26" rx="13" fill="#000" stroke="#EF4444" strokeOpacity="0.6" />
          <text x="80" y="18" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#EF4444">no_show</text>
        </g>

        <text x="390" y="124" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Transitions driven by deposit-split · guest-checkin-confirm · settle-booking · admin override</text>
      </g>

      <text x="450" y="870" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">Konva canvas · canonical Postgres · Supabase Realtime · per-role RLS</text>
    </svg>
  );
};
