export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Terms of Service</h1>

      <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Purpose</h2>

          <p className="mt-3 leading-7 text-gray-600">
            OpsPilot is intended for internal operational use by authorized
            personnel.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Use of the Extension</h2>

          <p className="mt-3 leading-7 text-gray-600">
            Users must use the extension only for legitimate operational
            activities.
          </p>

          <p className="mt-3 leading-7 text-gray-600">
            Users are responsible for maintaining the security of their Google
            account and operational environment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Availability</h2>

          <p className="mt-3 leading-7 text-gray-600">
            OpsPilot is provided on an &quot;as-is&quot; basis without
            warranties of any kind. Features may change without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>

          <p className="mt-3 leading-7 text-gray-600">
            The developers of OpsPilot shall not be liable for operational
            losses caused by incorrect configuration, misuse, unauthorized
            access, or user error.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Changes</h2>

          <p className="mt-3 leading-7 text-gray-600">
            These Terms of Service may be updated at any time without prior
            notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-3 leading-7 text-gray-600">
            For questions regarding these Terms of Service, please contact the
            application administrator.
          </p>
        </div>
      </section>
    </main>
  );
}
