export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Overview</h2>

          <p className="mt-3 leading-7 text-gray-600">
            OpsPilot is an internal Chrome Extension developed to support
            warehouse operational workflows.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Google Account Authorization
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            OpsPilot requests Google OAuth authorization only after the user
            explicitly grants permission.
          </p>

          <p className="mt-3 leading-7 text-gray-600">
            The extension currently requests read-only access to Google Sheets
            in order to retrieve operational configuration.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Information Collected</h2>

          <p className="mt-3 leading-7 text-gray-600">
            OpsPilot does not collect personally identifiable information.
          </p>

          <p className="mt-3 leading-7 text-gray-600">
            During normal operation, the extension may temporarily access:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
            <li>Google OAuth access token</li>
            <li>Google Sheets configuration data</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Data Usage</h2>

          <p className="mt-3 leading-7 text-gray-600">
            All configuration data is processed locally within the Chrome
            Extension.
          </p>

          <p className="mt-3 leading-7 text-gray-600">
            No Google Sheets data is uploaded, stored, or shared with any
            external server operated by OpsPilot.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Third-Party Sharing</h2>

          <p className="mt-3 leading-7 text-gray-600">
            OpsPilot does not sell, rent, or share user information with any
            third party.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-3 leading-7 text-gray-600">
            If you have any questions regarding this Privacy Policy, please
            contact the application administrator.
          </p>
        </div>
      </section>
    </main>
  );
}
