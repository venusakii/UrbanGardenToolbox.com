import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-black mb-8 text-aquamarine" style={{ fontFamily: "Archivo Black, sans-serif" }}>
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-aquamarine mb-4">1. Introduction</h2>
              <p>
                Urban Garden Toolbox ("we", "our", or "us") operates the urbangardentoolbox.com website. This page
                informs you of our policies regarding the collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aquamarine mb-4">2. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Personal Data: Name, email address, phone number</li>
                <li>Usage Data: Device information, browser type, IP address</li>
                <li>Cookies: To enhance your user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aquamarine mb-4">3. Use of Data</h2>
              <p>Urban Garden Toolbox uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aquamarine mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means
                to protect your Personal Data, but we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aquamarine mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@urbangardentoolbox.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
