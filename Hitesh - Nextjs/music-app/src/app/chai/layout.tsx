

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
       <h2>Inner layout item</h2>
       {children}
   </div>
   
  );
}
