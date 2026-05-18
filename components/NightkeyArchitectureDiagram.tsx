import React from 'react';

export const NightkeyArchitectureDiagram = () => {
  return (
    <svg width="800" height="1180" viewBox="0 0 800 1180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="800" height="1180" fill="#030303" />

      <defs>
        <linearGradient id="nk-grad-client" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.18)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
        </linearGradient>
        <linearGradient id="nk-stroke-client" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.6)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.2)" />
        </linearGradient>

        <linearGradient id="nk-grad-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.18)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
        </linearGradient>
        <linearGradient id="nk-stroke-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
        </linearGradient>

        <linearGradient id="nk-grad-supa" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.18)" />
          <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
        </linearGradient>
        <linearGradient id="nk-stroke-supa" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
          <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
        </linearGradient>

        <linearGradient id="nk-grad-vendor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.18)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
        </linearGradient>
        <linearGradient id="nk-stroke-vendor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
        </linearGradient>

        <marker id="nk-arrow-down" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
        </marker>
      </defs>

      <text x="400" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Nightkey System Architecture</text>
      <text x="400" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Four-Sided Marketplace · One Supabase Backend · PayFac Payments</text>

      <g transform="translate(225, 80)">
        <rect width="80" height="20" rx="10" fill="#000" stroke="#F59E0B" strokeOpacity="0.5" />
        <text x="40" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F59E0B">Next.js 15</text>
      </g>
      <g transform="translate(315, 80)">
        <rect width="60" height="20" rx="10" fill="#000" stroke="#F59E0B" strokeOpacity="0.5" />
        <text x="30" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F59E0B">Expo</text>
      </g>
      <g transform="translate(385, 80)">
        <rect width="75" height="20" rx="10" fill="#000" stroke="#22C55E" strokeOpacity="0.5" />
        <text x="37" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#22C55E">Supabase</text>
      </g>
      <g transform="translate(470, 80)">
        <rect width="95" height="20" rx="10" fill="#000" stroke="#06B6D4" strokeOpacity="0.5" />
        <text x="47" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#06B6D4">QorCommerce</text>
      </g>

      {/* LAYER 1: SURFACES (4 user types) */}
      <g transform="translate(50, 120)">
        <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F59E0B" letterSpacing="1">CLIENT SURFACES</text>
        <rect x="0" y="15" width="700" height="160" rx="8" fill="url(#nk-grad-client)" stroke="url(#nk-stroke-client)" strokeWidth="1" />

        <g transform="translate(20, 35)">
          <rect width="155" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="77" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Club Dashboard</text>
          <text x="77" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">iPad · Next.js</text>
          <text x="77" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Tonight cockpit</text>
          <text x="77" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Floor plan editor</text>
          <text x="77" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Bookings · Staff</text>
          <text x="77" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Payouts · POS</text>
        </g>

        <g transform="translate(185, 35)">
          <rect width="155" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="77" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Guest App</text>
          <text x="77" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">iOS · Android · Expo</text>
          <text x="77" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Discover venues</text>
          <text x="77" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Book table · Bottle</text>
          <text x="77" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">ID verify · Pay</text>
          <text x="77" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Check-in at door</text>
        </g>

        <g transform="translate(350, 35)">
          <rect width="155" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="77" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Promoter App</text>
          <text x="77" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">iOS · Android · Expo</text>
          <text x="77" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">NSA e-sign</text>
          <text x="77" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Guest lists</text>
          <text x="77" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Commissions</text>
          <text x="77" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Sub-merchant</text>
        </g>

        <g transform="translate(515, 35)">
          <rect width="155" height="125" rx="6" fill="#000" fillOpacity="0.4" stroke="#F59E0B" strokeOpacity="0.3" />
          <text x="77" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Bottle Server</text>
          <text x="77" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Tablet · Web</text>
          <text x="77" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Assigned tables</text>
          <text x="77" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Open tabs · Mods</text>
          <text x="77" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Settle · Tip split</text>
          <text x="77" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Live floor</text>
        </g>
      </g>

      <path d="M 400 285 L 400 310" stroke="#666" strokeWidth="1.5" markerEnd="url(#nk-arrow-down)" />

      {/* LAYER 2: EDGE FUNCTIONS */}
      <g transform="translate(50, 325)">
        <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">EDGE FUNCTIONS · 24 DENO HANDLERS</text>
        <rect x="0" y="15" width="700" height="155" rx="8" fill="url(#nk-grad-edge)" stroke="url(#nk-stroke-edge)" strokeWidth="1" />

        <text x="350" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#A855F7">Boarding · Payments · Webhooks · ID · PDF · Notifications</text>

        {/* Row 1 */}
        <g transform="translate(20, 56)">
          <rect width="105" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="52" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">board-merchant</text>
        </g>
        <g transform="translate(135, 56)">
          <rect width="105" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="52" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">board-promoter</text>
        </g>
        <g transform="translate(250, 56)">
          <rect width="125" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="62" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">poll-merchant-status</text>
        </g>
        <g transform="translate(385, 56)">
          <rect width="135" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="67" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">transmit-merchant-docs</text>
        </g>
        <g transform="translate(530, 56)">
          <rect width="150" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="75" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">upload-underwriting-docs</text>
        </g>

        {/* Row 2 */}
        <g transform="translate(20, 86)">
          <rect width="105" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="52" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">payment-webhook</text>
        </g>
        <g transform="translate(135, 86)">
          <rect width="100" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="50" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">settle-booking</text>
        </g>
        <g transform="translate(245, 86)">
          <rect width="100" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="50" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">deposit-split</text>
        </g>
        <g transform="translate(355, 86)">
          <rect width="120" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="60" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">daily-club-payout</text>
        </g>
        <g transform="translate(485, 86)">
          <rect width="115" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="57" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">disburse-payouts</text>
        </g>
        <g transform="translate(610, 86)">
          <rect width="70" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="35" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">verify-id</text>
        </g>

        {/* Row 3 */}
        <g transform="translate(20, 116)">
          <rect width="150" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="75" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">generate-promoter-nsa-pdf</text>
        </g>
        <g transform="translate(180, 116)">
          <rect width="130" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="65" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">guest-checkin-confirm</text>
        </g>
        <g transform="translate(320, 116)">
          <rect width="125" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="62" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">staff-step-up-start</text>
        </g>
        <g transform="translate(455, 116)">
          <rect width="130" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="65" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">staff-step-up-verify</text>
        </g>
        <g transform="translate(595, 116)">
          <rect width="85" height="22" rx="4" fill="#000" fillOpacity="0.5" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="42" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">+ 11 more</text>
        </g>
      </g>

      <path d="M 400 495 L 400 520" stroke="#666" strokeWidth="1.5" markerEnd="url(#nk-arrow-down)" />

      {/* LAYER 3: SUPABASE CORE */}
      <g transform="translate(50, 535)">
        <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">SUPABASE PLATFORM</text>
        <rect x="0" y="15" width="700" height="200" rx="8" fill="url(#nk-grad-supa)" stroke="url(#nk-stroke-supa)" strokeWidth="1" />

        <g transform="translate(20, 35)">
          <rect width="155" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Auth</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">OAuth · Email · OTP</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Phone for mobile</text>
        </g>

        <g transform="translate(185, 35)">
          <rect width="155" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Realtime</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Broadcast · Presence</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Tonight cockpit</text>
        </g>

        <g transform="translate(350, 35)">
          <rect width="155" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Storage</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Signed NSAs · ID docs</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">KYB underwriting</text>
        </g>

        <g transform="translate(515, 35)">
          <rect width="155" height="75" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">RLS</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">4 roles per tenant</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Policy on every table</text>
        </g>

        {/* DB band */}
        <rect x="20" y="125" width="650" height="60" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
        <text x="345" y="148" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">PostgreSQL · 73 Migrations</text>
        <text x="345" y="168" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">clubs · promoters · staff · bookings · tables · payments · payouts · documents · audit</text>
      </g>

      <path d="M 400 760 L 400 785" stroke="#666" strokeWidth="1.5" markerEnd="url(#nk-arrow-down)" />

      {/* LAYER 4: VENDORS */}
      <g transform="translate(50, 800)">
        <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">EXTERNAL VENDORS</text>
        <rect x="0" y="15" width="700" height="220" rx="8" fill="url(#nk-grad-vendor)" stroke="url(#nk-stroke-vendor)" strokeWidth="1" />

        {/* Row 1 */}
        <g transform="translate(20, 35)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">QorCommerce</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">PayFac (PFaaS)</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Sub-merchants</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Charges · Payouts</text>
        </g>

        <g transform="translate(185, 35)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Render Relay</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Static outbound IP</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Doc forwarder</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Node service</text>
        </g>

        <g transform="translate(350, 35)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">AWS Rekognition</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Face match</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">ID verification</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Door check-in</text>
        </g>

        <g transform="translate(515, 35)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">GCP Vision</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">OCR on IDs</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">DOB · Name parse</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">21+ enforcement</text>
        </g>

        {/* Row 2 */}
        <g transform="translate(20, 125)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Twilio</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">SMS</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Booking confirms</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Step-up codes</text>
        </g>

        <g transform="translate(185, 125)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Expo Push</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Mobile notifications</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Marketing · Operations</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Apple + Google</text>
        </g>

        <g transform="translate(350, 125)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Resend</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Transactional email</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Staff invites</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Receipts</text>
        </g>

        <g transform="translate(515, 125)">
          <rect width="155" height="80" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="77" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Vercel</text>
          <text x="77" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Dashboard hosting</text>
          <text x="77" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">nightkey.io</text>
          <text x="77" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Edge + CDN</text>
        </g>
      </g>

      <text x="400" y="1080" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">73 migrations · 24 edge functions · 4 client surfaces · 1 schema</text>
      <text x="400" y="1098" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#444">Production marketplace · iPad-first operations · PayFac payments end-to-end</text>
    </svg>
  );
};
