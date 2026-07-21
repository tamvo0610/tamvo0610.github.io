export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Shopee Ops Terms of Service</h1>

      <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Purpose</h2>

          <p className="mt-3 leading-8 text-gray-600">
            Shopee Ops is intended exclusively for internal warehouse operation
            personnel.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Permitted Use</h2>

          <p className="mt-3 leading-8 text-gray-600">
            Users must use Shopee Ops only for legitimate operational purposes
            and in accordance with organizational policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Google Account</h2>

          <p className="mt-3 leading-8 text-gray-600">
            Users are responsible for maintaining the security of their Google
            account used to authorize access to Google Sheets.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Availability</h2>

          <p className="mt-3 leading-8 text-gray-600">
            Shopee Ops is provided on an <strong>&quot;as-is&quot;</strong>{" "}
            basis without warranties of any kind. Features may change without
            prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>

          <p className="mt-3 leading-8 text-gray-600">
            The developers of Shopee Ops are not liable for operational losses
            resulting from incorrect configuration, misuse, or unauthorized
            access.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Changes</h2>

          <p className="mt-3 leading-8 text-gray-600">
            These Terms of Service may be updated without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-3 leading-8 text-gray-600">
            For questions regarding these Terms of Service, please contact the
            application administrator.
          </p>
        </div>
      </section>
    </main>
  );
}
