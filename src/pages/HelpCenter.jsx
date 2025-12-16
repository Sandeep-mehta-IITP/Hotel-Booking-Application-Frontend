import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const HelpCenter = () => {
  return (
    <div className="mt-8 px-6 md:px-16 lg:px-24 xl:px-32 py-16">
      {/* Page Title */}
      <Title
        align="center"
        title="Help Center"
        subTitle="Need assistance? We’re here to help you every step of your journey with QuickStay."
      />

      {/* Help Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {/* Booking Help */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Booking Assistance
          </h3>
          <p className="text-gray-600 text-sm">
            Learn how to search hotels, select rooms, apply filters and complete
            your booking smoothly on QuickStay.
          </p>
        </div>

        {/* Payment Help */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Payments & Refunds
          </h3>
          <p className="text-gray-600 text-sm">
            Get help with Stripe payments, booking confirmation, failed
            transactions and refund-related queries.
          </p>
        </div>

        {/* Account Help */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Account & Profile
          </h3>
          <p className="text-gray-600 text-sm">
            Manage your account, update profile details, view booking history
            and secure your login credentials.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-950 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <p className="font-medium text-gray-800">
              How do I cancel a booking?
            </p>
            <p className="text-sm text-gray-600 mt-1">
              You can cancel your booking from the “My Bookings” section,
              depending on the hotel’s cancellation policy.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="font-medium text-gray-800">
              Is online payment secure?
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Yes. All payments are processed securely using Stripe with
              industry-standard encryption.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="font-medium text-gray-800">
              How can hotel owners manage bookings?
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Hotel owners can log into the dashboard to track bookings, revenue
              and manage room listings.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-20 bg-primary/5 rounded-lg p-10 text-center">
        <h3 className="text-xl font-semibold text-blue-950 mb-3">
          Still Need Help?
        </h3>
        <p className="text-gray-600 mb-6">
          If you can’t find the answer you’re looking for, our support team is
          just a click away.
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

export default HelpCenter;
