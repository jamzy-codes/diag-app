import Logo from "@/components/brand/Logo";

export default function OnboardingNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <Logo className="text-sm" />
      </div>
    </nav>
  );
}