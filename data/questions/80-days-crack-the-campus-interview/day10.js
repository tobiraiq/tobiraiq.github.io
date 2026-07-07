window.QUIZ_DAY_DATA = {
  title: "Day 10 — Letter & Number Series",
  questions: [
    {q:"What is the position of the letter M in the alphabet?",options:["12","13","14","15"],answer:1,explanation:"A=1, B=2... M is the 13th letter."},
    {q:"What is the position of letter T from the back of the alphabet?",options:["5","6","7","8"],answer:2,explanation:"Front+Back=27. T=20 from front. From back=27−20=7."},
    {q:"Next letter: C, F, I, L, ?",options:["M","N","O","P"],answer:2,explanation:"Positions: 3,6,9,12 (+3 each). Next=15=O."},
    {q:"Next letter: Z, X, V, T, ?",options:["P","Q","R","S"],answer:2,explanation:"Positions: 26,24,22,20 (−2 each). Next=18=R."},
    {q:"What should you do before solving any letter series question?",options:["Guess the pattern","Write out A=1 to Z=26 on paper","Count backward from Z","Convert all letters to Roman numerals"],answer:1,explanation:"Always write the full alphabet with positions (A=1 to Z=26) on paper. Never count letters in your head during an exam — it wastes time and causes errors."},
    {q:"Next: A1, B4, C9, D16, ?",options:["E20","E25","F25","F30"],answer:1,explanation:"Letters: A,B,C,D (+1 each) → next=E. Numbers: 1,4,9,16 (squares: 1²,2²,3²,4²) → next=25. Answer=E25."},
    {q:"Next pair: AZ, BY, CX, DW, ?",options:["EV","EU","FV","FU"],answer:0,explanation:"Forward: A,B,C,D (+1) → next=E. Backward: Z,Y,X,W (−1) → next=V. Answer=EV."},
    {q:"Next: B, D, G, K, P, ?",options:["T","U","V","W"],answer:2,explanation:"Positions: 2,4,7,11,16 (diffs: +2,+3,+4,+5). Next diff=+6. 16+6=22=V."},
    {q:"Front position + Back position for any letter = ?",options:["25","26","27","28"],answer:2,explanation:"Front position + Back position = 27 for every letter. Example: A=1 from front, A=26 from back. 1+26=27."},
    {q:"Next: J10, L12, N14, P16, ?",options:["Q17","R17","R18","S18"],answer:2,explanation:"Letters: J,L,N,P (+2) → next=R. Numbers: 10,12,14,16 (+2) → next=18. Answer=R18."},
    {q:"Odd one out: AC, EG, IK, MN, OQ.",options:["AC","EG","MN","OQ"],answer:2,explanation:"Each pair has 1 letter gap between them (A→C skip B, E→G skip F). MN: M=13, N=14 — adjacent letters, no skip. MN is the odd one out."},
    {q:"Next: ACE, FHJ, KMO, ?",options:["PRT","PRQ","QRT","QPR"],answer:0,explanation:"Each group: 3 letters with +2 gap. Group starts: A(1), F(6), K(11) (+5 between groups). Next start=P(16). P,R,T=PRT."},
    {q:"What is the position of letter 'S' from the front?",options:["17","18","19","20"],answer:2,explanation:"A=1...S=19 (counting: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S = 19th)."},
    {q:"Next: Z1, X4, V9, T16, ?",options:["R24","R25","S25","S24"],answer:1,explanation:"Letters: Z,X,V,T (−2 each) → next=R. Numbers: 1,4,9,16 (squares) → next=25. Answer=R25."},
    {q:"True or False: Converting letters to their positions (A=1 to Z=26) before solving is the recommended approach.",options:["True","False"],answer:0,explanation:"True — always convert to positions first. Then apply the same 4-step trick from number series (constant diff, ratio, diff-of-diffs, alternating)."}
  ]
};
