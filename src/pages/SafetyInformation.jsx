import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const SafetyInformation = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 mt-8">
      {/* Page Title */}
      <Title
        align="center"
        title="Safety Information"
        subTitle="Your safety and comfort are our top priorities at QuickStay. Learn how we ensure a secure and worry-free stay."
      />

      {/* Safety Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {/* Verified Properties */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Verified Properties
          </h3>
          <p className="text-gray-600 text-sm">
            All hotels listed on QuickStay go through a verification process to
            ensure authenticity, quality standards and guest safety.
          </p>
        </div>

        {/* Secure Payments */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Secure Payments
          </h3>
          <p className="text-gray-600 text-sm">
            Online transactions are protected using Stripe’s secure payment
            gateway with advanced encryption and fraud prevention.
          </p>
        </div>

        {/* Data Privacy */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Data Privacy
          </h3>
          <p className="text-gray-600 text-sm">
            Your personal data is handled with strict confidentiality and is
            never shared without consent, following best security practices.
          </p>
        </div>
      </div>

      {/* Guest Safety Guidelines */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-950 mb-6 text-center">
          Guest Safety Guidelines
        </h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-5">
            <p className="font-medium text-gray-800">During Your Stay</p>
            <p className="text-sm text-gray-600 mt-1">
              Follow hotel rules, emergency instructions and local regulations.
              Always secure your belongings and use in-room safes if available.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <p className="font-medium text-gray-800">Health & Hygiene</p>
            <p className="text-sm text-gray-600 mt-1">
              Partner hotels follow cleanliness and hygiene standards to ensure
              a safe environment for all guests.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <p className="font-medium text-gray-800">Emergency Support</p>
            <p className="text-sm text-gray-600 mt-1">
              In case of emergencies, hotel staff and local authorities are
              available to assist you promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-20 bg-primary/5 rounded-lg p-10 text-center">
        <h3 className="text-xl font-semibold text-blue-950 mb-3">
          Need Immediate Assistance?
        </h3>
        <p className="text-gray-600 mb-6">
          If you face any safety concerns during booking or stay, please reach
          out to our support team right away.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default SafetyInformation;
