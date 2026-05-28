export default function WaveAboutTop() {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 40"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ display: "block", width: "100%" }}
    >
      <defs>
        <linearGradient id="aboutTopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#078c66" />
          <stop offset="100%" stopColor="#33fca7" />
        </linearGradient>
      </defs>
      <path
        d="M0 19L21.5 20C43 21 86 23 128.8 25.3C171.7 27.7 214.3 30.3 257.2 30.5C300 30.7 343 28.3 385.8 25.7C428.7 23 471.3 20 514.2 22.3C557 24.7 600 32.3 642.8 32.8C685.7 33.3 728.3 26.7 771.2 25.8C814 25 857 30 878.5 32.5L900 35L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
        fill="url(#aboutTopGradient)"
        strokeLinecap="round"
        strokeLinejoin="miter"
      ></path>
    </svg>
  );
}
