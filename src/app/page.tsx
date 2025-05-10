'use client'
import AuthProvider from "./Proveedor/AuthProvider";
import UserProfile from "./componentes/UserProfile";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold">Sistema de Autenticación</h1>
        
        
        <AuthProvider>
          <UserProfile />
        </AuthProvider>
      </main>
    </div>
  );
}