import Hero from "@/components/hero/Hero";
import TopHead from "@/components/navBar/TopHead";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-500 h-max">
      <TopHead />
      <div className="flex justify-between">
        <Hero />
        {children}
      </div>
    </main>
  );
}
