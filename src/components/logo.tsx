export function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
       <path d="M5 12.0001L3 12.0001" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
       <path d="M19 12.0001L21 12.0001" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
       <path d="M12 5.00006L12 3.00006" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
       <path d="M12 21.0001L12 19.0001" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
