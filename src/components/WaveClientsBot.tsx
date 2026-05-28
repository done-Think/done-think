export default function WaveClientsBot() {
  return (
    <svg
      id="visual"
      viewBox="0 560 900 40"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ display: "block", width: "100%" }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#33fca7" />
          <stop offset="100%" stopColor="#078c66" />
        </linearGradient>
      </defs>

      <path
        d="M0 563L21.5 566.5C43 570 86 577 128.8 576.2C171.7 575.3 214.3 566.7 257.2 566.3C300 566 343 574 385.8 577C428.7 580 471.3 578 514.2 578C557 578 600 580 642.8 578.3C685.7 576.7 728.3 571.3 771.2 569.2C814 567 857 568 878.5 568.5L900 569L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="url(#waveGradient)"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
