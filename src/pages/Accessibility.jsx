import React from "react";
import Title from "../components/Title";

const Accessibility = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-20">
      {/* Page Title */}
      <div className="mb-16">
        <Title
          align="center"
          title="Accessibility"
          subTitle="Our commitment to making QuickStay accessible for everyone."
        />
      </div>

      {/* Intro / Commitment */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <p className="text-gray-600 text-lg leading-relaxed">
          At <span className="font-semibold text-blue-950">QuickStay</span>, we
          believe travel should be accessible to everyone. We are committed to
          creating an inclusive digital experience that allows all users,
          including people with disabilities, to browse, book, and manage stays
          with ease.
        </p>
      </div>

      {/* Accessibility Features */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-12">
          Accessibility Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border p-8 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-950 mb-4">
              Screen Reader Compatibility
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our platform supports screen readers with clear labels, semantic
              HTML structure, and predictable navigation to ensure content is
              easily understandable.
            </p>
          </div>

          <div className="rounded-xl border p-8 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-950 mb-4">
              Keyboard-Friendly Navigation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All major interactions can be performed using a keyboard, helping
              users who rely on alternative input methods navigate smoothly.
            </p>
          </div>

          <div className="rounded-xl border p-8 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-950 mb-4">
              Clear & Readable Interface
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We maintain proper color contrast, legible fonts, and responsive
              layouts so content remains readable across devices and abilities.
            </p>
          </div>
        </div>
      </div>

      {/* Continuous Improvement */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 mb-5">
          Continuous Improvement
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Accessibility is an ongoing journey. We actively test, review, and
          enhance our platform to align with best practices and evolving
          accessibility standards.
        </p>
      </div>

      {/* Help / Feedback */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-primary/5 px-8 py-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-950 mb-4">
            Need Help or Want to Share Feedback?
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            If you experience any accessibility issues or have ideas on how we
            can improve, our support team is always here to help.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:opacity-90 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
