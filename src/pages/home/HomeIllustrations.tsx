import type { CSSProperties } from 'react';
import markWhite from '@/assets/home/mark-white.png.asset.json';
import type { ServiceKey } from './homeCopy';

const delay = (v: string): CSSProperties => ({ '--bd': v } as CSSProperties);

export const HomeSprite = () => (
  <svg className="sprite" aria-hidden="true" focusable="false">
    <defs>
      <symbol id="i-heart" viewBox="0 0 24 24">
        <path d="M12 21s-7-4.6-9.3-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9z" />
      </symbol>
      <symbol id="i-share" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4" fill="none" />
      </symbol>
      <symbol id="i-play" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zm0-9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
      </symbol>
      <symbol id="i-star4" viewBox="0 0 24 24">
        <path d="M12 0c.9 7 3.6 10.4 12 12-8.4 1.6-11.1 5-12 12-.9-7-3.6-10.4-12-12C8.4 10.4 11.1 7 12 0z" />
      </symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M7 17L17 7M8 7h9v9" />
      </symbol>
    </defs>
  </svg>
);

export const HeroIllustration = () => (
  <svg viewBox="0 0 480 380" role="img">
    <g className="orbits">
      <ellipse cx="240" cy="195" rx="215" ry="74" transform="rotate(-28 240 195)" />
      <ellipse cx="240" cy="195" rx="200" ry="64" transform="rotate(-28 240 195)" />
      <ellipse cx="240" cy="195" rx="186" ry="54" transform="rotate(-28 240 195)" />
    </g>
    <g className="float">
      <g transform="rotate(-12 240 195)">
        <rect x="172" y="62" width="136" height="252" rx="28" fill="#fff" stroke="#1b1b1b" strokeWidth="3.5" />
        <rect x="226" y="74" width="28" height="7" rx="3.5" fill="#1b1b1b" />
        <clipPath id="screenClip"><rect x="188" y="96" width="104" height="104" rx="16" /></clipPath>
        <rect x="188" y="96" width="104" height="104" rx="16" fill="#0080F8" />
        <g clipPath="url(#screenClip)">
          <circle cx="246" cy="132" r="19" fill="#BFE6FF" />
          <path d="M180 206 V176 q30 -30 62 -8 q26 16 54 -6 V206z" fill="#0355B8" />
        </g>
        <rect x="188" y="214" width="64" height="8" rx="4" fill="#1b1b1b" />
        <rect x="188" y="230" width="104" height="6" rx="3" fill="#d9d9d9" />
        <rect x="188" y="244" width="80" height="6" rx="3" fill="#d9d9d9" />
        <use href="#i-heart" x="188" y="262" width="20" height="20" fill="#0080F8" />
        <use href="#i-share" x="218" y="263" width="19" height="19" fill="#1b1b1b" stroke="#1b1b1b" strokeWidth="2" />
        <rect x="256" y="266" width="36" height="12" rx="6" fill="#9AD3FF" />
      </g>
    </g>
    <g className="bub" style={delay('0s')}>
      <circle cx="380" cy="64" r="24" fill="#1b1b1b" />
      <use href="#i-heart" x="368" y="52" width="24" height="24" fill="#fff" />
    </g>
    <g className="bub" style={delay('-1.4s')}>
      <circle cx="440" cy="94" r="22" fill="#9AD3FF" />
      <use href="#i-share" x="429" y="83" width="22" height="22" fill="#1b1b1b" stroke="#1b1b1b" strokeWidth="2" />
    </g>
    <g className="bub" style={delay('-2.6s')}>
      <circle cx="428" cy="156" r="22" fill="#1b1b1b" />
      <use href="#i-play" x="417" y="145" width="22" height="22" fill="#fff" />
    </g>
    <g className="bub" style={delay('-3.4s')}>
      <circle cx="404" cy="226" r="24" fill="#9AD3FF" stroke="#1b1b1b" strokeWidth="2" />
      <use href="#i-pin" x="392" y="214" width="24" height="24" fill="#1b1b1b" />
    </g>
    <circle cx="86" cy="84" r="13" fill="#1b1b1b" />
    <circle cx="120" cy="104" r="7" fill="#5CC8FF" />
    <circle cx="372" cy="330" r="6" fill="#5CC8FF" />
    <use className="twinkle" href="#i-star4" x="62" y="268" width="60" height="60" fill="#1b1b1b" />
    <use className="twinkle" style={delay('-1.5s')} href="#i-star4" x="256" y="336" width="26" height="26" fill="#1b1b1b" />
    <use className="twinkle" style={delay('-2.5s')} href="#i-star4" x="292" y="20" width="22" height="22" fill="#0080F8" />
  </svg>
);

export const ServiceIllustration = ({ service }: { service: ServiceKey }) => {
  if (service === 'social') {
    return (
      <svg viewBox="0 0 220 150">
        <circle cx="44" cy="22" r="2.6" fill="#1b1b1b" /><circle cx="54" cy="22" r="2.6" fill="#1b1b1b" /><circle cx="64" cy="22" r="2.6" fill="#1b1b1b" />
        <rect x="52" y="30" width="112" height="86" rx="12" fill="#fff" className="art-ink" />
        <circle cx="80" cy="58" r="14" fill="#9AD3FF" className="art-ink" strokeWidth="2" />
        <circle cx="75.5" cy="55" r="1.8" fill="#1b1b1b" /><circle cx="84.5" cy="55" r="1.8" fill="#1b1b1b" />
        <path d="M74.5 62 q5.5 5.5 11 0" className="art-ink" strokeWidth="2" />
        <rect x="102" y="50" width="48" height="6" rx="3" fill="#1b1b1b" />
        <rect x="102" y="62" width="36" height="6" rx="3" fill="#d9d9d9" />
        <rect x="66" y="84" width="84" height="6" rx="3" fill="#d9d9d9" />
        <rect x="66" y="96" width="58" height="6" rx="3" fill="#d9d9d9" />
        <g className="pop"><rect x="138" y="12" width="36" height="24" rx="7" fill="#fff" className="art-ink" strokeWidth="2" /><use href="#i-heart" x="147" y="16" width="18" height="18" fill="#0080F8" /></g>
        <g className="pop"><rect x="26" y="68" width="32" height="22" rx="7" fill="#fff" className="art-ink" strokeWidth="2" /><use href="#i-heart" x="34" y="71" width="16" height="16" fill="#1b1b1b" /></g>
        <g className="pop">
          <rect x="118" y="108" width="80" height="20" rx="5" fill="#1b1b1b" />
          <use href="#i-star4" x="126" y="113" width="10" height="10" fill="#fff" />
          <use href="#i-star4" x="141" y="113" width="10" height="10" fill="#fff" />
          <use href="#i-star4" x="156" y="113" width="10" height="10" fill="#fff" />
          <use href="#i-star4" x="171" y="113" width="10" height="10" fill="#fff" />
          <use href="#i-star4" x="184" y="113" width="10" height="10" fill="#9AD3FF" />
        </g>
      </svg>
    );
  }
  if (service === 'traffic') {
    return (
      <svg viewBox="0 0 220 150">
        <rect x="40" y="30" width="136" height="92" rx="10" fill="#fff" className="art-ink" />
        <path d="M40 50 H176" className="art-ink" strokeWidth="2" />
        <circle cx="52" cy="40" r="2.6" className="art-ink" strokeWidth="1.6" />
        <circle cx="62" cy="40" r="2.6" className="art-ink" strokeWidth="1.6" />
        <circle cx="72" cy="40" r="2.6" className="art-ink" strokeWidth="1.6" />
        <rect className="bar b1" x="58" y="92" width="16" height="20" fill="#9AD3FF" stroke="#1b1b1b" strokeWidth="2" />
        <rect className="bar b2" x="82" y="80" width="16" height="32" fill="#5CC8FF" stroke="#1b1b1b" strokeWidth="2" />
        <rect className="bar b3" x="106" y="66" width="16" height="46" fill="#0080F8" stroke="#1b1b1b" strokeWidth="2" />
        <path d="M58 84 L94 72 L118 58 L146 62" className="art-ink" strokeWidth="2" strokeDasharray="3 4" />
        <g className="cursor"><path d="M146 80 v30 l8 -7 l6 14 l9 -4 l-6 -13 l11 -1z" fill="#1b1b1b" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" /></g>
        <path d="M140 74 l-7 -7 M148 70 v-9 M157 74 l7 -7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (service === 'seo') {
    return (
      <svg viewBox="0 0 220 150">
        <use className="twinkle" href="#i-star4" x="30" y="22" width="18" height="18" fill="#fff" />
        <use className="twinkle" style={delay('-2s')} href="#i-star4" x="182" y="86" width="14" height="14" fill="#9AD3FF" />
        <circle cx="52" cy="112" r="4" fill="#5CC8FF" />
        <g className="lens">
          <path d="M124 94 L158 128" stroke="#fff" strokeWidth="13" strokeLinecap="round" />
          <path d="M124 94 L158 128" stroke="#1b1b1b" strokeWidth="7" strokeLinecap="round" />
          <circle cx="98" cy="68" r="36" fill="#fff" stroke="#1b1b1b" strokeWidth="3.2" />
          <polyline points="76,84 90,68 104,76 122,50" fill="none" stroke="#0080F8" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M112 50 h10 v10" fill="none" stroke="#0080F8" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="pop">
          <rect x="138" y="18" width="46" height="26" rx="7" fill="#9AD3FF" className="art-ink" strokeWidth="2" />
          <text x="161" y="36.5" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700" fill="#1b1b1b">#1</text>
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 150">
      <path d="M34 116 C66 18 132 14 184 100" className="art-ink" strokeWidth="2.6" />
      <path d="M34 116 L60 76 M184 100 L152 60" className="art-ink" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="60" cy="76" r="4.5" fill="#9AD3FF" className="art-ink" strokeWidth="2" />
      <circle cx="152" cy="60" r="4.5" fill="#9AD3FF" className="art-ink" strokeWidth="2" />
      <rect x="27" y="109" width="14" height="14" fill="#fff" className="art-ink" strokeWidth="2" />
      <rect x="177" y="93" width="14" height="14" fill="#fff" className="art-ink" strokeWidth="2" />
      <g className="pen">
        <g transform="translate(112 56) rotate(38)">
          <path d="M-10 -36 h20 v32 l-10 20 l-10 -20z" fill="#0080F8" className="art-ink" strokeWidth="2.6" />
          <circle cx="0" cy="-8" r="3.4" fill="#fff" className="art-ink" strokeWidth="2" />
          <path d="M0 -4 V14" className="art-ink" strokeWidth="2" />
        </g>
      </g>
      <circle className="pop" cx="144" cy="130" r="9" fill="#0080F8" stroke="#1b1b1b" strokeWidth="2.2" />
      <circle className="pop" cx="168" cy="130" r="9" fill="#9AD3FF" stroke="#1b1b1b" strokeWidth="2.2" />
      <circle className="pop" cx="192" cy="130" r="9" fill="#1b1b1b" />
    </svg>
  );
};

export const CtaIllustration = () => (
  <svg viewBox="0 0 320 220">
    <ellipse className="ring" cx="160" cy="116" rx="124" ry="36" />
    <ellipse className="ring" cx="160" cy="116" rx="112" ry="29" />
    <ellipse className="ring" cx="160" cy="116" rx="100" ry="23" />
    <g className="core">
      <circle cx="160" cy="108" r="44" fill="#1b1b1b" />
      <image href={markWhite.url} x="136" y="89" width="48" height="41" />
    </g>
    <g transform="translate(246 152)">
      <path className="burst" fill="#d9d9d9" d="M0.0 -38.0 L5.6 -24.4 L16.5 -34.2 L15.6 -19.5 L29.7 -23.7 L22.5 -10.8 L37.0 -8.5 L25.0 0.0 L37.0 8.5 L22.5 10.8 L29.7 23.7 L15.6 19.5 L16.5 34.2 L5.6 24.4 L0.0 38.0 L-5.6 24.4 L-16.5 34.2 L-15.6 19.5 L-29.7 23.7 L-22.5 10.8 L-37.0 8.5 L-25.0 0.0 L-37.0 -8.5 L-22.5 -10.8 L-29.7 -23.7 L-15.6 -19.5 L-16.5 -34.2 L-5.6 -24.4 Z" />
    </g>
    <use className="twinkle" href="#i-star4" x="92" y="146" width="58" height="58" fill="#0080F8" />
    <use className="twinkle" style={delay('-2s')} href="#i-star4" x="270" y="40" width="20" height="20" fill="#1b1b1b" />
  </svg>
);