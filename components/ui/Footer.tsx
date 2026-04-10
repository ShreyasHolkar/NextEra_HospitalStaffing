export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between">
      <div>
        <p className="text-[13px] font-semibold text-gray-800">CarePulse Clinical</p>
        <p className="text-[11px] text-gray-400">© 2026 StaffPulse &amp; HIPAA Compliant Workstation.</p>
      </div>
      <nav className="flex items-center gap-6">
        {["Privacy Policy", "Terms of Service", "Security Disclosure", "Contact Support"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[12px] text-gray-500 hover:text-gray-900 transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}