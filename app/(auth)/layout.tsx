
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen w-full justify-center items-center">
       {children}
    </section>
  );
}
