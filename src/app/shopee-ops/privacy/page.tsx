export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Shopee Ops Privacy Policy</h1>

      <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Overview</h2>

          <p className="mt-3 leading-8 text-gray-600">
            Shopee Ops is an internal Chrome Extension that assists warehouse
            operation teams by automating operational workflows.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Google Account Authorization
          </h2>

          <p className="mt-3 leading-8 text-gray-600">
            Shopee Ops requests Google OAuth authorization only after the user
            explicitly grants permission.
          </p>

          <p className="mt-3 leading-8 text-gray-600">
            The extension currently requests read-only access to Google Sheets
            for retrieving operational configuration.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Information Accessed</h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Google OAuth access token</li>
            <li>Driver configuration</li>
            <li>Pickup Point configuration</li>
            <li>Report Outbound configuration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Data Usage</h2>

          <p className="mt-3 leading-8 text-gray-600">
            All configuration data is processed locally inside the Chrome
            Extension.
          </p>

          <p className="mt-3 leading-8 text-gray-600">
            Shopee Ops does not upload Google Sheets data to external servers.
          </p>

          <p className="mt-3 leading-8 text-gray-600">
            Shopee Ops does not collect, sell, or share personal information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-3 leading-8 text-gray-600">
            For questions regarding this Privacy Policy, please contact the
            application administrator.
          </p>
        </div>
      </section>
    </main>
  );
}
