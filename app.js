'use strict';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SVG ICON LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const ICONS = {
  // ── しんどい：体 ──
  '頭が重い': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="4" width="14" height="8" rx="4" fill="#C4B5FD" stroke="#8B5CF6" stroke-width="1.3"/><circle cx="17" cy="8" r="1" fill="#EDE8FA" opacity="0.9"/><circle cx="20" cy="8" r="1" fill="#EDE8FA" opacity="0.9"/><circle cx="23" cy="8" r="1" fill="#EDE8FA" opacity="0.9"/><path d="M17 12L18 15.5M23 12L22 15.5" stroke="#A78BFA" stroke-width="1.6" stroke-linecap="round"/><circle cx="20" cy="26" r="11" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><ellipse cx="16.5" cy="25" rx="2" ry="1.8" fill="#7C6FE0"/><ellipse cx="23.5" cy="25" rx="2" ry="1.8" fill="#7C6FE0"/><path d="M16 31Q20 28.5 24 31" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="13" cy="27" rx="2.5" ry="1.8" fill="#FECDD3" opacity="0.65"/><ellipse cx="27" cy="27" rx="2.5" ry="1.8" fill="#FECDD3" opacity="0.65"/><path d="M13 21Q16.5 18 20 20.5" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M20 20.5Q23.5 18 27 21" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/></svg>`,

  'だるい': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="12" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M13 19Q15 21.5 17 19" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M23 19Q25 21.5 27 19" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><ellipse cx="15" cy="19.5" rx="1.4" ry="1" fill="#7C6FE0" opacity="0.75"/><ellipse cx="25" cy="19.5" rx="1.4" ry="1" fill="#7C6FE0" opacity="0.75"/><path d="M14.5 27.5Q20 31 25.5 27.5" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="20.5" rx="2.2" ry="1.6" fill="#FECDD3" opacity="0.6"/><ellipse cx="26" cy="20.5" rx="2.2" ry="1.6" fill="#FECDD3" opacity="0.6"/><path d="M16 9Q18 7 20 9" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M21 8Q23 6 25 8" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.7"/><path d="M25.5 9.5Q27.5 7.5 29.5 9.5" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.6"/><path d="M12 15Q15 13 18 15" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.75"/><path d="M22 15Q25 13 28 15" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.75"/></svg>`,

  'めまいがする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="24" r="10" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><ellipse cx="17" cy="23" rx="1.9" ry="1.9" fill="#7C6FE0"/><ellipse cx="23" cy="23" rx="1.9" ry="1.9" fill="#7C6FE0"/><path d="M17 28.5Q20 26.5 23 28.5" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M11 7C9 10 9 13.5 12.5 13.5C16 13.5 16 10 13.5 10C11 10 11 13.5 14.5 15.5" stroke="#9B8FEA" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M29 7C31 10 31 13.5 27.5 13.5C24 13.5 24 10 26.5 10C29 10 29 13.5 25.5 15.5" stroke="#9B8FEA" stroke-width="1.7" stroke-linecap="round" fill="none"/><circle cx="20" cy="10" r="2.5" fill="#DDD6FE" stroke="#B39DFA" stroke-width="1.2"/><circle cx="20" cy="10" r="1" fill="#8B5CF6"/><path d="M14 19Q17 16.5 20 18.5" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20 18.5Q23 16.5 26 19" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '吐き気がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="23" r="10" fill="#D1FAE5" stroke="#6EE7B7" stroke-width="1.4"/><ellipse cx="16.5" cy="22" rx="1.9" ry="1.9" fill="#059669"/><ellipse cx="23.5" cy="22" rx="1.9" ry="1.9" fill="#059669"/><path d="M15 28Q17.5 24.5 20 26.5Q22.5 28.5 25 26" stroke="#059669" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="20.5" rx="2" ry="1.5" fill="#6EE7B7" opacity="0.65"/><ellipse cx="26" cy="20.5" rx="2" ry="1.5" fill="#6EE7B7" opacity="0.65"/><path d="M14 9L11 13M20 7V11M26 9L29 13" stroke="#A7F3D0" stroke-width="1.6" stroke-linecap="round"/><path d="M13.5 18Q16.5 15.5 19.5 17.5" stroke="#059669" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 17.5Q23.5 15.5 26.5 18" stroke="#059669" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '体が痛い': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L16 19H22L17 36L30 16H23Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.4" stroke-linejoin="round"/><circle cx="10" cy="11" r="3.5" fill="#FED7AA" stroke="#FB923C" stroke-width="1.2"/><circle cx="33" cy="26" r="3" fill="#FED7AA" stroke="#FB923C" stroke-width="1.2"/><circle cx="9" cy="28" r="2.5" fill="#EDE8FA" stroke="#A78BFA" stroke-width="1.2"/><circle cx="33" cy="12" r="2.5" fill="#EDE8FA" stroke="#A78BFA" stroke-width="1.2"/><circle cx="20" cy="22" r="1.5" fill="rgba(255,255,255,0.8)"/></svg>`,

  '眠れなかった': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 7C23 7 16 13 16 21C16 29 23 35 31 35C24 35 10 28 10 21C10 14 16 7 23 7C25.5 7 28 7.7 31 7Z" fill="#818CF8" stroke="#6366F1" stroke-width="1.4"/><circle cx="26" cy="21" r="2.8" fill="white"/><circle cx="26" cy="21" r="1.4" fill="#4338CA"/><circle cx="26.8" cy="20.3" r="0.7" fill="white"/><path d="M29 12L31 10M32 15.5L34.5 14.5M31.5 19L34.5 18" stroke="#FDE68A" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="9" r="1.5" fill="#FDE68A" opacity="0.75"/><circle cx="11" cy="15" r="1" fill="#FDE68A" opacity="0.55"/></svg>`,

  '食べられない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 26Q8 35 20 35Q32 35 32 26" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.5"/><ellipse cx="20" cy="26" rx="12" ry="4.5" fill="#DDD6FE" stroke="#8B5CF6" stroke-width="1.4"/><path d="M15 10L14 20M20 8V18M25 10L26 20" stroke="#B39DFA" stroke-width="1.5" stroke-linecap="round"/><path d="M13 12L23 21M23 12L13 21" stroke="#F9A8C9" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  // ── しんどい：ねむり ──
  '寝つけなかった': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 32Q3 24 20 24Q37 24 37 32V36H3Z" fill="#DDD6FE" stroke="#8B5CF6" stroke-width="1.4"/><ellipse cx="20" cy="28.5" rx="14" ry="3" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.2"/><circle cx="20" cy="20" r="9" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><circle cx="16.5" cy="19" r="1.9" fill="#7C6FE0"/><circle cx="23.5" cy="19" r="1.9" fill="#7C6FE0"/><circle cx="17.2" cy="18.3" r="0.65" fill="white"/><circle cx="24.2" cy="18.3" r="0.65" fill="white"/><path d="M17 24Q20 22.5 23 24" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="21" rx="2" ry="1.4" fill="#FECDD3" opacity="0.65"/><ellipse cx="26" cy="21" rx="2" ry="1.4" fill="#FECDD3" opacity="0.65"/><path d="M28 6H35L28 12H35" stroke="#C4B5FD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/><line x1="26" y1="14" x2="36" y2="4" stroke="#FCA5A5" stroke-width="2.2" stroke-linecap="round"/><path d="M14.5 16Q17.5 14 20.5 16" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75"/><path d="M19.5 16Q22.5 14 25.5 16" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75"/></svg>`,

  '夜中に起きた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 5C22 5 15 12 15 20C15 28 22 35 30 35C23 35 9 28 9 20C9 12 15 5 22 5C24.5 5 27 5.7 30 5Z" fill="#4338CA"/><circle cx="9" cy="9" r="1.3" fill="#FDE68A"/><circle cx="6" cy="22" r="1" fill="#FDE68A" opacity="0.85"/><circle cx="11" cy="33" r="0.9" fill="#FDE68A" opacity="0.7"/><path d="M5 16L6.2 13L7.4 16L10 17L7.4 18L6.2 21L5 18L2.4 17Z" fill="#FDE68A" opacity="0.85"/><circle cx="22" cy="20" r="8" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><circle cx="19" cy="19" r="1.7" fill="#7C6FE0"/><circle cx="25" cy="19" r="1.7" fill="#7C6FE0"/><circle cx="19.6" cy="18.5" r="0.6" fill="white"/><circle cx="25.6" cy="18.5" r="0.6" fill="white"/><ellipse cx="22" cy="23.5" rx="1.1" ry="1.6" fill="#7C6FE0"/><ellipse cx="16" cy="21" rx="1.7" ry="1.2" fill="#FECDD3" opacity="0.65"/><ellipse cx="28" cy="21" rx="1.7" ry="1.2" fill="#FECDD3" opacity="0.65"/><line x1="34" y1="7" x2="34" y2="13" stroke="#FCD34D" stroke-width="2" stroke-linecap="round"/><circle cx="34" cy="15.5" r="1.1" fill="#FCD34D"/></svg>`,

  '寝ても疲れがとれない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="11" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M14 21Q16.5 23.5 19 21" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M21 21Q23.5 23.5 26 21" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M14 24Q16.5 25 19 24" stroke="#A78BFA" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.65"/><path d="M21 24Q23.5 25 26 24" stroke="#A78BFA" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.65"/><path d="M16 28.5Q20 26.5 24 28.5" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none"/><ellipse cx="13.5" cy="24" rx="2" ry="1.4" fill="#FECDD3" opacity="0.55"/><ellipse cx="26.5" cy="24" rx="2" ry="1.4" fill="#FECDD3" opacity="0.55"/><path d="M29 6Q31 4 32 7Q32 10 30 10Q28 10 28.5 7.5Q29 5 29 6Z" fill="#7DD3FC" stroke="#0EA5E9" stroke-width="1"/><ellipse cx="9" cy="9" rx="5" ry="2.8" fill="#DDD6FE" opacity="0.75"/><ellipse cx="13" cy="11" rx="3.5" ry="2.2" fill="#DDD6FE" opacity="0.6"/><path d="M14 16.5Q17 14.5 20 16.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.7"/><path d="M20 16.5Q23 14.5 26 16.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.7"/></svg>`,

  '怖い夢を見た': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="22" cy="22" rx="13" ry="10" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.3"/><circle cx="9" cy="32" r="2" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.1"/><circle cx="6" cy="36" r="1.2" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1"/><path d="M16 17Q16 13 22 13Q28 13 28 17V29L26 27L24 29L22 27L20 29L18 27L16 29V17Z" fill="white" stroke="#8B5CF6" stroke-width="1.3" stroke-linejoin="round"/><ellipse cx="19.5" cy="19" rx="1.4" ry="1.6" fill="#7C6FE0"/><ellipse cx="24.5" cy="19" rx="1.4" ry="1.6" fill="#7C6FE0"/><path d="M19 23Q22 25.5 25 23" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="17" cy="21" rx="1.3" ry="0.9" fill="#FECDD3" opacity="0.7"/><ellipse cx="27" cy="21" rx="1.3" ry="0.9" fill="#FECDD3" opacity="0.7"/><path d="M5 7L6 5L7 7L9 7.5L7 8.5L6 10.5L5 8.5L3 7.5Z" fill="#FCA5A5" opacity="0.85"/><circle cx="34" cy="9" r="1" fill="#FCA5A5" opacity="0.7"/></svg>`,

  // ── しんどい：気持ち ──
  '不安な感じ': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="24" r="10" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><ellipse cx="16.5" cy="22.5" rx="2" ry="2" fill="#7C6FE0"/><ellipse cx="23.5" cy="22.5" rx="2" ry="2" fill="#7C6FE0"/><path d="M16.5 29Q20 26.5 23.5 29" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="13" cy="24" rx="2.3" ry="1.7" fill="#FECDD3" opacity="0.6"/><ellipse cx="27" cy="24" rx="2.3" ry="1.7" fill="#FECDD3" opacity="0.6"/><path d="M31 8Q33.5 11.5 31 14Q33.5 15.5 31 18" stroke="#C7D2FE" stroke-width="1.8" stroke-linecap="round" fill="none"/><circle cx="31" cy="20" r="2.2" fill="#C7D2FE"/><circle cx="28" cy="11" r="1.3" fill="#C7D2FE"/><path d="M13 18.5Q16.5 15.5 20 17.5" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M20 17.5Q23.5 15.5 27 18.5" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/></svg>`,

  '落ち込んでいる': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="24" r="10" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><ellipse cx="16.5" cy="23" rx="2" ry="2" fill="#7C6FE0"/><ellipse cx="23.5" cy="23" rx="2" ry="2" fill="#7C6FE0"/><path d="M16 29.5Q20 32.5 24 29.5" stroke="#7C6FE0" stroke-width="1.8" stroke-linecap="round" fill="none"/><ellipse cx="13" cy="25" rx="2.3" ry="1.7" fill="#FECDD3" opacity="0.6"/><ellipse cx="27" cy="25" rx="2.3" ry="1.7" fill="#FECDD3" opacity="0.6"/><path d="M12 7L11 13.5M18 5L17 11.5M24 6L23 12.5M30 8L29 14.5" stroke="#C7D2FE" stroke-width="1.7" stroke-linecap="round"/><ellipse cx="11.5" cy="14.5" rx="1.2" ry="1.8" fill="#BFDBFE"/><ellipse cx="17.5" cy="12.5" rx="1.2" ry="1.8" fill="#BFDBFE"/><ellipse cx="23.5" cy="13.5" rx="1.2" ry="1.8" fill="#BFDBFE"/><path d="M13 19Q16.5 16 20 18" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M20 18Q23.5 16 27 19" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/></svg>`,

  'ぼーっとする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="25" r="10" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M14 24Q16.5 25.5 19 24" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M21 24Q23.5 25.5 26 24" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M16.5 30H23.5" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="20" cy="13" rx="9" ry="5.5" fill="rgba(196,181,253,0.2)" stroke="#C4B5FD" stroke-width="1.3" stroke-dasharray="2.5 2"/><ellipse cx="20" cy="13" rx="6" ry="3.5" fill="rgba(196,181,253,0.15)" stroke="#A78BFA" stroke-width="1" stroke-dasharray="2 1.5"/><circle cx="20" cy="13" r="1.5" fill="#DDD6FE"/><path d="M13.5 21Q16.5 19.5 19.5 21" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.6"/><path d="M20.5 21Q23.5 19.5 26.5 21" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.6"/></svg>`,

  '何もしたくない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="30" rx="14" ry="7" fill="#DDD6FE" stroke="#8B5CF6" stroke-width="1.4"/><circle cx="20" cy="21" r="9" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M15 19.5Q17 22 19 19.5" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M21 19.5Q23 22 25 19.5" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M16 25Q20 23 24 25" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="21" rx="2.2" ry="1.6" fill="#FECDD3" opacity="0.6"/><ellipse cx="26" cy="21" rx="2.2" ry="1.6" fill="#FECDD3" opacity="0.6"/><path d="M9 29Q7 33.5 9.5 36.5" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M31 29Q33 33.5 30.5 36.5" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M13.5 15Q17 13.5 20.5 15" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.65"/><path d="M19.5 15Q23 13.5 26.5 15" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.65"/></svg>`,

  'イライラする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="24" r="10" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.4"/><path d="M15 21L16.5 19.5L15 18" stroke="#EF4444" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 21L23.5 19.5L25 18" stroke="#EF4444" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 29.5Q20 32 25 29.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="23" rx="2.2" ry="1.6" fill="#FCA5A5" opacity="0.65"/><ellipse cx="26" cy="23" rx="2.2" ry="1.6" fill="#FCA5A5" opacity="0.65"/><path d="M11 7L13.5 13M20 5V11M29 7L26.5 13" stroke="#FCA5A5" stroke-width="2.2" stroke-linecap="round"/><path d="M13 16L18.5 18.5" stroke="#EF4444" stroke-width="1.9" stroke-linecap="round" fill="none"/><path d="M21.5 18.5L27 16" stroke="#EF4444" stroke-width="1.9" stroke-linecap="round" fill="none"/></svg>`,

  '泣きたい感じ': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="10" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M15 20Q17 18 19 20" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M21 20Q23 18 25 20" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M15 27.5Q20 30.5 25 27.5" stroke="#7C6FE0" stroke-width="1.8" stroke-linecap="round" fill="none"/><ellipse cx="13" cy="23" rx="2.3" ry="1.7" fill="#FECDD3" opacity="0.6"/><ellipse cx="27" cy="23" rx="2.3" ry="1.7" fill="#FECDD3" opacity="0.6"/><path d="M26 24.5L27 30L27.5 34" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="27.5" cy="35.5" rx="2.2" ry="2.8" fill="#BFDBFE"/><path d="M14 16Q17 13.5 20 15.5" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M20 15.5Q23 13.5 26 16" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/></svg>`,

  // ── しんどい：状況 ──
  '朝起きられない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="24" width="30" height="12" rx="5" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><rect x="5" y="20" width="30" height="6" rx="3" fill="#DDD6FE" stroke="#8B5CF6" stroke-width="1.2"/><circle cx="20" cy="18.5" r="7.5" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M16.5 18Q18.5 20 20.5 18" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M19.5 18Q21.5 20 23.5 18" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M30 7.5Q31.5 5.5 33 7.5Q33 9.5 31.5 9.5Q30 9.5 30 7.5Z" fill="#B39DFA" opacity="0.75"/><path d="M33 5Q34.5 3 36 5Q36 7 34.5 7Q33 7 33 5Z" fill="#C4B5FD" opacity="0.6"/><path d="M36 3Q37.5 1 39 3Q39 5 37.5 5Q36 5 36 3Z" fill="#DDD6FE" opacity="0.5"/><path d="M15 14Q18 12 21 13.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75"/><path d="M19 13.5Q22 12 25 14" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75"/></svg>`,

  '学校に行けない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5L35 15V36H5V15L20 5Z" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M20 5L35 15H5L20 5Z" fill="#DDD6FE" stroke="#8B5CF6" stroke-width="1.4"/><rect x="13" y="21" width="14" height="15" rx="2" fill="white" stroke="#8B5CF6" stroke-width="1.2"/><circle cx="20" cy="28.5" r="1.5" fill="#8B5CF6"/><path d="M14 23L26 36M26 23L14 36" stroke="#FCA5A5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  '集中できない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="24" r="9" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><ellipse cx="17" cy="23" rx="1.7" ry="1.7" fill="#7C6FE0"/><ellipse cx="23" cy="23" rx="1.7" ry="1.7" fill="#7C6FE0"/><path d="M17 28H23" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="8" r="4" fill="#FBCFE8" stroke="#F472B6" stroke-width="1.1"/><circle cx="32" cy="7" r="3.5" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.1"/><circle cx="34" cy="19" r="3" fill="#BFDBFE" stroke="#60A5FA" stroke-width="1"/><circle cx="7" cy="19" r="3" fill="#D1FAE5" stroke="#34D399" stroke-width="1"/><path d="M13.5 19Q17 16.5 20 18.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20 18.5Q23 16.5 26.5 19" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '外に出たくない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="5" width="26" height="32" rx="4" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><rect x="12" y="9" width="7" height="9" rx="2.5" fill="white" stroke="#8B5CF6" stroke-width="1.2"/><rect x="21" y="9" width="7" height="9" rx="2.5" fill="white" stroke="#8B5CF6" stroke-width="1.2"/><rect x="14" y="20" width="12" height="17" rx="3" fill="white" stroke="#8B5CF6" stroke-width="1.2"/><circle cx="23.5" cy="29.5" r="1.8" fill="#8B5CF6"/><path d="M17 27Q20 24 23 27" stroke="#8B5CF6" stroke-width="1.3" stroke-linecap="round" fill="none"/></svg>`,

  '人と話したくない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H27C28.1 6 29 6.9 29 8V22C29 23.1 28.1 24 27 24H10L5 30V8C5 6.9 5.9 6 6 6Z" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><path d="M12 14L23 22M23 14L12 22" stroke="#FCA5A5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  // ── いい感じ：体 ──
  '体が軽い': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="23" r="9.5" fill="#BAE6FD" stroke="#38BDF8" stroke-width="1.4"/><path d="M15.5 21.5Q17.5 19 19.5 21.5" stroke="#0369A1" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M20.5 21.5Q22.5 19 24.5 21.5" stroke="#0369A1" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M16 27Q20 30 24 27" stroke="#0369A1" stroke-width="1.7" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="22" rx="2.2" ry="1.6" fill="#FCA5A5" opacity="0.65"/><ellipse cx="26" cy="22" rx="2.2" ry="1.6" fill="#FCA5A5" opacity="0.65"/><path d="M9 13.5L8 9.5M9 13.5L12.5 11.5" stroke="#7DD3FC" stroke-width="1.9" stroke-linecap="round"/><path d="M20 10V6" stroke="#7DD3FC" stroke-width="1.9" stroke-linecap="round"/><path d="M31 13.5L32 9.5M31 13.5L27.5 11.5" stroke="#7DD3FC" stroke-width="1.9" stroke-linecap="round"/><ellipse cx="7" cy="8" rx="3.5" ry="2" fill="#E0F2FE"/><ellipse cx="33" cy="8" rx="3.5" ry="2" fill="#E0F2FE"/><path d="M14.5 17.5Q17.5 15 20.5 17.5" stroke="#0369A1" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M19.5 17.5Q22.5 15 25.5 17.5" stroke="#0369A1" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  'よく眠れた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="13" fill="#1E1B4B" opacity="0.07"/><path d="M32 7C24 7 17 13 17 21C17 29 24 35 32 35C25 35 10 28 10 21C10 14 17 7 24 7C26.5 7 29 7.7 32 7Z" fill="#818CF8" stroke="#6366F1" stroke-width="1.4"/><circle cx="26" cy="21" r="3" fill="white"/><circle cx="26" cy="21" r="1.5" fill="#4338CA"/><circle cx="26.8" cy="20.2" r="0.8" fill="white"/><path d="M29 12L31 10M32.5 15.5L35 14.5M32 19L35 18" stroke="#FDE68A" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="9" r="1.5" fill="#FDE68A" opacity="0.8"/><circle cx="11" cy="16" r="1" fill="#FDE68A" opacity="0.6"/><circle cx="35" cy="28" r="1.2" fill="#FDE68A" opacity="0.65"/></svg>`,

  '食欲がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 27Q7 36 20 36Q33 36 33 27" fill="#FED7AA" stroke="#FB923C" stroke-width="1.5"/><ellipse cx="20" cy="27" rx="13" ry="4.5" fill="#FDBA74" stroke="#FB923C" stroke-width="1.5"/><path d="M14 21Q16 18 18 21" stroke="#FB923C" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M19 19Q21 16 23 19" stroke="#FB923C" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M24 21Q26 18 28 21" stroke="#FB923C" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="20" cy="16" r="4.5" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.2"/><ellipse cx="18.5" cy="15" rx="1.1" ry="1.1" fill="#92400E"/><ellipse cx="21.5" cy="15" rx="1.1" ry="1.1" fill="#92400E"/><path d="M17.5 17.5Q20 19 22.5 17.5" stroke="#92400E" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M17.5 12.5Q18.5 11.5 19.5 12.5" stroke="#92400E" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 12.5Q21.5 11.5 22.5 12.5" stroke="#92400E" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '頭がすっきり': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="24" r="10" fill="#D1FAE5" stroke="#34D399" stroke-width="1.4"/><ellipse cx="16.5" cy="23" rx="1.8" ry="1.8" fill="#059669"/><ellipse cx="23.5" cy="23" rx="1.8" ry="1.8" fill="#059669"/><path d="M16 28.5Q20 31 24 28.5" stroke="#059669" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="21.5" rx="2.2" ry="1.6" fill="#FCA5A5" opacity="0.65"/><ellipse cx="26" cy="21.5" rx="2.2" ry="1.6" fill="#FCA5A5" opacity="0.65"/><path d="M20 12V8M26 13L29 10M14 13L11 10" stroke="#6EE7B7" stroke-width="2.3" stroke-linecap="round"/><circle cx="20" cy="7" r="2.5" fill="#A7F3D0"/><circle cx="29.5" cy="9.5" r="2" fill="#A7F3D0"/><circle cx="10.5" cy="9.5" r="2" fill="#A7F3D0"/><path d="M13.5 19Q16.5 16.5 19.5 19" stroke="#059669" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 19Q23.5 16.5 26.5 19" stroke="#059669" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '体に力がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 22C8 17 11 14 14 14C15.5 14 17 14.7 18 16L20 19L22 16C23 14.7 24.5 14 26 14C29 14 32 17 32 22C32 28 26 33 20 37C14 33 8 28 8 22Z" fill="#FECDD3" stroke="#FB7185" stroke-width="1.4"/><circle cx="20" cy="15.5" r="6.5" fill="#FED7AA" stroke="#FB923C" stroke-width="1.3"/><ellipse cx="17.5" cy="14.5" rx="1.5" ry="1.5" fill="#92400E"/><ellipse cx="22.5" cy="14.5" rx="1.5" ry="1.5" fill="#92400E"/><path d="M17 18Q20 20 23 18" stroke="#92400E" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="15" cy="13" rx="2" ry="1.4" fill="#FCA5A5" opacity="0.65"/><ellipse cx="25" cy="13" rx="2" ry="1.4" fill="#FCA5A5" opacity="0.65"/><path d="M15.5 11.5Q17.5 9.5 19.5 11.5" stroke="#92400E" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 11.5Q22.5 9.5 24.5 11.5" stroke="#92400E" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '気分がいい': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="11" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5"/><ellipse cx="16.5" cy="18.5" rx="1.9" ry="1.9" fill="#92400E"/><ellipse cx="23.5" cy="18.5" rx="1.9" ry="1.9" fill="#92400E"/><path d="M14 24.5Q20 29.5 26 24.5" stroke="#92400E" stroke-width="2.3" stroke-linecap="round" fill="none"/><ellipse cx="13" cy="22.5" rx="2.5" ry="2" fill="#FCA5A5" opacity="0.7"/><ellipse cx="27" cy="22.5" rx="2.5" ry="2" fill="#FCA5A5" opacity="0.7"/><path d="M20 7V5M27.5 9.5L30 7M12.5 9.5L10 7M33 20H36M4 20H7M28.5 29.5L31 32M11.5 29.5L9 32" stroke="#FCD34D" stroke-width="2" stroke-linecap="round"/><path d="M13.5 15Q16.5 12.5 19.5 15" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 15Q23.5 12.5 26.5 15" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  // ── いい感じ：ねむり ──
  'すぐ眠れた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="22" r="10" fill="#EDE8FA" stroke="#A78BFA" stroke-width="1.4"/><path d="M12 21Q14.5 18 17 21" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M19 21Q21.5 18 24 21" stroke="#7C6FE0" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M14 27Q18 29.5 22 27" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="11.5" cy="24" rx="2" ry="1.4" fill="#FECDD3" opacity="0.7"/><ellipse cx="24.5" cy="24" rx="2" ry="1.4" fill="#FECDD3" opacity="0.7"/><path d="M27 5H35L27 13H35" stroke="#A78BFA" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 16H35L30 20H35" stroke="#C4B5FD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><path d="M32 23H36L32 26H36" stroke="#DDD6FE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/><path d="M35 9L36 7L37 9L36 11Z" fill="#FDE68A"/><path d="M5 8L5.8 6.5L6.6 8L8 8.5L6.6 9L5.8 10.5L5 9L3.6 8.5Z" fill="#FDE68A" opacity="0.8"/></svg>`,

  'すっきり起きた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="11" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5"/><path d="M20 5V2M30 8L32.5 5.5M35 20H38M30 32L32.5 34.5M20 35V38M10 32L7.5 34.5M5 20H2M10 8L7.5 5.5" stroke="#FCD34D" stroke-width="2.4" stroke-linecap="round"/><path d="M14 18Q16.5 15 19 18" stroke="#92400E" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M21 18Q23.5 15 26 18" stroke="#92400E" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M13 24Q20 30 27 24" stroke="#92400E" stroke-width="2.5" stroke-linecap="round" fill="none"/><ellipse cx="13" cy="22.5" rx="2.4" ry="1.7" fill="#FCA5A5" opacity="0.78"/><ellipse cx="27" cy="22.5" rx="2.4" ry="1.7" fill="#FCA5A5" opacity="0.78"/><path d="M14 14Q17 11.5 20 14" stroke="#92400E" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20 14Q23 11.5 26 14" stroke="#92400E" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  'いい夢を見た': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="24" rx="14" ry="7.5" fill="white" stroke="#A78BFA" stroke-width="1.4"/><ellipse cx="11" cy="22" rx="5" ry="4.5" fill="white" stroke="#A78BFA" stroke-width="1.3"/><ellipse cx="29" cy="22" rx="5" ry="4.5" fill="white" stroke="#A78BFA" stroke-width="1.3"/><ellipse cx="20" cy="19" rx="8" ry="5" fill="white" stroke="#A78BFA" stroke-width="1.3"/><path d="M16 24Q18 22 20 24" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M21 24Q23 22 25 24" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M18 27.5Q20.5 29 23 27.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="15" cy="26" rx="1.5" ry="1" fill="#FECDD3" opacity="0.75"/><ellipse cx="25" cy="26" rx="1.5" ry="1" fill="#FECDD3" opacity="0.75"/><path d="M31 7Q33 4 35 7Q33 10 31 12Q29 10 27 7Q29 4 31 7Z" fill="#FBCFE8" stroke="#F472B6" stroke-width="1"/><path d="M7 6L8 4L9 6L11 6.5L9 7.5L8 9.5L7 7.5L5 6.5Z" fill="#FDE68A"/><circle cx="35" cy="14" r="1.1" fill="#FDE68A"/><circle cx="6" cy="14" r="0.9" fill="#FBCFE8" opacity="0.85"/></svg>`,

  // ── いい感じ：気持ち ──
  '楽しい気分': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="10" fill="#EDE8FA" stroke="#A78BFA" stroke-width="1.4"/><path d="M15 20Q17 18 19 20" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M21 20Q23 18 25 20" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M14.5 26Q17.5 31 20 31Q22.5 31 25.5 26" stroke="#7C6FE0" stroke-width="2.1" stroke-linecap="round" fill="none"/><circle cx="14.5" cy="26" r="1.2" fill="#7C6FE0"/><circle cx="25.5" cy="26" r="1.2" fill="#7C6FE0"/><ellipse cx="14" cy="21" rx="2" ry="1.5" fill="#FECDD3" opacity="0.7"/><ellipse cx="26" cy="21" rx="2" ry="1.5" fill="#FECDD3" opacity="0.7"/><circle cx="9" cy="8" r="3.5" fill="#FDE68A" opacity="0.95"/><circle cx="20" cy="6" r="2.5" fill="#A7F3D0" opacity="0.95"/><circle cx="31" cy="8" r="3" fill="#FBCFE8" opacity="0.95"/><circle cx="34" cy="17" r="2" fill="#FCA5A5" opacity="0.8"/><path d="M13.5 16Q16.5 13.5 19.5 16" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M20.5 16Q23.5 13.5 26.5 16" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.85"/></svg>`,

  '落ち着いている': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="16" r="8.5" fill="#D1FAE5" stroke="#34D399" stroke-width="1.4"/><path d="M16.5 15Q18.5 17 20.5 15Q22.5 17 24.5 15" stroke="#059669" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="16.5" cy="13" rx="1.5" ry="1.5" fill="#059669"/><ellipse cx="23.5" cy="13" rx="1.5" ry="1.5" fill="#059669"/><ellipse cx="14" cy="14.5" rx="1.8" ry="1.3" fill="#FCA5A5" opacity="0.6"/><ellipse cx="26" cy="14.5" rx="1.8" ry="1.3" fill="#FCA5A5" opacity="0.6"/><path d="M5 29Q10 22 17 26Q24 30 30 23Q36 16 37 23" stroke="#6EE7B7" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M5 35Q10 28 17 32Q24 36 30 29Q36 22 37 29" stroke="#A7F3D0" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.7"/><path d="M14 10Q16.5 8 19 10" stroke="#059669" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M21 10Q23.5 8 26 10" stroke="#059669" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  'やる気がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 3L23.5 13.5H34.5L25.8 19.8L29.3 30.5L20 24L10.7 30.5L14.2 19.8L5.5 13.5H16.5Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5" stroke-linejoin="round"/><circle cx="20" cy="19" r="4.5" fill="white" opacity="0.75"/><circle cx="20" cy="19" r="2.2" fill="#F59E0B" opacity="0.9"/><path d="M7 7L5 5M33 7L35 5M20 5V3" stroke="#FCD34D" stroke-width="1.6" stroke-linecap="round" opacity="0.65"/></svg>`,

  '嬉しい感じ': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5C17 12 11 12 6 11C7 17 5 22 3 25C8 26 11 31 10 37C15 34 19 36 20 40C21 36 25 34 30 37C29 31 32 26 37 25C35 22 33 17 34 11C29 12 23 12 20 5Z" fill="#FBCFE8" stroke="#F472B6" stroke-width="1.3"/><circle cx="20" cy="21" r="5.5" fill="white" opacity="0.9"/><ellipse cx="18.5" cy="19.5" rx="1.3" ry="1.3" fill="#DB2777"/><ellipse cx="21.5" cy="19.5" rx="1.3" ry="1.3" fill="#DB2777"/><path d="M17.5 22.5Q20 24.5 22.5 22.5" stroke="#DB2777" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="16" cy="20.5" rx="1.5" ry="1.1" fill="#FCA5A5" opacity="0.6"/><ellipse cx="24" cy="20.5" rx="1.5" ry="1.1" fill="#FCA5A5" opacity="0.6"/><path d="M17 16.5Q18.5 14.5 20 16.5" stroke="#DB2777" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20 16.5Q21.5 14.5 23 16.5" stroke="#DB2777" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  'ほっとしている': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="24" width="20" height="13" rx="6" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.4"/><rect x="7" y="21" width="26" height="5.5" rx="2.5" fill="#FBBF24" stroke="#F59E0B" stroke-width="1.2"/><path d="M15 21Q14 14 20 12Q26 14 25 21" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.2"/><path d="M20.5 12Q21.5 7.5 24.5 5.5" stroke="#FB923C" stroke-width="1.9" stroke-linecap="round" fill="none"/><path d="M15 12Q14 7.5 17 5.5" stroke="#FBBF24" stroke-width="1.7" stroke-linecap="round" fill="none"/><circle cx="20" cy="29" r="4" fill="#FBBF24"/><ellipse cx="18.5" cy="27.5" rx="1" ry="1" fill="#92400E"/><ellipse cx="21.5" cy="27.5" rx="1" ry="1" fill="#92400E"/><path d="M18 30Q20 31.5 22 30" stroke="#92400E" stroke-width="1.2" stroke-linecap="round" fill="none"/><path d="M17.5 25Q18.5 24 19.5 25" stroke="#92400E" stroke-width="1.1" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 25Q21.5 24 22.5 25" stroke="#92400E" stroke-width="1.1" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '安心している': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4C13 7 7 7 7 7V23C7 30 13 35 20 37C27 35 33 30 33 23V7C33 7 27 7 20 4Z" fill="#EDE8FA" stroke="#8B5CF6" stroke-width="1.4"/><circle cx="20" cy="21" r="8.5" fill="white" stroke="#A78BFA" stroke-width="1.2"/><ellipse cx="17" cy="19.5" rx="1.6" ry="1.6" fill="#7C6FE0"/><ellipse cx="23" cy="19.5" rx="1.6" ry="1.6" fill="#7C6FE0"/><path d="M16.5 24.5Q20 27 23.5 24.5" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="15" cy="18" rx="2" ry="1.4" fill="#FECDD3" opacity="0.65"/><ellipse cx="25" cy="18" rx="2" ry="1.4" fill="#FECDD3" opacity="0.65"/><path d="M14.5 15.5Q17 13.5 19.5 15.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M20.5 15.5Q23 13.5 25.5 15.5" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  // ── いい感じ：状況 ──
  '朝起きられた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 23H35" stroke="#FDE68A" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/><path d="M5 27H35" stroke="#FED7AA" stroke-width="1.2" stroke-linecap="round" opacity="0.45"/><circle cx="20" cy="20" r="9" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5"/><path d="M15.5 19.5Q17.5 17 19.5 19.5" stroke="#92400E" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M20.5 19.5Q22.5 17 24.5 19.5" stroke="#92400E" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M16 25Q20 28.5 24 25" stroke="#92400E" stroke-width="2.1" stroke-linecap="round" fill="none"/><ellipse cx="14.5" cy="22.5" rx="2" ry="1.5" fill="#FCA5A5" opacity="0.7"/><ellipse cx="25.5" cy="22.5" rx="2" ry="1.5" fill="#FCA5A5" opacity="0.7"/><path d="M20 9V6M27.5 11L30.5 8.5M12.5 11L9.5 8.5M33 20H36M4 20H7" stroke="#FCD34D" stroke-width="2.1" stroke-linecap="round"/><path d="M14.5 14.5Q17.5 12 20.5 14.5" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/><path d="M19.5 14.5Q22.5 12 25.5 14.5" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/></svg>`,

  '学校に行けた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5L35 15V36H5V15L20 5Z" fill="#BFDBFE" stroke="#60A5FA" stroke-width="1.4"/><path d="M20 5L35 15H5L20 5Z" fill="#93C5FD" stroke="#60A5FA" stroke-width="1.4"/><rect x="13" y="21" width="14" height="15" rx="2" fill="white" stroke="#60A5FA" stroke-width="1.2"/><circle cx="20" cy="28.5" r="1.5" fill="#60A5FA"/><path d="M13 29L18 34.5L29 22" stroke="#34D399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  '集中できた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="none" stroke="#FDE68A" stroke-width="3"/><circle cx="20" cy="20" r="11" fill="none" stroke="#FCD34D" stroke-width="3"/><circle cx="20" cy="20" r="7" fill="none" stroke="#FBBF24" stroke-width="3"/><circle cx="20" cy="20" r="3.5" fill="#F59E0B"/><path d="M33 7L37 3" stroke="#FCD34D" stroke-width="2" stroke-linecap="round" opacity="0.8"/><path d="M20 4V7" stroke="#FCD34D" stroke-width="2" stroke-linecap="round" opacity="0.7"/><path d="M34 20H37" stroke="#FCD34D" stroke-width="2" stroke-linecap="round" opacity="0.7"/></svg>`,

  '外に出られた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="6" width="21" height="31" rx="4" fill="#BFDBFE" stroke="#60A5FA" stroke-width="1.4"/><rect x="11" y="11" width="6.5" height="8" rx="2" fill="white" stroke="#60A5FA" stroke-width="1.2"/><rect x="19.5" y="11" width="6.5" height="8" rx="2" fill="white" stroke="#60A5FA" stroke-width="1.2"/><rect x="12.5" y="23" width="10" height="14" rx="2.5" fill="white" stroke="#60A5FA" stroke-width="1.2"/><circle cx="21" cy="31.5" r="1.5" fill="#60A5FA"/><circle cx="30" cy="17" r="7" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.4"/><path d="M30 11V9M35.5 13.5L37.5 12M35.5 20.5L37.5 22M30 23V25M24.5 20.5L22.5 22M24.5 13.5L22.5 12" stroke="#FCD34D" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  '人と話せた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5H22C23.1 5 24 5.9 24 7V18C24 19.1 23.1 20 22 20H8L4 25V7C4 5.9 4.9 5 5 5Z" fill="#EDE8FA" stroke="#A78BFA" stroke-width="1.4"/><ellipse cx="10" cy="12.5" rx="1.8" ry="1.8" fill="#7C6FE0"/><ellipse cx="14" cy="12.5" rx="1.8" ry="1.8" fill="#7C6FE0"/><ellipse cx="18" cy="12.5" rx="1.8" ry="1.8" fill="#7C6FE0"/><path d="M16 14H30C31.1 14 32 14.9 32 16V27C32 28.1 31.1 29 30 29H18L14 34V16C14 14.9 14.9 14 16 14Z" fill="#FBCFE8" stroke="#F472B6" stroke-width="1.3"/><ellipse cx="20" cy="21.5" rx="1.5" ry="1.5" fill="#DB2777"/><ellipse cx="24" cy="21.5" rx="1.5" ry="1.5" fill="#DB2777"/><ellipse cx="28" cy="21.5" rx="1.5" ry="1.5" fill="#DB2777"/></svg>`,

  // ── うまく言えない ──
  'なんとなくしんどい': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="9" cy="11" rx="6" ry="2.4" fill="#DDD6FE" opacity="0.65"/><ellipse cx="14" cy="8" rx="5" ry="2" fill="#DDD6FE" opacity="0.55"/><ellipse cx="29" cy="10" rx="6" ry="2.4" fill="#DDD6FE" opacity="0.6"/><ellipse cx="33" cy="13" rx="4" ry="1.8" fill="#DDD6FE" opacity="0.5"/><circle cx="20" cy="22" r="9" fill="#EDE9F2" stroke="#B0A8C0" stroke-width="1.4"/><path d="M14.5 21Q16.5 22.5 18.5 21" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M21.5 21Q23.5 22.5 25.5 21" stroke="#7C6FE0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M16 27Q20 25.5 24 27" stroke="#7C6FE0" stroke-width="1.4" stroke-linecap="round" fill="none"/><ellipse cx="13.5" cy="23" rx="1.8" ry="1.3" fill="#FECDD3" opacity="0.55"/><ellipse cx="26.5" cy="23" rx="1.8" ry="1.3" fill="#FECDD3" opacity="0.55"/><path d="M14 17Q17 15.5 20 17" stroke="#A8A4B0" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.7"/><path d="M20 17Q23 15.5 26 17" stroke="#A8A4B0" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.7"/></svg>`,

  '言葉にならない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11Q6 7 10 7H30Q34 7 34 11V22Q34 26 30 26H17L11 32V26H10Q6 26 6 22V11Z" fill="white" stroke="#A8A4B0" stroke-width="1.4" stroke-linejoin="round"/><circle cx="13" cy="16.5" r="2" fill="#A8A4B0" opacity="0.7"/><circle cx="20" cy="16.5" r="2" fill="#A8A4B0" opacity="0.85"/><circle cx="27" cy="16.5" r="2" fill="#A8A4B0" opacity="0.55"/><circle cx="13" cy="22" r="1.1" fill="#DDD6FE"/><circle cx="20" cy="22" r="0.9" fill="#DDD6FE" opacity="0.7"/><circle cx="27" cy="22" r="1.2" fill="#DDD6FE"/></svg>`,

  'いつもと違う': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="20" r="7.5" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.3"/><circle cx="9" cy="19" r="1.1" fill="#92400E"/><circle cx="13" cy="19" r="1.1" fill="#92400E"/><path d="M9 22Q11 24 13 22" stroke="#92400E" stroke-width="1.3" stroke-linecap="round" fill="none"/><ellipse cx="7" cy="20.5" rx="1.5" ry="1" fill="#FCA5A5" opacity="0.7"/><ellipse cx="15" cy="20.5" rx="1.5" ry="1" fill="#FCA5A5" opacity="0.7"/><path d="M20 17Q22 19 20 21Q18 23 20 25" stroke="#A8A4B0" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M23 18.5L25 17M25 17L23 15.5M25 17H21" stroke="#A8A4B0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="32" cy="20" r="7.5" fill="#EDE9F2" stroke="#B0A8C0" stroke-width="1.3"/><path d="M29.5 19Q30.5 18 31.5 19" stroke="#7C6FE0" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M32.5 19Q33.5 18 34.5 19" stroke="#7C6FE0" stroke-width="1.3" stroke-linecap="round" fill="none"/><line x1="29" y1="23" x2="35" y2="23" stroke="#7C6FE0" stroke-width="1.3" stroke-linecap="round"/><ellipse cx="29.5" cy="20.5" rx="1.4" ry="1" fill="#FECDD3" opacity="0.55"/><ellipse cx="34.5" cy="20.5" rx="1.4" ry="1" fill="#FECDD3" opacity="0.55"/></svg>`,

  'もやもやする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22Q5 18 9 14Q12 11 16 13Q19 9 24 12Q29 9 32 14Q35 19 31 22Q35 26 31 30Q26 33 22 30Q17 33 13 30Q8 28 9 23Q5 22 9 22Z" fill="#E8E5EE" stroke="#A8A0B5" stroke-width="1.4" stroke-linejoin="round"/><path d="M15 21Q18 17 22 20Q25 23 23 26Q20 28 19 25Q19 22 21 22Q22 22 22 23" stroke="#7C6FE0" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="14" cy="17" r="0.9" fill="#C4B5FD" opacity="0.85"/><circle cx="29" cy="18" r="0.9" fill="#C4B5FD" opacity="0.7"/><circle cx="27" cy="29" r="1" fill="#DDD6FE" opacity="0.75"/></svg>`,
};

const WELCOME_SVG = `<svg viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wg" x1="15" y1="5" x2="75" y2="95" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#C4B5FD"/><stop offset="48%" stop-color="#A78BFA"/><stop offset="100%" stop-color="#8B5CF6"/></linearGradient><radialGradient id="wh" cx="35%" cy="25%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,0.42)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><path d="M45 6C22 6 8 23 8 42C8 57 14 68 20 75C26 82 32 88 38 92C41 94 43 96 45 96C47 96 49 94 52 92C58 88 64 82 70 75C76 68 82 57 82 42C82 23 68 6 45 6Z" fill="url(#wg)"/><ellipse cx="34" cy="24" rx="16" ry="10" fill="url(#wh)"/><path d="M9 58Q2 66 5 74" stroke="#B39DFA" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="5.5" cy="75.5" r="5.5" fill="#C4B5FD"/><path d="M81 58Q88 66 85 74" stroke="#B39DFA" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="84.5" cy="75.5" r="5.5" fill="#C4B5FD"/><ellipse cx="31" cy="41" rx="8.5" ry="9.5" fill="white"/><ellipse cx="59" cy="41" rx="8.5" ry="9.5" fill="white"/><circle cx="32" cy="42.5" r="5.5" fill="#1E1B2E"/><circle cx="60" cy="42.5" r="5.5" fill="#1E1B2E"/><circle cx="34.5" cy="40" r="2.3" fill="white"/><circle cx="62.5" cy="40" r="2.3" fill="white"/><circle cx="31.5" cy="45" r="1.2" fill="rgba(255,255,255,0.55)"/><circle cx="59.5" cy="45" r="1.2" fill="rgba(255,255,255,0.55)"/><path d="M23 31Q31 26 39 31" stroke="white" stroke-width="2.3" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M51 31Q59 26 67 31" stroke="white" stroke-width="2.3" stroke-linecap="round" fill="none" opacity="0.85"/><path d="M29 57Q45 69 61 57" stroke="white" stroke-width="3.5" stroke-linecap="round" fill="none"/><ellipse cx="19" cy="52" rx="10" ry="6.5" fill="#F9A8C9" opacity="0.55"/><ellipse cx="71" cy="52" rx="10" ry="6.5" fill="#F9A8C9" opacity="0.55"/><circle cx="10" cy="54" r="6" fill="#B39DFA" opacity="0.88"/><circle cx="80" cy="54" r="6" fill="#B39DFA" opacity="0.88"/><circle cx="10" cy="54" r="2.2" fill="rgba(255,255,255,0.38)"/><circle cx="80" cy="54" r="2.2" fill="rgba(255,255,255,0.38)"/><path d="M74 12L75.5 8L77 12L81 13.5L77 15L75.5 19L74 15L70 13.5Z" fill="#FDE68A" opacity="0.92"/><path d="M12 14L13.2 11L14.4 14L17.5 15L14.4 16L13.2 19L12 16L8.8 15Z" fill="#FDE68A" opacity="0.8"/><circle cx="78" cy="70" r="2" fill="rgba(196,181,253,0.6)"/><circle cx="7" cy="36" r="1.5" fill="rgba(255,255,255,0.3)"/><circle cx="83" cy="32" r="1.5" fill="rgba(255,255,255,0.25)"/></svg>`;

const TOGGLE_SVG_UNWELL = `<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="9.5" fill="#EDE8FA" stroke="currentColor" stroke-width="1.3"/><path d="M7 8.5Q8.5 7 10 8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.55"/><path d="M12 8.5Q13.5 7 15 8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.55"/><ellipse cx="8.5" cy="10.2" rx="1.6" ry="1.3" fill="currentColor"/><ellipse cx="13.5" cy="10.2" rx="1.6" ry="1.3" fill="currentColor"/><path d="M8 14.5Q11 12.5 14 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`;

const TOGGLE_SVG_GOOD = `<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="9.5" fill="#FDE68A" stroke="currentColor" stroke-width="1.3"/><path d="M7 9.5Q8.5 7.5 10 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M12 9.5Q13.5 7.5 15 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M7 13.5Q11 17.5 15 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" fill="none"/><ellipse cx="6.5" cy="13" rx="2" ry="1.3" fill="#FCA5A5" opacity="0.72"/><ellipse cx="15.5" cy="13" rx="2" ry="1.3" fill="#FCA5A5" opacity="0.72"/><circle cx="17.5" cy="5.5" r="1.4" fill="currentColor" opacity="0.35"/></svg>`;

const injectIcons = () => {
  document.querySelectorAll('.sel-card').forEach(card => {
    const val    = card.dataset.value;
    const iconEl = card.querySelector('.sel-card-icon');
    if (ICONS[val] && iconEl) iconEl.innerHTML = ICONS[val];
  });

  const welcomeIcon = document.querySelector('.welcome-icon');
  if (welcomeIcon) welcomeIcon.innerHTML = WELCOME_SVG;

  const loadingChar = document.getElementById('loading-char');
  if (loadingChar) loadingChar.innerHTML = WELCOME_SVG;

  const toggleUnwell = document.querySelector('#toggle-unwell .toggle-emoji');
  if (toggleUnwell) toggleUnwell.innerHTML = TOGGLE_SVG_UNWELL;

  const toggleGood = document.querySelector('#toggle-good .toggle-emoji');
  if (toggleGood) toggleGood.innerHTML = TOGGLE_SVG_GOOD;
};

const spawnWelcomeStars = () => {
  const wrap = document.querySelector('.welcome-wrap');
  if (!wrap) return;
  const configs = [
    { size: 7, top: '12%', left: '8%',  dur: '3.2s', delay: '0s'   },
    { size: 5, top: '18%', left: '88%', dur: '2.8s', delay: '0.6s' },
    { size: 9, top: '72%', left: '6%',  dur: '4.0s', delay: '1.1s' },
    { size: 6, top: '80%', left: '90%', dur: '3.5s', delay: '0.3s' },
    { size: 4, top: '40%', left: '94%', dur: '2.5s', delay: '1.8s' },
    { size: 8, top: '55%', left: '3%',  dur: '3.8s', delay: '0.9s' },
    { size: 5, top: '28%', left: '50%', dur: '4.2s', delay: '2.0s' },
  ];
  configs.forEach(c => {
    const el = document.createElement('div');
    el.className = 'welcome-star';
    el.style.cssText =
      `width:${c.size}px;height:${c.size}px;top:${c.top};left:${c.left};` +
      `--dur:${c.dur};--delay:${c.delay};`;
    wrap.appendChild(el);
  });
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const state = {
  selected:    new Set(),
  memo:        '',
  translation: '',
  tags:        [],
  shareMode:   null,
  feedbackDone: false,
  mode:        'unwell', // 'unwell' | 'good'
  sleepHours:  null,
  sleepScore:  null,     // 1..5
  signals:     [],       // detectSignals の結果（id配列）
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STREAK  (localStorage)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const dateKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
};
const prevDateKey = () => {
  const d = new Date(); d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
};

const readStreak  = () => parseInt(localStorage.getItem('kmt_streak') || '0', 10);
const readLastDay = () => localStorage.getItem('kmt_last') || '';

const bumpStreak = () => {
  const today = dateKey();
  if (readLastDay() === today) return;          // 今日は済み
  const n = readLastDay() === prevDateKey() ? readStreak() + 1 : 1;
  localStorage.setItem('kmt_streak', String(n));
  localStorage.setItem('kmt_last', today);
};

const currentStreak = () => {
  const last = readLastDay();
  const n    = readStreak();
  if (last === dateKey() || last === prevDateKey()) return n;
  return 0;
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATE FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const fmtDate = (d = new Date()) => {
  const Y = d.getFullYear();
  const M = String(d.getMonth()+1).padStart(2,'0');
  const D = String(d.getDate()).padStart(2,'0');
  const W = ['日','月','火','水','木','金','土'][d.getDay()];
  return `${Y}年${M}月${D}日（${W}）`;
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SCREEN NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const show = (id) => {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   WELCOME SCREEN INIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const initWelcome = () => {
  const h = new Date().getHours();
  // 時間帯ごとに2-3パターン用意し、訪問のたびに表情がふわっと変わる感覚を作る
  const buckets = [
    { r:[5,10],  options: [
      'おはよう。\n今日の体、どんな感じ？',
      'おはよう。\nまだ うとうと してても 大丈夫。',
      'おはよう。\n起きるのが しんどい朝も あるよね。',
    ]},
    { r:[10,17], options: [
      'こんにちは。\nいまのきもち、すこし聞かせて？',
      'こんにちは。\nうまく言えなくても、いいよ。',
      'こんにちは。\n見つかった分だけで 大丈夫。',
    ]},
    { r:[17,21], options: [
      'こんばんは。\n今日一日、おつかれさま。',
      'こんばんは。\nがんばらなくても いい時間。',
      'こんばんは。\nひと息 ついてからでも、いいよ。',
    ]},
    { r:[21,24], options: [
      '夜ですね。\nきょうのこと、すこしだけ残せたら。',
      '夜ですね。\n眠れないときは、ことばも休んでいいよ。',
    ]},
    { r:[0,5],   options: [
      '夜ふかしの時間ですね。\n眠れない夜も、ある。',
      '夜ふかしの時間。\nそばにいるよ。',
    ]},
  ];
  const bucket = buckets.find(b => h >= b.r[0] && h < b.r[1]) || buckets[1];
  // 日替わりで安定して回す（ランダムだと体感的に不安定）
  const day = new Date().getDate();
  const msg = bucket.options[day % bucket.options.length];
  document.getElementById('welcome-tagline').textContent = msg;

  const n     = currentStreak();
  const pill  = document.getElementById('streak-pill');
  // 「達成」ではなく「傾聴」のフレームへ反転
  if (n >= 2) {
    const label = n <= 6 ? `あなたの声を ${n}回 きいてきたよ`
                : n <= 29 ? `${n}回、あなたの声をきいてきました`
                          : `${n}回、ずっとそばで きいています`;
    document.getElementById('streak-label').textContent = label;
    pill.classList.add('visible');
  } else {
    pill.classList.remove('visible');
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MOCK AI TRANSLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const BODY_MAP = {
  '頭が重い':    '頭に重さや圧を感じている',
  'だるい':       '体全体に疲労感がある',
  'めまいがする': 'めまいや平衡感覚の乱れがある',
  '吐き気がある': '吐き気をともなっている',
  '体が痛い':     '体のどこかに痛みがある',
  '食べられない': '食欲がわかない',
};
const SLEEP_MAP = {
  '眠れなかった':         '昨夜、十分に眠れなかった',
  '寝つけなかった':       '布団に入ってもなかなか寝つけなかった',
  '夜中に起きた':         '夜中に目が覚めて、再び寝つくのに時間がかかった',
  '寝ても疲れがとれない': '睡眠を取っても疲労感が残っている',
  '怖い夢を見た':         '不快な夢を見て、眠りが浅かった',
};
const MOOD_MAP = {
  '不安な感じ':    '気持ちが落ち着かず、不安を感じている',
  '落ち込んでいる': '気持ちが沈んでいる',
  'ぼーっとする':  '頭がはっきりせず、ぼんやりしている',
  '何もしたくない': '何かをしようという気力がわかない',
  'イライラする':  '気持ちが敏感になり、些細なことが気になる',
  '泣きたい感じ':  '感情が高ぶりやすく、涙が出そうな感覚がある',
};
const SITU_MAP = {
  '朝起きられない':   '朝、体を起こすことがとても難しい状況にある',
  '学校に行けない':   '学校に向かう気力・体力がない状況にある',
  '集中できない':     '何かに集中し続けることができない状況にある',
  '外に出たくない':   '外に出ることへの抵抗感が強い状況にある',
  '人と話したくない': '他者との関わりを避けたい状況にある',
};
const BODY_GOOD_MAP = {
  '体が軽い':    '体が軽く、動きやすい状態にある',
  '食欲がある':  '食欲があり、食事をとることができた',
  '頭がすっきり': '頭がすっきりして、集中しやすい状態にある',
  '体に力がある': '体に力が入り、元気に動ける状態にある',
  '気分がいい':  '体の調子が良く、気分も明るい',
};
const SLEEP_GOOD_MAP = {
  'よく眠れた':    '十分な睡眠が取れ、休息できた',
  'すぐ眠れた':    '布団に入ってすぐに眠ることができた',
  'すっきり起きた': '朝、すっきりとした目覚めだった',
  'いい夢を見た':  '気持ちのよい夢を見ることができた',
};
const MOOD_GOOD_MAP = {
  '楽しい気分':    '気持ちが明るく、楽しい感覚がある',
  '落ち着いている': '気持ちが穏やかで、落ち着いた状態にある',
  'やる気がある':  '何かに取り組みたい気持ちや意欲がある',
  '嬉しい感じ':   '嬉しい気持ちや喜びを感じている',
  'ほっとしている': '安心感や解放感を感じている',
  '安心している':  '周囲の環境に安心感を感じている',
};
const SITU_GOOD_MAP = {
  '朝起きられた': '朝、体を起こすことができた',
  '学校に行けた': '学校に向かう気力・体力があった',
  '集中できた':   '何かに集中して取り組むことができた',
  '外に出られた': '外に出ることができた',
  '人と話せた':   '人と話すことができた',
};
const UNSURE_MAP = {
  'なんとなくしんどい': '具体的には言いにくいが、何となくしんどい感じがある',
  '言葉にならない':     'うまく言葉にできない感覚がある',
  'いつもと違う':       'ふだんの自分とは違う感じがする',
  'もやもやする':       '気持ちや体に、もやもやとしたものを感じている',
};

const FEEDBACK_REPLIES = {
  'fb-wrong': 'おしえてくれて ありがとう。\nまた すこしずつ ちかづけるね。',
  'fb-close': 'ありがとう。\nもうすこし、ちかづいていくね。',
  'fb-exact': 'よかった。\nちゃんと きこえました。',
};

const translate = (tags, memo, mode = 'unwell') => {
  if (mode === 'unsure') {
    const items = tags.filter(t => t.cat === 'unsure').map(t => UNSURE_MAP[t.val] || t.val);
    const parts = [];
    if (items.length) {
      parts.push(items.join('、'));
    } else {
      parts.push('今日は、状態をうまく言葉にしにくい感じがある');
    }
    if (memo.trim()) parts.push(`本人からは「${memo.trim()}」とのこと`);
    return parts.join('。') + '。';
  }

  if (mode === 'good') {
    const body  = tags.filter(t => t.cat === 'body').map(t => BODY_GOOD_MAP[t.val] || t.val);
    const sleep = tags.filter(t => t.cat === 'sleep').map(t => SLEEP_GOOD_MAP[t.val] || t.val);
    const mood  = tags.filter(t => t.cat === 'mood').map(t => MOOD_GOOD_MAP[t.val] || t.val);
    const situ  = tags.filter(t => t.cat === 'situation').map(t => SITU_GOOD_MAP[t.val] || t.val);
    const parts = [];
    if (body.length)  parts.push(body.join('、'));
    if (sleep.length) parts.push((parts.length ? 'また、' : '') + sleep.join('、'));
    if (mood.length)  parts.push((parts.length ? 'また、' : '') + mood.join('、'));
    if (situ.length)  parts.push((parts.length ? 'さらに、' : '') + situ.join('、'));
    if (memo.trim())  parts.push(`本人からは「${memo.trim()}」とのこと`);
    if (!parts.length) return '今日は全体的に調子が良く、元気に過ごせている。';
    return parts.join('。') + '。';
  }

  const body  = tags.filter(t => t.cat === 'body').map(t => BODY_MAP[t.val] || t.val);
  const sleep = tags.filter(t => t.cat === 'sleep').map(t => SLEEP_MAP[t.val] || t.val);
  const mood  = tags.filter(t => t.cat === 'mood').map(t => MOOD_MAP[t.val] || t.val);
  const situ  = tags.filter(t => t.cat === 'situation').map(t => SITU_MAP[t.val] || t.val);
  const parts = [];

  if (body.length)  parts.push(body.join('、'));
  if (sleep.length) parts.push((parts.length ? 'また、' : '') + sleep.join('、'));
  if (mood.length)  parts.push((parts.length ? 'また、' : '') + mood.join('、'));
  if (situ.length)  parts.push('そのため、' + situ.join('、'));
  if (memo.trim()) parts.push(`本人からは「${memo.trim()}」とのこと`);

  if (!parts.length) return 'はっきりとした原因はわからないが、今日は調子がよくない状態です。';
  return parts.join('。') + '。';
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMBINATION SIGNALS
   症状の組み合わせから医学的所見を検出する（医師・学校向けのみ提示）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const SIGNAL_RULES = [
  { id: 'od', priority: 1,
    label:  '起立性調節障害の典型像と類似する組み合わせ',
    school: '朝の起き上がりや立ち上がる動作に体力的な負荷がかかっている可能性',
    require: { all: ['朝起きられない','めまいがする'], any: ['頭が重い','だるい'] } },
  { id: 'headache', priority: 2,
    label:  '頭痛発作（片頭痛などを含む）を示唆する組み合わせ',
    school: '頭痛による集中困難・光や音への過敏さが出ている可能性',
    require: { all: ['頭が重い'], any: ['吐き気がある','めまいがする'] } },
  { id: 'circadian', priority: 3,
    label:  '概日リズム（睡眠覚醒）の乱れを示唆する組み合わせ',
    school: '夜間の入眠困難により朝の登校が難しくなっている可能性',
    require: { all: ['朝起きられない'], any: ['寝つけなかった','夜中に起きた','眠れなかった'] } },
  { id: 'anxiety', priority: 4,
    label:  '不安・緊張反応を示唆する組み合わせ',
    school: '心理的負担により食事・睡眠・気分に影響が出ている可能性',
    require: { all: ['不安な感じ'], anyN: { items: ['寝つけなかった','食べられない','泣きたい感じ','眠れなかった'], min: 2 } } },
  { id: 'low_energy', priority: 5,
    label:  '持続的なエネルギー低下を示唆する組み合わせ',
    school: '活動意欲・登校意欲の低下が見られ、休息と段階的な復帰の配慮が望ましい状態',
    require: { all: ['だるい','落ち込んでいる'], any: ['何もしたくない','食べられない'] } },
];

const detectSignals = (tags) => {
  const vals = new Set(tags.map(t => t.val));
  const matched = SIGNAL_RULES.filter(rule => {
    const r = rule.require;
    if (r.all && !r.all.every(v => vals.has(v))) return false;
    if (r.any && !r.any.some(v => vals.has(v))) return false;
    if (r.anyN) {
      const hit = r.anyN.items.filter(v => vals.has(v)).length;
      if (hit < r.anyN.min) return false;
    }
    return true;
  });
  matched.sort((a, b) => a.priority - b.priority);
  return matched.slice(0, 2);
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RECORDS HISTORY (localStorage)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const REC_KEY    = 'kmt_records';
const REC_KEEP_DAYS = 180;

const loadRecords = () => {
  try {
    const raw = localStorage.getItem(REC_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
};

const saveRecord = (record) => {
  const all = loadRecords();
  all.push(record);
  const cutoff = Date.now() - REC_KEEP_DAYS * 24 * 60 * 60 * 1000;
  const kept = all.filter(r => (r.id || 0) >= cutoff);
  try {
    localStorage.setItem(REC_KEY, JSON.stringify(kept));
  } catch (e) { /* quota: ignore silently */ }
};

const median = (nums) => {
  if (!nums.length) return null;
  const s = [...nums].sort((a,b) => a-b);
  const m = Math.floor(s.length/2);
  return s.length % 2 ? s[m] : (s[m-1] + s[m]) / 2;
};

const summarizeRecent = (days = 30) => {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  const recs = loadRecords().filter(r => (r.id || 0) >= cutoff);
  const tagCount = new Map();
  const sigCount = new Map();
  const sleepHours = [];
  let unwellDays = 0;
  let morningStruggleCount = 0;

  recs.forEach(r => {
    if (r.mode === 'unwell') unwellDays++;
    (r.tags || []).forEach(t => {
      const key = `${t.cat}|${t.val}`;
      tagCount.set(key, (tagCount.get(key) || 0) + 1);
      if (t.val === '朝起きられない') morningStruggleCount++;
    });
    (r.signals || []).forEach(id => sigCount.set(id, (sigCount.get(id) || 0) + 1));
    if (typeof r.sleepHours === 'number') sleepHours.push(r.sleepHours);
  });

  const topTags = [...tagCount.entries()]
    .map(([k, count]) => { const [cat, val] = k.split('|'); return { cat, val, count }; })
    .sort((a,b) => b.count - a.count)
    .slice(0, 3);
  const recurringSignals = [...sigCount.entries()]
    .filter(([, c]) => c >= 2)
    .map(([id, count]) => ({ id, count }))
    .sort((a,b) => b.count - a.count);

  return {
    totalDays: recs.length,
    unwellDays,
    topTags,
    morningStruggleCount,
    sleepHoursMedian: median(sleepHours),
    recurringSignals,
  };
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AUDIENCE FORMATTER
   提出先（親 / 医師 / 学校）に応じて最終文面を生成
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const formatForAudience = (audience, ctx) => {
  const { translation, tags, memo, sleepHours, sleepScore, signals, mode } = ctx;

  if (audience === 'parent') {
    const lines = [translation];
    if (mode === 'unsure') {
      lines.push('（今日は本人もうまく言葉にしにくい様子。何かを感じてはいるみたいです。）');
    }
    if (sleepHours != null || sleepScore != null) {
      const desc = [];
      if (sleepHours != null) desc.push(sleepHours < 6 ? '短め' : (sleepHours >= 8 ? '長め' : 'ふつう'));
      if (sleepScore != null) desc.push(sleepScore <= 2 ? '浅め' : (sleepScore >= 4 ? '深め' : 'ふつう'));
      lines.push(`眠りの様子: ${desc.join('・')}`);
    }
    return lines.join('\n');
  }

  if (audience === 'doctor') {
    const lines = [];
    lines.push('【S（本人の訴え）】');
    lines.push(memo.trim() ? `本人コメント：「${memo.trim()}」` : '本人からの自由記述はなし。');
    lines.push('');
    lines.push('【O（観察された記録）】');
    lines.push(translation);
    if (tags.length) {
      const grouped = ['body','sleep','mood','situation'].map(cat => {
        const v = tags.filter(t => t.cat === cat).map(t => t.val);
        const label = { body:'体', sleep:'ねむり', mood:'気持ち', situation:'状況' }[cat];
        return v.length ? `${label}: ${v.join('・')}` : null;
      }).filter(Boolean);
      lines.push(`記録タグ — ${grouped.join(' / ')}`);
    }
    if (sleepHours != null || sleepScore != null) {
      const parts = [];
      if (sleepHours != null) parts.push(`睡眠時間 ${sleepHours}h`);
      if (sleepScore != null) parts.push(`質スコア ${sleepScore}/5`);
      lines.push(`睡眠所見: ${parts.join(' / ')}（保護者入力）`);
    }
    lines.push('');
    lines.push('【A（所見メモ）】');
    if (mode === 'unsure') {
      lines.push('本日は症状を言語化することが本人にとって困難。具体的所見の特定は不可だが、本人が何らかの不調や違和感を自覚していることは確認できる（non-specific subjective complaint）。');
      if (signals.length) {
        signals.forEach(s => lines.push(`・${s.label}（確定診断ではなく組み合わせ上の示唆）`));
      }
    } else if (mode === 'good') {
      lines.push('本日は全体的に良好。特記すべき組み合わせ所見はなし。');
    } else if (signals.length) {
      signals.forEach(s => lines.push(`・${s.label}（確定診断ではなく組み合わせ上の示唆）`));
    } else {
      lines.push('単独症状の記録のため、組み合わせ上の特記所見はなし。');
    }
    const sum = summarizeRecent(30);
    if (sum.totalDays >= 3) {
      lines.push('');
      lines.push('【P（経過観察・最近30日の傾向）】');
      lines.push(`記録 ${sum.totalDays}日 / うちしんどい ${sum.unwellDays}日。`);
      if (sum.topTags.length) {
        lines.push(`頻出: ${sum.topTags.map(t => `${t.val}(${t.count})`).join(' / ')}`);
      }
      if (sum.morningStruggleCount >= 3) {
        lines.push(`「朝起きられない」 ${sum.morningStruggleCount}日`);
      }
      if (sum.sleepHoursMedian != null) {
        lines.push(`睡眠時間の中央値 ${sum.sleepHoursMedian}h`);
      }
      if (sum.recurringSignals.length) {
        const rs = sum.recurringSignals.map(r => {
          const rule = SIGNAL_RULES.find(x => x.id === r.id);
          return rule ? `${rule.label}(${r.count}回)` : null;
        }).filter(Boolean);
        if (rs.length) lines.push(`繰り返し検出: ${rs.join(' / ')}`);
      }
    }
    return lines.join('\n');
  }

  if (audience === 'school') {
    const lines = [];
    lines.push('【今日の様子】');
    lines.push(translation);
    lines.push('');
    const sigIds = new Set(signals.map(s => s.id));
    if (sigIds.has('od') || sigIds.has('circadian')) {
      lines.push('【背景にある発達特性】');
      lines.push('思春期は体内時計が後ろにずれる発達段階にあり、早寝早起きの自助努力だけでは解決しにくい時期だとされています（睡眠医学の知見より）。本人の怠けや甘えではなく、生物学的な特性として起床時刻の柔軟な扱いをご検討いただけると助かります。');
      lines.push('');
    }
    lines.push('【教室での配慮事項】');
    if (mode === 'unsure') {
      lines.push('・本日は本人もうまく説明できない様子です。無理に状態を聞き出さず、休息できるスペースの確保があると助かります。');
      lines.push('・体調や気分に変化があるようなら、保健室への移動を許容いただけると安心です。');
    } else if (mode === 'good') {
      lines.push('本日は良好。通常通りで問題ありません。');
    } else {
      const considerations = new Set();
      const tagVals = new Set(tags.map(t => t.val));
      if (tagVals.has('朝起きられない')) considerations.add('朝の登校時刻に余裕が必要な日があります。遅刻の事情として配慮いただけると助かります。');
      if (tagVals.has('集中できない') || tagVals.has('ぼーっとする')) considerations.add('集中の持続が難しい時があるため、短い休憩や声かけがあると助かります。');
      if (tagVals.has('外に出たくない') || tagVals.has('人と話したくない')) considerations.add('対人的な場面に負荷を感じている様子。グループ活動の参加は本人のペースを尊重してください。');
      if (tagVals.has('体が痛い') || tagVals.has('めまいがする')) considerations.add('体育や立ち仕事のある活動は、体調に応じて休めるとよいです。');
      if (tagVals.has('食べられない')) considerations.add('給食で残してしまうことがあるかもしれません。');
      signals.forEach(s => { if (s.school) considerations.add(s.school); });
      if (considerations.size === 0) {
        considerations.add('本人の様子を見ながら、無理のない範囲で参加させていただけると助かります。');
      }
      [...considerations].forEach(c => lines.push(`・${c}`));
    }
    const sum = summarizeRecent(14);
    if (sum.totalDays >= 3 && sum.morningStruggleCount >= 2) {
      lines.push('');
      lines.push('【直近の登校状況】');
      lines.push(`過去2週間で「朝起きにくい」と本人が記録した日が ${sum.morningStruggleCount}日 あります。`);
    }
    return lines.join('\n');
  }

  return translation;
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REDUCED MOTION
   感覚過敏・体調不良時の負荷を減らす（CSS側でも対応済み）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PARTICLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const SPARK_COLORS = ['#7C6FE0', '#B39DFA', '#F9A8C9', '#FFFFFF', '#B39DFA', '#F9A8C9'];

const spawnParticles = (card) => {
  if (REDUCED_MOTION) return;  // 感覚過敏配慮
  const rect  = card.getBoundingClientRect();
  const cx    = rect.left + rect.width  / 2;
  const cy    = rect.top  + rect.height / 2;

  for (let i = 0; i < 10; i++) {
    const p     = document.createElement('span');
    const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.4;
    const dist  = 22 + Math.random() * 30;
    const size  = 3 + Math.random() * 5;
    const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];

    p.style.cssText = `position:fixed;pointer-events:none;z-index:9999;` +
      `left:${cx}px;top:${cy}px;width:${size}px;height:${size}px;` +
      `border-radius:50%;background:${color};transform:translate(-50%,-50%);`;
    document.body.appendChild(p);

    p.animate([
      { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px),` +
                   `calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`, opacity: 0 },
    ], { duration: 420 + Math.random() * 160, easing: 'cubic-bezier(0,0.9,0.57,1)', fill: 'forwards' })
    .finished.then(() => p.remove());
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CARD SELECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.querySelectorAll('.sel-card').forEach(card => {
  card.addEventListener('click', () => {
    const on  = card.classList.toggle('selected');
    const key = JSON.stringify({ val: card.dataset.value, cat: card.dataset.category });
    on ? state.selected.add(key) : state.selected.delete(key);

    if (on) spawnParticles(card);

    card.animate(
      [{ transform:'scale(1)' }, { transform:'scale(0.84)' }, { transform:'scale(1.08)' }, { transform:'scale(1)' }],
      { duration: 340, easing: 'cubic-bezier(0.34,1.56,0.64,1)' }
    );
    syncCTA();
  });
});

document.getElementById('memo').addEventListener('input', e => {
  state.memo = e.target.value;
  syncCTA();
});

const syncCTA = () => {
  const btn  = document.getElementById('btn-translate');
  const hint = document.getElementById('hint-select');
  const hasCard = state.selected.size > 0;
  // 「うまく言えない」モードはメモ単独でも翻訳可
  const hasMemo = state.mode === 'unsure' && state.memo.trim().length > 0;
  const has = hasCard || hasMemo;
  btn.disabled        = !has;
  hint.style.opacity  = has ? '0' : '1';
  // ヒント文言もモードで変える
  if (state.mode === 'unsure') {
    hint.textContent = 'カードかメモのどちらかで、ことばにしますね。';
  } else {
    hint.textContent = '1つでも見つかったら、ことばにしますね。';
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NAVIGATION WIRING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MODE TOGGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const clearSelection = () => {
  state.selected.clear();
  document.querySelectorAll('.sel-card.selected').forEach(c => c.classList.remove('selected'));
  syncCTA();
};

const clearSleepObjective = () => {
  state.sleepHours = null;
  state.sleepScore = null;
  document.querySelectorAll('.sleep-hours-input').forEach(el => { el.value = ''; });
  document.querySelectorAll('.sleep-score-btn.active').forEach(el => el.classList.remove('active'));
};

const setMode = (mode) => {
  state.mode = mode;
  const modes = ['unwell', 'unsure', 'good'];
  modes.forEach(m => {
    const btn = document.getElementById(`toggle-${m}`);
    const set = document.getElementById(`set-${m}`);
    btn.classList.toggle('active', m === mode);
    btn.setAttribute('aria-selected', String(m === mode));
    set.classList.toggle('hidden', m !== mode);
  });
  clearSelection();
  syncCTA();
};

document.getElementById('toggle-unwell').addEventListener('click', () => setMode('unwell'));
document.getElementById('toggle-unsure').addEventListener('click', () => setMode('unsure'));
document.getElementById('toggle-good').addEventListener('click',   () => setMode('good'));

document.getElementById('btn-start').addEventListener('click', () => {
  document.getElementById('input-date').textContent = fmtDate();
  show('screen-input');
});

document.getElementById('btn-back-input').addEventListener('click', () => show('screen-welcome'));
document.getElementById('btn-back-result').addEventListener('click', () => show('screen-input'));
document.getElementById('btn-back-share').addEventListener('click',  () => show('screen-result'));

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TRANSLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.getElementById('btn-translate').addEventListener('click', () => {
  show('screen-loading');

  setTimeout(() => {
    state.tags        = Array.from(state.selected).map(k => JSON.parse(k));
    state.translation = translate(state.tags, state.memo, state.mode);
    state.signals     = detectSignals(state.tags);
    state.feedbackDone = false;
    document.getElementById('mood-card').classList.toggle('good-mode', state.mode === 'good');

    const dateStr = fmtDate();
    document.getElementById('result-date').textContent    = dateStr;
    document.getElementById('mood-card-date').textContent = dateStr;
    document.getElementById('translation-text').textContent = state.translation;

    // タグ描画
    const tagsEl = document.getElementById('mood-tags');
    tagsEl.innerHTML = '';
    state.tags.forEach(t => {
      const el = document.createElement('span');
      el.className   = 'mood-tag';
      el.textContent = t.val;
      tagsEl.appendChild(el);
    });

    // フィードバックリセット — 翻訳文を読み終える間を作るため、遅れて出現させる
    document.querySelectorAll('.feedback-btn').forEach(b => {
      b.classList.remove('selected');
      b.style.pointerEvents = '';
    });
    document.getElementById('feedback-reply').textContent = '';
    const feedbackBlock = document.getElementById('feedback-block');
    feedbackBlock.classList.remove('appeared');
    setTimeout(() => feedbackBlock.classList.add('appeared'), 1800);

    bumpStreak();

    saveRecord({
      id:          Date.now(),
      date:        dateKey(),
      mode:        state.mode,
      tags:        state.tags,
      memo:        state.memo,
      sleepHours:  state.sleepHours,
      sleepScore:  state.sleepScore,
      signals:     state.signals.map(s => s.id),
      translation: state.translation,
    });

    show('screen-result');
  }, 2200);
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FEEDBACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
['fb-wrong','fb-close','fb-exact'].forEach(id => {
  document.getElementById(id).addEventListener('click', e => {
    if (state.feedbackDone) return;
    state.feedbackDone = true;
    document.querySelectorAll('.feedback-btn').forEach(b => b.style.pointerEvents = 'none');
    e.currentTarget.classList.add('selected');
    document.getElementById('feedback-reply').textContent = FEEDBACK_REPLIES[id];
  });
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SHARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const SHARE_CFG = {
  parent: { title:'親への共有メモ',   icon:'👨‍👩‍👧' },
  doctor: { title:'受診時の参考メモ', icon:'🏥' },
  school: { title:'学校への共有メモ', icon:'🏫' },
};

const buildShareContext = () => ({
  translation: state.translation,
  tags:        state.tags,
  memo:        state.memo,
  sleepHours:  state.sleepHours,
  sleepScore:  state.sleepScore,
  signals:     state.signals,
  mode:        state.mode,
});

const openShare = mode => {
  state.shareMode = mode;
  const cfg = SHARE_CFG[mode];
  if (!cfg) return;

  const body = formatForAudience(mode, buildShareContext());

  document.getElementById('share-screen-title').textContent = cfg.title;
  document.getElementById('share-doc-icon').textContent     = cfg.icon;
  document.getElementById('share-doc-title').textContent    = cfg.title;
  document.getElementById('share-doc-date').textContent     = fmtDate();
  document.getElementById('share-doc-body').textContent     = body;

  const tagsEl = document.getElementById('share-doc-tags');
  tagsEl.innerHTML = '';
  state.tags.forEach(t => {
    const el = document.createElement('span');
    el.className   = 'share-tag';
    el.textContent = t.val;
    tagsEl.appendChild(el);
  });

  document.getElementById('copy-confirm').classList.remove('visible');
  show('screen-share');
};

document.getElementById('btn-share-parent').addEventListener('click', () => openShare('parent'));
document.getElementById('btn-share-doctor').addEventListener('click', () => openShare('doctor'));
document.getElementById('btn-share-school').addEventListener('click', () => openShare('school'));

document.getElementById('btn-save-image').addEventListener('click', () => {
  alert('スクリーンショットで保存してください。\n（画像書き出し機能は開発中です）');
});

/* コピー */
document.getElementById('btn-copy').addEventListener('click', () => {
  const cfg  = SHARE_CFG[state.shareMode] || SHARE_CFG.parent;
  const body = formatForAudience(state.shareMode, buildShareContext());
  const lines = [
    `【${cfg.title}】`,
    fmtDate(),
    '',
    body,
    '',
    `記録されたこと：${state.tags.map(t => t.val).join('、')}`,
    '',
    'きもち翻訳より',
  ];
  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    const el = document.getElementById('copy-confirm');
    el.classList.add('visible');
    setTimeout(() => el.classList.remove('visible'), 2600);
  });
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RESET & BACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.getElementById('btn-back').addEventListener('click', () => {
  clearSelection();
  clearSleepObjective();
  state.memo = '';
  document.getElementById('memo').value = '';
  setMode('unwell');
  initWelcome();
  show('screen-welcome');
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SLEEP OBJECTIVE INPUT WIRING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.querySelectorAll('.sleep-hours-input').forEach(input => {
  input.addEventListener('input', e => {
    const v = e.target.value.trim();
    const n = v === '' ? null : parseFloat(v);
    state.sleepHours = (n != null && !isNaN(n)) ? n : null;
    document.querySelectorAll('.sleep-hours-input').forEach(other => {
      if (other !== e.target) other.value = v;
    });
  });
});

document.querySelectorAll('.sleep-score-segment').forEach(segment => {
  segment.querySelectorAll('.sleep-score-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const score = parseInt(btn.dataset.score, 10);
      state.sleepScore = score;
      document.querySelectorAll('.sleep-score-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.score, 10) === score);
      });
    });
  });
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ESCAPE: 今日は記録しない
   罪悪感を発生させないための退路。
   ストリークは更新せず、記録もしない。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.getElementById('btn-skip-today').addEventListener('click', () => {
  const tagline = document.getElementById('welcome-tagline');
  const original = tagline.textContent;
  tagline.textContent = '記録しない日も、ある。\nまた来てね。';
  tagline.classList.add('soft-confirm');
  setTimeout(() => {
    tagline.textContent = original;
    tagline.classList.remove('soft-confirm');
  }, 3200);
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PARENT PANEL: 前回値の参考表示
   再入力の摩擦を消す。値はあくまで placeholder として薄く表示。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const initParentPanelMemory = () => {
  const recs = loadRecords();
  // 直近の客観値が入っていた記録を探す
  const last = [...recs].reverse().find(r => r.sleepHours != null || r.sleepScore != null);
  if (!last) return;
  const hourEl = document.querySelector('.sleep-hours-input');
  if (hourEl && last.sleepHours != null) {
    hourEl.placeholder = `前回 ${last.sleepHours}h`;
  }
  // 質スコアは placeholder が使えないので、note に小さく追加
  if (last.sleepScore != null) {
    const note = document.querySelector('.parent-panel-note');
    if (note) {
      note.insertAdjacentHTML('beforeend', `<span class="parent-panel-memo"> 前回の眠りの深さ: ${last.sleepScore}/5</span>`);
    }
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
injectIcons();
spawnWelcomeStars();
initWelcome();
syncCTA();
initParentPanelMemory();
