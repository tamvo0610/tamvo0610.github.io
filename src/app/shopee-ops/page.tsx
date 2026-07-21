import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <header className="border-b pb-10">
        <h1 className="text-4xl font-bold text-gray-900">Shopee Ops</h1>

        <p className="mt-4 text-lg text-gray-600">
          Internal Chrome Extension for warehouse operation automation.
        </p>

        <p className="mt-6 leading-8 text-gray-700">
          This website provides information about the Shopee Ops Chrome
          Extension and its Google OAuth authorization. Shopee Ops is an
          internal productivity tool designed to assist warehouse operation
          teams by automating operational workflows using configuration stored
          in Google Sheets.
        </p>
      </header>

      {/* About */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">About Shopee Ops</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Shopee Ops helps warehouse operators reduce repetitive manual work by
          automating operational tasks such as Pickup Assignment and Report
          Outbound generation.
        </p>

        <p className="mt-4 leading-8 text-gray-700">
          Operational configuration is maintained in Google Sheets, allowing
          authorized users to update business rules without modifying or
          reinstalling the extension.
        </p>
      </section>

      {/* Intended Users */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Intended Users</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Shopee Ops is intended exclusively for authorized warehouse operation
          personnel.
        </p>

        <p className="mt-2 leading-8 text-gray-700">
          The extension is not intended for public use.
        </p>
      </section>

      {/* OAuth */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Google Account Authorization</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Shopee Ops uses Google OAuth to allow authorized users to securely
          access operational configuration stored in Google Sheets.
        </p>

        <p className="mt-4 leading-8 text-gray-700">
          Authorization is requested only after the user explicitly grants
          permission.
        </p>
      </section>

      {/* Permissions */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Permissions Requested</h2>

        <div className="mt-6 overflow-hidden rounded-lg border">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-3 text-left">Permission</th>
                <th className="border px-4 py-3 text-left">Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-3 font-mono text-sm">
                  Google Sheets (Read Only)
                </td>

                <td className="border px-4 py-3">
                  Read operational configuration from Google Sheets.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Data */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Google Sheets Data Used</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Shopee Ops reads operational configuration from Google Sheets,
          including:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          <li>Driver configuration</li>
          <li>Pickup Point configuration</li>
          <li>Report Outbound configuration</li>
          <li>Report Receiver configuration</li>
        </ul>
      </section>

      {/* Data Processing */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Data Processing</h2>

        <p className="mt-4 leading-8 text-gray-700">
          All Google Sheets data is processed locally inside the Chrome
          Extension.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          <li>No personal information is collected.</li>
          <li>No Google Sheets data is uploaded to external servers.</li>
          <li>No user information is sold.</li>
          <li>No user information is shared with third parties.</li>
        </ul>
      </section>

      {/* Footer */}
      <section className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-semibold">Legal</h2>

        <div className="mt-6 flex gap-8">
          <Link
            href="/opspilot/privacy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            href="/opspilot/terms"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </section>
    </main>
  );
}
