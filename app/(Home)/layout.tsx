import Header from "@/components/navBar/Header";
import TopHead from "@/components/navBar/TopHead";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-between  bg-gray-500">
      <TopHead />
      <Header />
        {children}
    </main>
  );
}
