interface SocialButtonProps {
  provider: "Google" | "Microsoft";
  onClick: () => void;
  disabled?: boolean;
}

export function SocialButton({ provider, onClick, disabled }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-950/15 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-orange/40 hover:bg-orange/10 hover:shadow-md hover:shadow-orange/5 focus:ring-2 focus:ring-orange/20 focus:outline-none active:scale-[0.98] disabled:opacity-60"
    >
      {provider === "Google" ?
        <GoogleLogo />
      : <MicrosoftLogo />}
      {provider}
    </button>
  );
}

function GoogleLogo() {
  return (
    <svg
      className="mr-2 size-4"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#EA4335"
        d="M12 5.04c1.67 0 3.17.58 4.35 1.7l3.25-3.25C17.63 1.68 14.98 1 12 1 7.35 1 3.37 3.67 1.39 7.56l3.85 2.99c.9-2.7 3.4-4.51 6.76-4.51z"
      />
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.42 3.57l3.76 2.91c2.2-2.03 3.49-5.02 3.49-8.63z"
      />
      <path
        fill="#FBBC05"
        d="M5.24 14.55A7.12 7.12 0 014.8 12c0-.89.15-1.75.44-2.55L1.39 6.46A11.94 11.94 0 000 12c0 2.02.5 3.92 1.39 5.54l3.85-2.99z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.76-2.91c-1.1.74-2.5 1.18-4.2 1.18-3.36 0-5.86-1.81-6.76-4.51l-3.85 2.99C3.37 20.33 7.35 23 12 23z"
      />
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      className="mr-2 size-4"
      viewBox="0 0 23 23"
      aria-hidden
    >
      <path
        fill="#F25022"
        d="M0 0h11v11H0z"
      />
      <path
        fill="#7FBA00"
        d="M12 0h11v11H12z"
      />
      <path
        fill="#01A6F0"
        d="M0 12h11v11H0z"
      />
      <path
        fill="#FFB900"
        d="M12 12h11v11H12z"
      />
    </svg>
  );
}
