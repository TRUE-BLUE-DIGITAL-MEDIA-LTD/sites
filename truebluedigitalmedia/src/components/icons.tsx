type IconProps = { className?: string };

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 70 70" className={className}>
      <path d="M25.3,44.8C35.7,55.3,44.2,56,46.6,56c3.9,0,9.4-5,9.4-6.3v-2.5c0-0.6-0.4-1.1-1-1.3l-10-3.2c-0.5-0.2-1,0-1.4,0.3L40,46.8c-0.4,0.4-1.1,0.5-1.6,0.2c-1.5-0.9-4.8-2.9-8.6-6.8c-3.8-3.8-5.9-7.1-6.8-8.6c-0.3-0.5-0.2-1.2,0.2-1.6l3.7-3.7c0.4-0.4,0.5-0.9,0.3-1.4l-3.2-10c-0.2-0.6-0.7-1-1.3-1h-2.5C19,14.1,14,19.7,14,23.5C14,25.8,14.8,34.3,25.3,44.8L25.3,44.8z" />
    </svg>
  );
}

export function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="square"
      className={className}
    >
      <path d="M8.5 18.5 15 12l6.5 6.5" />
    </svg>
  );
}

export function CursorIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 70 70" className={className}>
      <path d="M41,60c0,0-0.1,0-0.1,0c-0.5-0.1-0.8-0.4-0.9-0.9l-2.9-26.2L10.9,30c-0.5-0.1-0.8-0.4-0.9-0.9c-0.1-0.5,0.2-0.9,0.6-1.1l48-18c0.4-0.1,0.8,0,1.1,0.2c0.3,0.3,0.4,0.7,0.2,1.1l-18,48C41.8,59.7,41.4,60,41,60z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 70 70" className={className}>
      <path d="M35,10c-9.4,0-17,7.6-17,17c0,4.1,1.5,8,4.1,11.1l0.1,0.1c4.6,5.3,7.9,10.8,9.9,16.4l1,3.7l0,0.1c0.3,1.1,1,1.6,1.9,1.6c0.9,0,1.6-0.5,1.9-1.6l1-3.8c1.9-5.6,5.3-11.2,9.9-16.4l0.1-0.1C50.5,35,52,31.1,52,27C52,17.6,44.4,10,35,10z M35,33c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6S38.3,33,35,33z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 70 70" className={className}>
      <path d="M35,60c-13.8,0-25-11.2-25-25s11.2-25,25-25c13.8,0,25,11.2,25,25S48.8,60,35,60z M35,12c-12.7,0-23,10.3-23,23s10.3,23,23,23c12.7,0,23-10.3,23-23S47.7,12,35,12z" />
      <path d="M35,14c-11.6,0-21,9.4-21,21s9.4,21,21,21c11.6,0,21-9.4,21-21S46.6,14,35,14z M36,35c0,0.3-0.1,0.5-0.3,0.7l-8,8C27.5,43.9,27.3,44,27,44c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.7-7.7V19c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1V35z" />
    </svg>
  );
}
