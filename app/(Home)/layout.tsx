import Header from "@/components/navBar/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-between">
      <Header />
        {children}
    </main>
  );
}
