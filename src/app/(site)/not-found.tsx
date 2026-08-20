import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-manifest">
      <div className="text-center px-6">
        <p className="font-mono text-signal text-sm uppercase tracking-widest">404</p>
        <h1 className="mt-3 font-display text-4xl text-harbor">
          This route doesn't exist.
        </h1>
        <p className="mt-3 text-ink/60 max-w-md mx-auto">
          The page you're looking for may have moved. Check the address or
          head back to the homepage.
        </p>
        <Button href="/" className="mt-8">Back to Home</Button>
      </div>
    </section>
  );
}
