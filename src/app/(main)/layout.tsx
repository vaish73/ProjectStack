import NavbarShell from "@/components/Navbar/NavbarShell";
import Footer from "@/components/Footer";
import AuthProvider from "../../../context/AuthProvider";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AuthProvider>
        <NavbarShell />
        {children}
        <Footer />
      </AuthProvider>
    </div>
  );
}
