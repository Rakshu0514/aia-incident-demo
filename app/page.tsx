export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          AIA Incident Demo
        </h1>

        <p className="mt-4 text-lg">
          Autonomous Incident Detection & Resolution Demo
        </p>

        <div className="mt-8 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Application Status
          </h2>

          <p className="mt-3">
            🟢 Application is currently healthy.
          </p>

          <p className="mt-4 text-gray-600">
            This application is used to demonstrate how an
            Autonomous Incident Agent detects deployment failures,
            analyzes the root cause, and generates a fix.
          </p>
        </div>
      </div>
    </main>
  );
}
// AIA deployment webhook test
