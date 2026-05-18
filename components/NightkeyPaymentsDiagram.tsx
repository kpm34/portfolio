import React from 'react';

export const NightkeyPaymentsDiagram = () => {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="900" height="900" fill="#030303" />

      <defs>
        <linearGradient id="np-grad-guest" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.18)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
        </linearGradient>
        <linearGradient id="np-grad-platform" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.18)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
        </linearGradient>
        <linearGradient id="np-grad-qor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.18)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
        </linearGradient>
        <linearGradient id="np-grad-payout" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.18)" />
          <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
        </linearGradient>

        <marker id="np-arrow-down" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
        </marker>
        <marker id="np-arrow-right" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
          <path d="M2,2 L10,6 L2,10 Z" fill="#666" />
        </marker>
      </defs>

      <text x="450" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Payments &amp; Payouts</text>
      <text x="450" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Booking · Deposit Hold · Settle · Split · Disburse</text>

      {/* Stage 1: Guest books */}
      <g transform="translate(60, 100)">
        <rect width="780" height="90" rx="8" fill="url(#np-grad-guest)" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F59E0B" letterSpacing="1">1 · GUEST BOOKS A TABLE</text>
        <text x="390" y="48" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#fff">Guest selects table · party size · arrival time · optional bottle pre-order</text>
        <text x="390" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888">Mobile app gathers payment method · deposit-split computes hold amount</text>
      </g>

      <path d="M 450 200 L 450 225" stroke="#666" strokeWidth="1.5" markerEnd="url(#np-arrow-down)" />

      {/* Stage 2: Platform hold via deposit-split */}
      <g transform="translate(60, 235)">
        <rect width="780" height="120" rx="8" fill="url(#np-grad-platform)" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">2 · PLATFORM HOLDS DEPOSIT</text>

        <g transform="translate(40, 36)">
          <rect width="220" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">deposit-split</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Edge Function</text>
          <text x="110" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Computes club + promoter share</text>
        </g>

        <g transform="translate(290, 36)">
          <rect width="220" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Authorization Hold</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">QorCommerce charge.create</text>
          <text x="110" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">capture=false · funds reserved</text>
        </g>

        <g transform="translate(540, 36)">
          <rect width="200" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="100" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Booking pending</text>
          <text x="100" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Postgres state machine</text>
          <text x="100" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Realtime → Tonight cockpit</text>
        </g>
      </g>

      <path d="M 450 365 L 450 390" stroke="#666" strokeWidth="1.5" markerEnd="url(#np-arrow-down)" />

      {/* Stage 3: Door + Settle */}
      <g transform="translate(60, 400)">
        <rect width="780" height="120" rx="8" fill="url(#np-grad-qor)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">3 · DOOR CHECK-IN · TAB · SETTLE</text>

        <g transform="translate(40, 36)">
          <rect width="220" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">guest-checkin-confirm</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Booking → active</text>
          <text x="110" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Host marks party arrived</text>
        </g>

        <g transform="translate(290, 36)">
          <rect width="220" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Open tab · Bottle adds</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Bottle server adds items</text>
          <text x="110" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Modifiers · Comps · Discounts</text>
        </g>

        <g transform="translate(540, 36)">
          <rect width="200" height="70" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="100" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">settle-booking</text>
          <text x="100" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Capture final amount</text>
          <text x="100" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Tip + tax split logic</text>
        </g>
      </g>

      <path d="M 450 530 L 450 555" stroke="#666" strokeWidth="1.5" markerEnd="url(#np-arrow-down)" />

      {/* Stage 4: Webhook + Split + Payout */}
      <g transform="translate(60, 565)">
        <rect width="780" height="220" rx="8" fill="url(#np-grad-payout)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">4 · WEBHOOK · NIGHTLY SPLIT · DISBURSE</text>

        <g transform="translate(30, 40)">
          <rect width="220" height="160" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">payment-webhook</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Idempotent dispatcher</text>
          <text x="110" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">charge.succeeded</text>
          <text x="110" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">charge.refunded</text>
          <text x="110" y="94" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">dispute.created</text>
          <text x="110" y="110" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">payout.paid</text>
          <text x="110" y="135" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Updates booking · ledger</text>
        </g>

        <g transform="translate(280, 40)">
          <rect width="220" height="160" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">daily-club-payout</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Cron · per-club schedule</text>
          <text x="110" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Gross revenue</text>
          <text x="110" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">− platform commission</text>
          <text x="110" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">− promoter commissions</text>
          <text x="110" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">− refunds · chargebacks</text>
          <text x="110" y="135" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">= net club share</text>
        </g>

        <g transform="translate(530, 40)">
          <rect width="220" height="160" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">disburse-payouts</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">QorCommerce transfers</text>
          <text x="110" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">→ Club sub-merchant</text>
          <text x="110" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">→ Promoter sub-merchant</text>
          <text x="110" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">→ Platform fee account</text>
          <text x="110" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Audit row per leg</text>
          <text x="110" y="135" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Re-runnable + idempotent</text>
        </g>
      </g>

      <text x="450" y="830" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">All amounts stored as integer cents · Re-runnable nightly · Ledger-first design</text>
    </svg>
  );
};
