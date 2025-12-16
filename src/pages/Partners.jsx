import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Partners = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-24">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <Title
          align="center"
          title="Our Partners"
          subTitle="Building strong relationships to deliver exceptional travel experiences."
        />
        <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          At <span className="font-semibold text-blue-950">QuickStay</span>, we
          collaborate with trusted hotels, travel brands, and technology
          providers to create seamless booking experiences worldwide.
        </p>
      </div>

      {/* Partner Categories */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-14">
          Partnership Opportunities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              Hotel Partners
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              List your property on QuickStay and reach thousands of travelers
              looking for verified and trusted accommodations.
            </p>
            <a
              href="/contact-us"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Become a Hotel Partner →
            </a>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              Corporate & Brand Partners
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Collaborate with us on co-branding, exclusive deals, and travel
              campaigns that create value for users.
            </p>
            <a
              href="/contact-us"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Partner with Us →
            </a>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              Technology Partners
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Integrate your technology with QuickStay to power smarter
              bookings, payments, analytics, and customer experiences.
            </p>
            <a
              href="/contact-us"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Explore Integrations →
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-6">
              Why Partner with QuickStay?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Access to a growing global audience</li>
              <li>✔ Secure payments and transparent reporting</li>
              <li>✔ Dedicated partner support</li>
              <li>✔ Data-driven insights and performance tracking</li>
            </ul>
          </div>
          <img src={assets.regImage}className="w-96 h-64 bg-primary/10 rounded-xl" />
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white px-10 py-14 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Let’s Build Something Together
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you’re a hotel owner, brand, or technology provider, we’d
            love to explore partnership opportunities with you.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
