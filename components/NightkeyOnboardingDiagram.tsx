import React from 'react';

export const NightkeyOnboardingDiagram = () => {
  return (
    <svg width="900" height="980" viewBox="0 0 900 980" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="900" height="980" fill="#030303" />

      <defs>
        <linearGradient id="no-grad-input" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.18)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
        </linearGradient>
        <linearGradient id="no-grad-pdf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(244, 63, 94, 0.18)" />
          <stop offset="100%" stopColor="rgba(244, 63, 94, 0.05)" />
        </linearGradient>
        <linearGradient id="no-grad-board" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.18)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
        </linearGradient>
        <linearGradient id="no-grad-docs" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.18)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
        </linearGradient>
        <linearGradient id="no-grad-status" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.18)" />
          <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
        </linearGradient>

        <marker id="no-arrow-down" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <path d="M2,2 L10,2 L6,10 Z" fill="#666" />
        </marker>
      </defs>

      <text x="450" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="white">Merchant Onboarding</text>
      <text x="450" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#666">Promoter NSA · QorCommerce Sub-Merchant Boarding · Underwriting · Status Sync</text>

      {/* 1: Profile capture */}
      <g transform="translate(60, 100)">
        <rect width="780" height="90" rx="8" fill="url(#no-grad-input)" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F59E0B" letterSpacing="1">1 · PROFILE CAPTURE</text>
        <text x="390" y="48" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#fff">Promoter or club operator completes onboarding wizard</text>
        <text x="390" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#888">Legal name · DBA · EIN · DOB · address · principals · banking · KYC docs</text>
      </g>

      <path d="M 450 200 L 450 225" stroke="#666" strokeWidth="1.5" markerEnd="url(#no-arrow-down)" />

      {/* 2: NSA stamp */}
      <g transform="translate(60, 235)">
        <rect width="780" height="130" rx="8" fill="url(#no-grad-pdf)" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#F43F5E" letterSpacing="1">2 · NSA PDF GENERATION (PROMOTER FLOW)</text>

        <g transform="translate(30, 40)">
          <rect width="230" height="78" rx="6" fill="#000" fillOpacity="0.4" stroke="#F43F5E" strokeOpacity="0.3" />
          <text x="115" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">generate-promoter-nsa-pdf</text>
          <text x="115" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Edge Function (Deno)</text>
          <text x="115" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">pdf-lib stamps template</text>
        </g>

        <g transform="translate(290, 40)">
          <rect width="230" height="78" rx="6" fill="#000" fillOpacity="0.4" stroke="#F43F5E" strokeOpacity="0.3" />
          <text x="115" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Stamped fields</text>
          <text x="115" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Name · EIN · Signature image</text>
          <text x="115" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">ISO timestamp · IP audit</text>
        </g>

        <g transform="translate(550, 40)">
          <rect width="220" height="78" rx="6" fill="#000" fillOpacity="0.4" stroke="#F43F5E" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Supabase Storage</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Signed PDF written</text>
          <text x="110" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Linked to promoter profile</text>
        </g>
      </g>

      <path d="M 450 375 L 450 400" stroke="#666" strokeWidth="1.5" markerEnd="url(#no-arrow-down)" />

      {/* 3: Boarding call */}
      <g transform="translate(60, 410)">
        <rect width="780" height="130" rx="8" fill="url(#no-grad-board)" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#A855F7" letterSpacing="1">3 · QORCOMMERCE SUB-MERCHANT BOARDING</text>

        <g transform="translate(30, 40)">
          <rect width="230" height="78" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="115" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">board-merchant</text>
          <text x="115" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">For clubs</text>
          <text x="115" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">POST /merchants (PFaaS)</text>
        </g>

        <g transform="translate(290, 40)">
          <rect width="230" height="78" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="115" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">board-promoter</text>
          <text x="115" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">For promoters</text>
          <text x="115" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Shared qor-helpers · TDD</text>
        </g>

        <g transform="translate(550, 40)">
          <rect width="220" height="78" rx="6" fill="#000" fillOpacity="0.4" stroke="#A855F7" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Provider IDs stored</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">merchant_id · status=pending</text>
          <text x="110" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">boarded_at timestamp</text>
        </g>
      </g>

      <path d="M 450 550 L 450 575" stroke="#666" strokeWidth="1.5" markerEnd="url(#no-arrow-down)" />

      {/* 4: Doc upload via relay */}
      <g transform="translate(60, 585)">
        <rect width="780" height="150" rx="8" fill="url(#no-grad-docs)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#06B6D4" letterSpacing="1">4 · UNDERWRITING DOC UPLOAD · STATIC-IP RELAY</text>

        <g transform="translate(30, 40)">
          <rect width="220" height="98" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">upload-underwriting-docs</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Edge Function</text>
          <text x="110" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Stores PDF/JPG in Storage</text>
          <text x="110" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Validates KYB document type</text>
        </g>

        <g transform="translate(280, 40)">
          <rect width="220" height="98" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">transmit-merchant-docs</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Posts to relay</text>
          <text x="110" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Feature-flag gated</text>
          <text x="110" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">QORPAY_DOC_UPLOAD_ENABLED</text>
        </g>

        <g transform="translate(530, 40)">
          <rect width="220" height="98" rx="6" fill="#000" fillOpacity="0.4" stroke="#06B6D4" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Render Relay (Node)</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">Static outbound IP</text>
          <text x="110" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Multipart → PFaaS</text>
          <text x="110" y="78" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Satisfies IP allowlist</text>
        </g>
      </g>

      <path d="M 450 745 L 450 770" stroke="#666" strokeWidth="1.5" markerEnd="url(#no-arrow-down)" />

      {/* 5: Status reconciliation */}
      <g transform="translate(60, 780)">
        <rect width="780" height="140" rx="8" fill="url(#no-grad-status)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
        <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E" letterSpacing="1">5 · STATUS RECONCILIATION</text>

        <g transform="translate(30, 40)">
          <rect width="240" height="88" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="120" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">payment-webhook</text>
          <text x="120" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">merchant.verified</text>
          <text x="120" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">merchant.declined</text>
          <text x="120" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">→ updateMerchantBoardingStatus</text>
        </g>

        <g transform="translate(290, 40)">
          <rect width="240" height="88" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="120" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">poll-merchant-status</text>
          <text x="120" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888">On-demand fallback</text>
          <text x="120" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">If webhook missed</text>
          <text x="120" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Admin trigger</text>
        </g>

        <g transform="translate(550, 40)">
          <rect width="220" height="88" rx="6" fill="#000" fillOpacity="0.4" stroke="#22C55E" strokeOpacity="0.3" />
          <text x="110" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Status → active</text>
          <text x="110" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Live charges enabled</text>
          <text x="110" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Payouts enabled</text>
          <text x="110" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Operator notified</text>
        </g>
      </g>

      <text x="450" y="950" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">TDD-tested · idempotent · bypass mode for App Store review accounts</text>
    </svg>
  );
};
