'use strict';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SVG ICON LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* Unified palette (Lavender Mist):
   - Stroke (lavender ink):  #9B8FEA
   - Sub stroke:             #C4B5FD
   - Mist fill:              #EDE8FA
   - Deep mist:              #DDD6FE
   - Pearl white:            #FFFFFF / rgba(255,255,255,0.6)
   - Cream sparkle:          #FDE68A
   - Pink sparkle (good):    #F9A8C9
   - Cool blue mist (cold):  rgba(168,196,229,0.7)
   - Hush gray (unsure):     #B0A8C0                                       */
const ICONS = {
  // ── しんどい：体 ──
  '頭が重い': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="13" cy="11" rx="7" ry="3.2" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><ellipse cx="23" cy="8" rx="6" ry="2.8" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><ellipse cx="30" cy="12" rx="5" ry="2.4" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><circle cx="20" cy="27" r="8" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M20 17Q19 19 19 21Q19 22.5 20 22.5Q21 22.5 21 21Q21 19 20 17Z" fill="rgba(168,196,229,0.75)"/><circle cx="34" cy="32" r="0.7" fill="#FDE68A" opacity="0.75"/><circle cx="6" cy="32" r="0.6" fill="#FDE68A" opacity="0.65"/></svg>`,

  'だるい': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5V17Q20 23 14 26" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round" fill="none"/><circle cx="13" cy="28" r="7" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M9 28Q11.5 30 14 28" stroke="#9B8FEA" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M14 31Q16 33 18 31" stroke="#9B8FEA" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.6"/><circle cx="27" cy="22" r="1.3" fill="#DDD6FE" opacity="0.7"/><circle cx="31" cy="28" r="1" fill="#DDD6FE" opacity="0.55"/><circle cx="33" cy="13" r="0.9" fill="#FDE68A" opacity="0.75"/></svg>`,

  'めまいがする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="13" fill="none" stroke="#9B8FEA" stroke-width="1.4" stroke-dasharray="3 2"/><circle cx="20" cy="20" r="9" fill="none" stroke="#9B8FEA" stroke-width="1.3" stroke-dasharray="3 2"/><circle cx="20" cy="20" r="5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.2"/><circle cx="20" cy="20" r="1.6" fill="#9B8FEA"/><path d="M20 17.5L20.4 19.4L22.3 19.7L20.5 20.2L20 22L19.5 20.2L17.7 19.7L19.6 19.4Z" fill="#FDE68A"/><circle cx="6" cy="6" r="0.8" fill="#FDE68A" opacity="0.7"/><circle cx="34" cy="34" r="0.7" fill="#FDE68A" opacity="0.65"/></svg>`,

  '吐き気がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="11" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M11 19Q14 16 17 19Q20 22 23 19Q26 16 29 19" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M11 24Q14 21 17 24Q20 27 23 24Q26 21 29 24" stroke="rgba(168,196,229,0.85)" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M11 29Q14 26 17 29Q20 32 23 29Q26 26 29 29" stroke="rgba(168,196,229,0.6)" stroke-width="1.4" stroke-linecap="round" fill="none"/><circle cx="34" cy="9" r="0.8" fill="#FDE68A" opacity="0.7"/><circle cx="6" cy="9" r="0.7" fill="#FDE68A" opacity="0.65"/></svg>`,

  '体が痛い': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L13 21H21L16 36L29 17H22Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9" cy="11" r="2.6" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><circle cx="33" cy="27" r="2.4" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><path d="M19 18L19.5 19.5L21 20L19.5 20.5L19 22L18.5 20.5L17 20L18.5 19.5Z" fill="#FDE68A"/><circle cx="34" cy="9" r="0.7" fill="#FDE68A" opacity="0.7"/><circle cx="6" cy="32" r="0.7" fill="#FDE68A" opacity="0.65"/></svg>`,

  '眠れなかった': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 8C22 8 15 14 15 22C15 30 22 36 30 36C23 36 9 29 9 22C9 15 15 8 22 8C24.5 8 27 8.7 30 8Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><ellipse cx="22" cy="22" rx="3.5" ry="2.5" fill="#FFFFFF" stroke="#9B8FEA" stroke-width="1.1"/><circle cx="22" cy="22" r="1.1" fill="#9B8FEA"/><path d="M32 13L33.4 9.5L34.8 13L38 14L34.8 15L33.4 18.5L32 15L29 14Z" fill="#FDE68A" opacity="0.85"/><circle cx="35" cy="22" r="0.9" fill="#FDE68A" opacity="0.7"/><circle cx="33" cy="29" r="0.7" fill="#FDE68A" opacity="0.6"/></svg>`,

  '食べられない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 25Q7 34 20 34Q33 34 33 25" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><ellipse cx="20" cy="25" rx="13" ry="3.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.3"/><path d="M13 13Q15 16 13 19" stroke="rgba(168,196,229,0.85)" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M20 11Q22 14 20 17" stroke="rgba(168,196,229,0.8)" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M27 13Q29 16 27 19" stroke="rgba(168,196,229,0.85)" stroke-width="1.4" stroke-linecap="round" fill="none"/><circle cx="34" cy="9" r="0.8" fill="#FDE68A" opacity="0.7"/></svg>`,

  // ── しんどい：ねむり ──
  '寝つけなかった': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 28Q5 21 20 21Q35 21 35 28V33Q35 34 34 34H6Q5 34 5 33Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><ellipse cx="20" cy="24" rx="13" ry="3" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><circle cx="28" cy="11" r="0.9" fill="#9B8FEA" opacity="0.55"/><circle cx="31" cy="9" r="1.2" fill="#9B8FEA" opacity="0.7"/><circle cx="34" cy="13" r="1.5" fill="#9B8FEA" opacity="0.85"/><circle cx="6" cy="9" r="0.8" fill="#FDE68A" opacity="0.7"/><circle cx="34" cy="34" r="0.7" fill="#FDE68A" opacity="0.6"/></svg>`,

  '夜中に起きた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 8C20 8 13 14 13 22C13 30 20 36 28 36C21 36 7 29 7 22C7 15 13 8 20 8C22.5 8 25 8.7 28 8Z" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.5"/><path d="M30 14L31 11L32 14L35 15L32 16L31 19L30 16L27 15Z" fill="#FDE68A"/><path d="M35 25L35.6 23L36.2 25L38 25.5L36.2 26L35.6 28L35 26L33.2 25.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="33" cy="32" r="0.8" fill="#FDE68A" opacity="0.7"/><circle cx="6" cy="14" r="0.7" fill="#FDE68A" opacity="0.65"/><circle cx="9" cy="33" r="0.6" fill="#FDE68A" opacity="0.6"/></svg>`,

  '寝ても疲れがとれない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="18" rx="14" ry="6" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><ellipse cx="13" cy="14" rx="5" ry="3.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.3"/><ellipse cx="27" cy="13" rx="6" ry="4" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.3"/><path d="M12 25Q14 29 12 33" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75"/><path d="M20 26Q22 30 20 34" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.6"/><path d="M28 25Q30 29 28 33" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.5"/><circle cx="34" cy="34" r="0.7" fill="#FDE68A" opacity="0.65"/><circle cx="6" cy="32" r="0.6" fill="#FDE68A" opacity="0.55"/></svg>`,

  '怖い夢を見た': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11Q12 6 20 6Q28 6 28 11V32L26 30L24 32L22 30L20 32L18 30L16 32L14 30L12 32Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4" stroke-linejoin="round"/><circle cx="17" cy="16" r="1.4" fill="#9B8FEA" opacity="0.75"/><circle cx="23" cy="16" r="1.4" fill="#9B8FEA" opacity="0.75"/><path d="M16 22L18 20.5L17 23L19 22L18 24.5" stroke="rgba(168,196,229,0.85)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="34" cy="9" r="0.7" fill="#FDE68A" opacity="0.7"/><circle cx="6" cy="14" r="0.7" fill="#FDE68A" opacity="0.65"/></svg>`,

  // ── しんどい：気持ち ──
  '不安な感じ': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 33C20 33 7 25 7 16C7 11 11 7 15 7C17 7 19 8 20 10C21 8 23 7 25 7C29 7 33 11 33 16C33 25 20 33 20 33Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><path d="M20 16Q21 18 20 20Q19 22 20 24Q21 26 20 28" stroke="rgba(168,196,229,0.85)" stroke-width="1.4" stroke-linecap="round" fill="none"/><circle cx="6" cy="9" r="0.7" fill="#FDE68A" opacity="0.7"/><circle cx="34" cy="11" r="0.8" fill="#FDE68A" opacity="0.65"/><circle cx="33" cy="32" r="0.6" fill="#FDE68A" opacity="0.55"/></svg>`,

  '落ち込んでいる': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="14" cy="15" rx="6" ry="4" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.3"/><ellipse cx="25" cy="13" rx="7" ry="4.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.3"/><path d="M8 18Q8 21 12 21H30Q34 21 34 18" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.3"/><path d="M14 25Q13 28 14 30" stroke="rgba(168,196,229,0.85)" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M20 26Q19 29 20 32" stroke="rgba(168,196,229,0.85)" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M26 25Q25 28 26 30" stroke="rgba(168,196,229,0.85)" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="14" cy="33" r="1.1" fill="rgba(168,196,229,0.95)"/><circle cx="20" cy="35" r="1.2" fill="rgba(168,196,229,0.95)"/><circle cx="26" cy="33" r="1.1" fill="rgba(168,196,229,0.95)"/></svg>`,

  'ぼーっとする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14" fill="#EDE8FA" opacity="0.55"/><circle cx="20" cy="20" r="10" fill="#EDE8FA" opacity="0.75"/><circle cx="20" cy="20" r="6" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="20" cy="20" r="1.4" fill="#9B8FEA" opacity="0.6"/><circle cx="34" cy="9" r="0.8" fill="#FDE68A" opacity="0.7"/><circle cx="6" cy="32" r="0.8" fill="#FDE68A" opacity="0.65"/></svg>`,

  '何もしたくない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="22" width="30" height="11" rx="3" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><rect x="3" y="30" width="34" height="4.5" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><path d="M9 22V18Q9 16 11 16H29Q31 16 31 18V22" stroke="#9B8FEA" stroke-width="1.3" fill="none"/><ellipse cx="20" cy="24" rx="9" ry="3" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.1"/><path d="M14 22Q20 17 26 22" stroke="#9B8FEA" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7"/><circle cx="34" cy="9" r="0.7" fill="#FDE68A" opacity="0.65"/></svg>`,

  'イライラする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18Q8 12 14 12Q15 9 18 9Q20 7 23 9Q27 9 28 13Q34 13 34 19Q34 23 28 23H12Q8 23 8 18Z" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.4" stroke-linejoin="round"/><path d="M16 24L13 32L18 28L17 36L22 28L26 33L24 26" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M19 27L19.5 28.5L21 29L19.5 29.5L19 31L18.5 29.5L17 29L18.5 28.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="6" cy="9" r="0.6" fill="#FDE68A" opacity="0.65"/></svg>`,

  '泣きたい感じ': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6C20 6 10 18 10 24C10 29.5 14.5 34 20 34C25.5 34 30 29.5 30 24C30 18 20 6 20 6Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><ellipse cx="20" cy="27" rx="5.5" ry="4.5" fill="rgba(168,196,229,0.4)"/><ellipse cx="17" cy="18" rx="2.5" ry="4" fill="rgba(255,255,255,0.5)" transform="rotate(-15 17 18)"/><path d="M32 21L33 18.5L34 21L36 21.5L34 22L33 24.5L32 22L30 21.5Z" fill="#FDE68A" opacity="0.8"/><circle cx="7" cy="15" r="0.9" fill="#FDE68A" opacity="0.65"/><circle cx="34" cy="12" r="0.7" fill="#FDE68A" opacity="0.6"/></svg>`,

  // ── しんどい：状況 ──
  '朝起きられない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="24" width="30" height="11" rx="4" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><rect x="5" y="20" width="30" height="6" rx="2.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><path d="M5 20V17Q5 15.5 7 15.5H33Q35 15.5 35 17V20" stroke="#9B8FEA" stroke-width="1.3" fill="none"/><path d="M11 13A9 9 0 0 1 29 13" stroke="#C4B5FD" stroke-width="1.3" stroke-dasharray="2.5 2" fill="none"/><path d="M20 4V7" stroke="#C4B5FD" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/><path d="M27.5 5.5L26 7.5" stroke="#C4B5FD" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/><path d="M12.5 5.5L14 7.5" stroke="#C4B5FD" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/><circle cx="34" cy="30" r="0.7" fill="#FDE68A" opacity="0.65"/><circle cx="6" cy="30" r="0.6" fill="#FDE68A" opacity="0.55"/></svg>`,

  '学校に行けない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="15" width="26" height="21" rx="1.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M5 16L20 5L35 16" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.5"/><rect x="10" y="18" width="6" height="6" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><rect x="24" y="18" width="6" height="6" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><rect x="16" y="26" width="8" height="10" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><circle cx="23" cy="31.5" r="1" fill="#9B8FEA"/><ellipse cx="20" cy="28" rx="15" ry="3.5" fill="rgba(168,196,229,0.2)"/><circle cx="34" cy="9" r="0.7" fill="#FDE68A" opacity="0.65"/><circle cx="6" cy="9" r="0.6" fill="#FDE68A" opacity="0.55"/></svg>`,

  '集中できない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="6" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><circle cx="20" cy="22" r="12" fill="none" stroke="#C4B5FD" stroke-width="1.1" stroke-dasharray="2 3"/><circle cx="20" cy="22" r="2.5" fill="#9B8FEA" opacity="0.55"/><circle cx="8" cy="10" r="1.6" fill="#DDD6FE" opacity="0.8"/><circle cx="33" cy="8" r="1.3" fill="#DDD6FE" opacity="0.7"/><circle cx="36" cy="27" r="1.4" fill="#DDD6FE" opacity="0.65"/><circle cx="4" cy="29" r="1.2" fill="#DDD6FE" opacity="0.6"/><circle cx="15" cy="6" r="1.1" fill="#FDE68A" opacity="0.75"/><circle cx="28" cy="5" r="1" fill="#FDE68A" opacity="0.7"/><circle cx="37" cy="16" r="1" fill="#FDE68A" opacity="0.65"/><circle cx="3" cy="15" r="0.9" fill="#FDE68A" opacity="0.6"/></svg>`,

  '外に出たくない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="18" width="24" height="18" rx="2" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M5 19L20 6L35 19" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.5"/><rect x="11" y="21" width="7" height="7" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.1"/><rect x="22" y="26" width="7" height="10" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><circle cx="27.5" cy="31.5" r="1" fill="#9B8FEA"/><circle cx="15" cy="25" r="2.5" fill="rgba(255,255,255,0.5)"/><circle cx="34" cy="10" r="0.7" fill="#FDE68A" opacity="0.65"/><circle cx="6" cy="12" r="0.6" fill="#FDE68A" opacity="0.55"/></svg>`,

  '人と話したくない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8Q6 5 9 5H31Q34 5 34 8V22Q34 25 31 25H14L7 31V25H9Q6 25 6 22Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 12H28" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><path d="M12 16.5H22" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><ellipse cx="20" cy="22" rx="11" ry="2.5" fill="rgba(168,196,229,0.2)"/><circle cx="34" cy="32" r="0.7" fill="#FDE68A" opacity="0.65"/><circle cx="6" cy="34" r="0.6" fill="#FDE68A" opacity="0.55"/></svg>`,

  // ── いい感じ：体 ──
  '体が軽い': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 34C20 34 6 26 6 16C6 9 12 5 20 5C28 5 34 9 34 16C34 26 20 34 20 34Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><path d="M20 5V34" stroke="#C4B5FD" stroke-width="1.2" stroke-linecap="round"/><path d="M20 12L14 17" stroke="#C4B5FD" stroke-width="1" stroke-linecap="round" opacity="0.7"/><path d="M20 18L13 23" stroke="#C4B5FD" stroke-width="1" stroke-linecap="round" opacity="0.65"/><path d="M20 12L26 17" stroke="#C4B5FD" stroke-width="1" stroke-linecap="round" opacity="0.7"/><path d="M20 18L27 23" stroke="#C4B5FD" stroke-width="1" stroke-linecap="round" opacity="0.65"/><path d="M7 8L8 5.5L9 8L11 8.5L9 9L8 11.5L7 9L5 8.5Z" fill="#FDE68A" opacity="0.9"/><circle cx="33" cy="9" r="1.3" fill="#FDE68A" opacity="0.8"/><circle cx="35" cy="22" r="1" fill="#F9A8C9" opacity="0.75"/><circle cx="5" cy="25" r="0.9" fill="#F9A8C9" opacity="0.7"/></svg>`,

  'よく眠れた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 8C22 8 15 14 15 22C15 30 22 36 30 36C23 36 9 29 9 22C9 15 15 8 22 8C24.5 8 27 8.7 30 8Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><path d="M31 14L32.4 10.5L33.8 14L37 15L33.8 16L32.4 19.5L31 16L28 15Z" fill="#FDE68A" opacity="0.9"/><circle cx="35" cy="22" r="1.2" fill="#FDE68A" opacity="0.8"/><circle cx="33" cy="29" r="0.9" fill="#FDE68A" opacity="0.7"/><path d="M7 10L8 8L9 10L11 10.5L9 11L8 13L7 11L5 10.5Z" fill="#F9A8C9" opacity="0.85"/><circle cx="6" cy="20" r="1" fill="#F9A8C9" opacity="0.7"/></svg>`,

  '食欲がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 25Q7 34 20 34Q33 34 33 25" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><ellipse cx="20" cy="25" rx="13" ry="3.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.3"/><path d="M13 17L14 14.5L15 17L17 17.5L15 18L14 20.5L13 18L11 17.5Z" fill="#FDE68A" opacity="0.9"/><path d="M24 14L25 12L26 14L28 14.5L26 15L25 17L24 15L22 14.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="20" cy="12" r="1.5" fill="#F9A8C9" opacity="0.8"/><circle cx="34" cy="9" r="0.8" fill="#FDE68A" opacity="0.7"/><circle cx="6" cy="10" r="0.7" fill="#F9A8C9" opacity="0.65"/></svg>`,

  '頭がすっきり': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14" fill="#EDE8FA" opacity="0.35"/><circle cx="20" cy="20" r="9" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><circle cx="20" cy="20" r="4.5" fill="#DDD6FE"/><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.7)"/><path d="M20 6V9" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round"/><path d="M20 31V34" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round"/><path d="M6 20H9" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round"/><path d="M31 20H34" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round"/><path d="M9.5 9.5L11.5 11.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M28.5 28.5L30.5 30.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M30.5 9.5L28.5 11.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M9.5 30.5L11.5 28.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M33 5L34 3L35 5L37 5.5L35 6L34 8L33 6L31 5.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="5" cy="8" r="1" fill="#F9A8C9" opacity="0.75"/></svg>`,

  '体に力がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 34C20 34 5 24 5 14C5 9 9 5 13 5C16 5 18 7 20 10C22 7 24 5 27 5C31 5 35 9 35 14C35 24 20 34 20 34Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><path d="M20 14L21.8 19.5H27.5L22.8 22.8L24.7 28.5L20 25.2L15.3 28.5L17.2 22.8L12.5 19.5H18.2Z" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="0.8"/><circle cx="20" cy="21" r="1.5" fill="#FDE68A" opacity="0.9"/><path d="M7 9L8 7L9 9L11 9.5L9 10L8 12L7 10L5 9.5Z" fill="#FDE68A" opacity="0.8"/><circle cx="33" cy="9" r="1.1" fill="#F9A8C9" opacity="0.75"/><circle cx="35" cy="22" r="0.9" fill="#FDE68A" opacity="0.7"/></svg>`,

  '気分がいい': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="9.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><circle cx="20" cy="20" r="6" fill="#FDE68A" opacity="0.7"/><path d="M20 4V7" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M20 33V36" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M4 20H7" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M33 20H36" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M8.5 8.5L10.5 10.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M29.5 29.5L31.5 31.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M31.5 8.5L29.5 10.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M8.5 31.5L10.5 29.5" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M33 4L34 2L35 4L37 4.5L35 5L34 7L33 5L31 4.5Z" fill="#FDE68A" opacity="0.9"/><circle cx="5" cy="5" r="1" fill="#F9A8C9" opacity="0.75"/></svg>`,

  // ── いい感じ：ねむり ──
  'すぐ眠れた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 10C19 10 13 15.5 13 22C13 28.5 19 34 26 34C20 34 8 28 8 22C8 16 14 10 20 10C22 10 24 10.5 26 10Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><circle cx="30" cy="13" r="1.2" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="0.8"/><circle cx="33" cy="10" r="1.6" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="0.9"/><circle cx="36" cy="7" r="2" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><path d="M31 24L32 22L33 24L35 24.5L33 25L32 27L31 25L29 24.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="6" cy="10" r="1" fill="#F9A8C9" opacity="0.75"/><circle cx="6" cy="30" r="0.8" fill="#FDE68A" opacity="0.65"/></svg>`,

  'すっきり起きた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="10" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><circle cx="20" cy="20" r="5.5" fill="#FDE68A" opacity="0.65"/><path d="M20 4V8" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M20 32V36" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M4 20H8" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M32 20H36" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round"/><path d="M7.5 7.5L10.5 10.5" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round"/><path d="M29.5 29.5L32.5 32.5" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round"/><path d="M32.5 7.5L29.5 10.5" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round"/><path d="M7.5 32.5L10.5 29.5" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round"/><circle cx="35" cy="14" r="1.3" fill="#FDE68A" opacity="0.85"/><circle cx="5" cy="14" r="1" fill="#F9A8C9" opacity="0.75"/></svg>`,

  'いい夢を見た': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="10" cy="25" rx="7" ry="5.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.3"/><ellipse cx="20" cy="22" rx="10" ry="7" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><ellipse cx="30" cy="25" rx="7" ry="5.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.3"/><path d="M3 25H37V31Q37 33 35 33H5Q3 33 3 31Z" fill="#EDE8FA" stroke="none"/><ellipse cx="17" cy="20" rx="4" ry="2.5" fill="rgba(255,255,255,0.55)"/><path d="M28 9L29 6.5L30 9L32 9.5L30 10L29 12.5L28 10L26 9.5Z" fill="#FDE68A" opacity="0.9"/><circle cx="7" cy="14" r="1.5" fill="#FDE68A" opacity="0.85"/><path d="M33 16L34 14.5L35 16L37 16.5L35 17L34 18.5L33 17L31 16.5Z" fill="#F9A8C9" opacity="0.85"/><circle cx="9" cy="19" r="1" fill="#F9A8C9" opacity="0.75"/></svg>`,

  // ── いい感じ：気持ち ──
  '楽しい気分': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14" fill="#EDE8FA" opacity="0.35"/><circle cx="20" cy="20" r="9" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><circle cx="20" cy="20" r="4" fill="#DDD6FE"/><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.65)"/><path d="M8 7L9 5L10 7L12 7.5L10 8L9 10L8 8L6 7.5Z" fill="#FDE68A" opacity="0.9"/><path d="M30 5L31 3.5L32 5L34 5.5L32 6L31 7.5L30 6L28 5.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="35" cy="14" r="1.3" fill="#FDE68A" opacity="0.8"/><circle cx="5" cy="14" r="1.1" fill="#FDE68A" opacity="0.75"/><circle cx="35" cy="28" r="1.4" fill="#F9A8C9" opacity="0.8"/><circle cx="5" cy="28" r="1.2" fill="#F9A8C9" opacity="0.75"/><path d="M13 34L14 32L15 34L17 34.5L15 35L14 37L13 35L11 34.5Z" fill="#F9A8C9" opacity="0.75"/><circle cx="28" cy="35" r="1" fill="#FDE68A" opacity="0.7"/></svg>`,

  '落ち着いている': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 17Q10 14 15 17Q20 20 25 17Q30 14 35 17" stroke="#9B8FEA" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M5 23Q10 20 15 23Q20 26 25 23Q30 20 35 23" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M5 17Q10 14 15 17Q20 20 25 17Q30 14 35 17L35 23Q30 20 25 23Q20 26 15 23Q10 20 5 23Z" fill="#EDE8FA" opacity="0.45"/><path d="M5 29Q10 26 15 29Q20 32 25 29Q30 26 35 29" stroke="#DDD6FE" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7"/><path d="M20 7L21 4.5L22 7L24 7.5L22 8L21 10.5L20 8L18 7.5Z" fill="#FDE68A" opacity="0.9"/><circle cx="6" cy="11" r="0.9" fill="#F9A8C9" opacity="0.75"/><circle cx="34" cy="11" r="0.9" fill="#FDE68A" opacity="0.7"/></svg>`,

  'やる気がある': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5L22.5 13.5H31.5L24.5 18.5L27 27L20 22L13 27L15.5 18.5L8.5 13.5H17.5Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4" stroke-linejoin="round"/><path d="M20 9L22 15.5H28.5L23 19L24.8 25.5L20 22.5L15.2 25.5L17 19L11.5 15.5H18Z" fill="#DDD6FE" opacity="0.7"/><circle cx="20" cy="19" r="2" fill="#FDE68A" opacity="0.85"/><path d="M32 7L33 5L34 7L36 7.5L34 8L33 10L32 8L30 7.5Z" fill="#F9A8C9" opacity="0.85"/><circle cx="6" cy="10" r="1.3" fill="#F9A8C9" opacity="0.8"/><circle cx="35" cy="22" r="1" fill="#FDE68A" opacity="0.75"/><circle cx="5" cy="28" r="0.9" fill="#F9A8C9" opacity="0.7"/></svg>`,

  '嬉しい感じ': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 34C20 34 5 24 5 14C5 9 9 5 13 5C16 5 18 7 20 10C22 7 24 5 27 5C31 5 35 9 35 14C35 24 20 34 20 34Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><path d="M20 14L21.3 18.5H26L22.3 21L23.7 25.5L20 23L16.3 25.5L17.7 21L14 18.5H18.7Z" fill="#FDE68A" opacity="0.85"/><path d="M7 8L8 6L9 8L11 8.5L9 9.5L8 11.5L7 9.5L5 8.5Z" fill="#F9A8C9" opacity="0.85"/><circle cx="33" cy="8" r="1.3" fill="#F9A8C9" opacity="0.8"/><circle cx="35" cy="20" r="1" fill="#FDE68A" opacity="0.75"/></svg>`,

  'ほっとしている': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 28Q10 36 20 36Q30 36 30 28" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><ellipse cx="20" cy="28" rx="10" ry="3.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><path d="M30 26Q36 26 36 30Q36 34 30 34" stroke="#9B8FEA" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M14 22Q12 17 14 13" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M20 21Q18 16 20 12" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M26 22Q24 17 26 13" stroke="#C4B5FD" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M17 8L18 6L19 8L21 8.5L19 9L18 11L17 9L15 8.5Z" fill="#FDE68A" opacity="0.85"/><circle cx="24" cy="9" r="1" fill="#F9A8C9" opacity="0.75"/><circle cx="34" cy="25" r="0.8" fill="#FDE68A" opacity="0.7"/></svg>`,

  '安心している': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4C13 7 7 7 7 7V21C7 30 13 36 20 38C27 36 33 30 33 21V7C33 7 27 7 20 4Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><circle cx="20" cy="22" r="8" fill="rgba(255,255,255,0.45)"/><circle cx="20" cy="22" r="5" fill="#DDD6FE" opacity="0.8"/><circle cx="20" cy="22" r="2.5" fill="rgba(255,255,255,0.7)"/><path d="M8 13L9 11L10 13L12 13.5L10 14L9 16L8 14L6 13.5Z" fill="#FDE68A" opacity="0.8"/><circle cx="32" cy="12" r="1.1" fill="#F9A8C9" opacity="0.75"/><circle cx="33" cy="25" r="0.9" fill="#FDE68A" opacity="0.7"/></svg>`,

  // ── いい感じ：状況 ──
  '朝起きられた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 26H37" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round"/><path d="M3 29H37" stroke="#DDD6FE" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/><circle cx="20" cy="20" r="8.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.5"/><circle cx="20" cy="20" r="4.5" fill="#FDE68A" opacity="0.65"/><path d="M20 5V8" stroke="#9B8FEA" stroke-width="1.4" stroke-linecap="round"/><path d="M29 9L27 11" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M11 9L13 11" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M33 18H36" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M4 18H7" stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"/><path d="M32 5L33 3L34 5L36 5.5L34 6L33 8L32 6L30 5.5Z" fill="#FDE68A" opacity="0.9"/><circle cx="5" cy="8" r="1" fill="#F9A8C9" opacity="0.75"/></svg>`,

  '学校に行けた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="15" width="26" height="21" rx="1.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M5 16L20 5L35 16" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.5"/><rect x="10" y="18" width="6" height="6" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><rect x="24" y="18" width="6" height="6" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><rect x="16" y="26" width="8" height="10" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.2"/><path d="M20 2L21.2 5.5H25L22 7.5L23.2 11L20 9L16.8 11L18 7.5L15 5.5H18.8Z" fill="#FDE68A" opacity="0.9"/><circle cx="34" cy="9" r="0.9" fill="#F9A8C9" opacity="0.75"/><circle cx="6" cy="9" r="0.8" fill="#FDE68A" opacity="0.7"/></svg>`,

  '集中できた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" fill="none" stroke="#DDD6FE" stroke-width="1.2"/><circle cx="20" cy="20" r="12" fill="none" stroke="#C4B5FD" stroke-width="1.4"/><circle cx="20" cy="20" r="8" fill="none" stroke="#9B8FEA" stroke-width="1.6"/><circle cx="20" cy="20" r="4" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.8"/><path d="M20 15.5L21.1 18.9H24.5L21.8 20.9L22.9 24.5L20 22.5L17.1 24.5L18.2 20.9L15.5 18.9H18.9Z" fill="#FDE68A" opacity="0.9"/><circle cx="35" cy="8" r="0.9" fill="#FDE68A" opacity="0.75"/><circle cx="5" cy="8" r="0.8" fill="#F9A8C9" opacity="0.7"/></svg>`,

  '外に出られた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="18" width="24" height="18" rx="2" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><path d="M3 19L17 6L29 19" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.5"/><rect x="8" y="21" width="7" height="7" rx="1.5" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1"/><path d="M17 36V25Q17 23.5 18 23.5H24Q25 23.5 25 25V36" stroke="#9B8FEA" stroke-width="1.2" fill="none"/><path d="M17 25.5L24 24.5V36L17 36Z" fill="#DDD6FE" opacity="0.7"/><path d="M26 28Q30 25 33 28" stroke="#FDE68A" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.9"/><path d="M27 32Q31 29 34 32" stroke="#FDE68A" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.75"/><path d="M32 10L33 8L34 10L36 10.5L34 11L33 13L32 11L30 10.5Z" fill="#FDE68A" opacity="0.9"/><circle cx="35" cy="19" r="1" fill="#F9A8C9" opacity="0.75"/></svg>`,

  '人と話せた': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8Q4 5 7 5H22Q25 5 25 8V17Q25 20 22 20H10L4 25V8Z" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4" stroke-linejoin="round"/><path d="M16 18Q16 15 19 15H33Q36 15 36 18V27Q36 30 33 30H22L16 35V18Z" fill="#DDD6FE" stroke="#9B8FEA" stroke-width="1.3" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="2" fill="#FDE68A" opacity="0.85"/><circle cx="17.5" cy="12.5" r="2" fill="#FDE68A" opacity="0.85"/><circle cx="23" cy="22.5" r="1.8" fill="#F9A8C9" opacity="0.8"/><circle cx="28.5" cy="22.5" r="1.8" fill="#F9A8C9" opacity="0.8"/><circle cx="35" cy="9" r="1" fill="#FDE68A" opacity="0.7"/></svg>`,

  // ── うまく言えない ──
  'なんとなくしんどい': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="16" rx="8" ry="5.5" fill="#DDD6FE" opacity="0.5"/><ellipse cx="27" cy="14" rx="9" ry="6" fill="#DDD6FE" opacity="0.45"/><ellipse cx="20" cy="22" rx="12" ry="7" fill="#EDE8FA" stroke="#B0A8C0" stroke-width="1.2"/><ellipse cx="13" cy="26" rx="6" ry="4" fill="#EDE8FA" stroke="#B0A8C0" stroke-width="1" opacity="0.8"/><ellipse cx="29" cy="27" rx="7" ry="4.5" fill="#EDE8FA" stroke="#B0A8C0" stroke-width="1" opacity="0.75"/><circle cx="20" cy="22" r="3" fill="#C4B5FD" opacity="0.3"/><circle cx="34" cy="12" r="0.7" fill="#FDE68A" opacity="0.6"/><circle cx="6" cy="30" r="0.6" fill="#FDE68A" opacity="0.5"/></svg>`,

  '言葉にならない': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9Q6 6 9 6H31Q34 6 34 9V22Q34 25 31 25H15L8 31V25H9Q6 25 6 22Z" fill="rgba(255,255,255,0.7)" stroke="#B0A8C0" stroke-width="1.4" stroke-linejoin="round"/><circle cx="13" cy="16" r="2.2" fill="#B0A8C0" opacity="0.8"/><circle cx="20" cy="16" r="2.2" fill="#B0A8C0" opacity="0.7"/><circle cx="27" cy="16" r="2.2" fill="#B0A8C0" opacity="0.55"/><circle cx="13" cy="21" r="1.2" fill="#DDD6FE" opacity="0.75"/><circle cx="20" cy="21" r="1" fill="#DDD6FE" opacity="0.6"/><circle cx="27" cy="21" r="1.3" fill="#DDD6FE" opacity="0.7"/><circle cx="34" cy="33" r="0.7" fill="#FDE68A" opacity="0.6"/></svg>`,

  'いつもと違う': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="20" r="8.5" fill="#EDE8FA" stroke="#9B8FEA" stroke-width="1.4"/><circle cx="12" cy="20" r="4" fill="#DDD6FE" opacity="0.6"/><path d="M21.5 18.5L24 20L21.5 21.5" stroke="#B0A8C0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M18.5 21.5L16 20L18.5 18.5" stroke="#B0A8C0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="28" cy="20" r="8.5" fill="#F1EFF4" stroke="#B0A8C0" stroke-width="1.2" stroke-dasharray="2.5 2"/><ellipse cx="28" cy="20" rx="5" ry="4" fill="#DDD6FE" opacity="0.3"/><circle cx="35" cy="10" r="0.8" fill="#FDE68A" opacity="0.65"/><circle cx="5" cy="10" r="0.7" fill="#FDE68A" opacity="0.55"/></svg>`,

  'もやもやする': `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22Q5 18 9 14Q12 11 16 13Q19 9 24 12Q29 9 32 14Q35 19 31 22Q35 26 31 30Q26 33 22 30Q17 33 13 30Q8 28 9 23Q5 22 9 22Z" fill="#EDE8FA" stroke="#B0A8C0" stroke-width="1.4" stroke-linejoin="round"/><path d="M15 21Q18 17 22 20Q25 23 23 26Q20 28 19 25Q19 22 21 22Q22 22 22 23" stroke="#9B8FEA" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="14" cy="17" r="0.9" fill="#C4B5FD" opacity="0.85"/><circle cx="29" cy="18" r="0.9" fill="#C4B5FD" opacity="0.7"/><circle cx="27" cy="29" r="1" fill="#DDD6FE" opacity="0.75"/><circle cx="34" cy="12" r="0.7" fill="#FDE68A" opacity="0.6"/></svg>`,
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
