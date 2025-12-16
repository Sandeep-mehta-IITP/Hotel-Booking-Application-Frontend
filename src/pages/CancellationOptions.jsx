import React from "react";
import Title from "../components/Title";

const CancellationOptions = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 mt-8">
      {/* Page Title */}
      <Title
        align="center"
        title="Cancellation Options"
        subTitle="Understand our cancellation policies to make informed booking decisions with confidence."
      />

      {/* Cancellation Types */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {/* Free Cancellation */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Free Cancellation
          </h3>
          <p className="text-gray-600 text-sm">
            Some hotels offer free cancellation within a specified time frame.
            You can cancel without any charges before the deadline.
          </p>
        </div>

        {/* Partial Refund */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Partial Refund
          </h3>
          <p className="text-gray-600 text-sm">
            Depending on the hotel’s policy, cancellations after the free window
            may be eligible for partial refunds.
          </p>
        </div>

        {/* Non-Refundable */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-950 mb-3">
            Non-Refundable Bookings
          </h3>
          <p className="text-gray-600 text-sm">
            Discounted or special offers may come with non-refundable terms.
            Please review the cancellation policy before confirming.
          </p>
        </div>
      </div>

      {/* How to Cancel */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-950 mb-6 text-center">
          How to Cancel a Booking
        </h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-5">
            <p className="font-medium text-gray-800">
              Step 1: Go to My Bookings
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Log in to your QuickStay account and navigate to the “My Bookings”
              section.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <p className="font-medium text-gray-800">
              Step 2: Select Booking
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Choose the booking you wish to cancel and review its cancellation
              policy.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <p className="font-medium text-gray-800">
              Step 3: Confirm Cancellation
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Confirm your cancellation. Any applicable refund will be processed
              automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="mt-20 bg-primary/5 rounded-lg p-10 text-center">
        <h3 className="text-xl font-semibold text-blue-950 mb-3">
          Important Notes
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Cancellation policies vary by hotel and room type. Always review the
          specific policy displayed at the time of booking. Refund timelines
          depend on the payment method used.
        </p>
        <a
          href="/help-center"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Visit Help Center
        </a>
      </div>
    </div>
  );
};

export default CancellationOptions;
