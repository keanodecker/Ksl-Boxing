'use client';

export default function CookieSettingsButton() {
  const open = () => window.dispatchEvent(new CustomEvent('openCookieSettings'));
  return (
    <button
      onClick={open}
      className="text-sm hover:text-primary transition-colors duration-200"
    >
      Cookie-Einstellungen
    </button>
  );
}
