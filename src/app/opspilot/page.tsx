import Link from "next/link";

export default function ShopeeOpsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Shopee Ops</h1>

      <p className="mt-4 text-lg text-gray-600">
        Shopee Ops is an internal Chrome Extension designed to support warehouse
        and logistics operations by automating repetitive operational tasks
        through configurable workflows powered by Google Sheets.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Purpose</h2>

        <p className="mt-4 leading-8 text-gray-600">
          Shopee Ops helps warehouse operators simplify daily operational
          processes such as Pickup Assignment and Report Outbound generation.
          Operational configuration is maintained in Google Sheets, allowing
          authorized users to update business rules without reinstalling or
          updating the extension.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Features</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
          <li>Pickup Assignment automation</li>
          <li>Report Outbound automation</li>
          <li>Google Sheets based configuration</li>
          <li>Warehouse operation assistant</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Google Account Authorization</h2>

        <p className="mt-4 leading-8 text-gray-600">
          Shopee Ops requests read-only access to Google Sheets after the user
          explicitly authorizes access through Google OAuth.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          This permission is required only to retrieve operational
          configuration, including:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
          <li>Driver configuration</li>
          <li>Pickup Point configuration</li>
          <li>Report Outbound configuration</li>
        </ul>

        <p className="mt-4 leading-8 text-gray-600">
          The extension never edits Google Sheets.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Data Processing</h2>

        <p className="mt-4 leading-8 text-gray-600">
          All configuration is processed locally inside the Chrome Extension.
          Shopee Ops does not upload Google Sheets data to external servers and
          does not collect personally identifiable information.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Intended Users</h2>

        <p className="mt-4 leading-8 text-gray-600">
          Shopee Ops is intended exclusively for authorized warehouse operation
          personnel.
        </p>
      </section>

      <footer className="mt-16 border-t pt-6">
        <div className="flex gap-6">
          <Link
            href="/opspilot/privacy"
            className="font-medium text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            href="/opspilot/terms"
            className="font-medium text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
