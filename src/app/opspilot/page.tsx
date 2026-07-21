import Link from "next/link";

export default function OpsPilotPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">OpsPilot</h1>

      <p className="mt-6 text-lg text-gray-600">
        OpsPilot is an internal Chrome Extension designed to streamline Shopee
        warehouse and logistics operations through configurable workflows
        powered by Google Sheets.
      </p>

      <div className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold">Features</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Google Sheets based configuration</li>
          <li>Pickup Assignment automation</li>
          <li>Report Outbound automation</li>
          <li>Shopee Operation Assistant</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Google Account Authorization
        </h2>

        <p className="leading-7 text-gray-600">
          OpsPilot requests read-only access to Google Sheets after explicit
          user authorization. This permission is used solely to retrieve
          operational configuration maintained by authorized users.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold">Data Processing</h2>

        <p className="leading-7 text-gray-600">
          All configuration data is processed locally inside the Chrome
          Extension. OpsPilot does not transmit Google Sheets data to any
          third-party server.
        </p>
      </div>

      <div className="mt-12 border-t pt-6">
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
      </div>
    </main>
  );
}
