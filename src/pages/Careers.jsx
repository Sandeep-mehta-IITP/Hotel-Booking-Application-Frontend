import React from "react";
import Title from "../components/Title";

const Careers = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-24">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <Title
          align="center"
          title="Careers at QuickStay"
          subTitle="Build the future of travel with us."
        />
        <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          At <span className="font-semibold text-blue-950">QuickStay</span>, we
          are passionate about redefining how people discover and book stays.
          Join a team that values innovation, ownership, and meaningful impact.
        </p>
      </div>

      {/* Culture Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-12">
          Our Culture
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-950 mb-3">
              People First
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We care deeply about our people. Collaboration, respect, and
              transparency are at the core of everything we do.
            </p>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-950 mb-3">
              Ownership Mindset
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We encourage ownership and accountability. Every team member is
              empowered to make decisions and drive impact.
            </p>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-950 mb-3">
              Continuous Learning
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Growth matters. We invest in learning, experimentation, and
              personal development to help you thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-12">
          Why Join QuickStay?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl bg-primary/5 p-8">
            <h3 className="font-semibold text-blue-950 mb-3">
              Flexible Work Environment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We support flexible work schedules and remote-friendly policies
              that promote work-life balance.
            </p>
          </div>

          <div className="rounded-xl bg-primary/5 p-8">
            <h3 className="font-semibold text-blue-950 mb-3">
              Real-World Impact
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your work directly influences how travelers and hosts connect
              across the globe.
            </p>
          </div>

          <div className="rounded-xl bg-primary/5 p-8">
            <h3 className="font-semibold text-blue-950 mb-3">
              Growth Opportunities
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We promote internal growth and give you the freedom to explore
              different roles and responsibilities.
            </p>
          </div>

          <div className="rounded-xl bg-primary/5 p-8">
            <h3 className="font-semibold text-blue-950 mb-3">
              Inclusive Culture
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Diversity and inclusion are not optional for us — they are
              essential to our success.
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <h2 className="text-2xl font-semibold text-blue-950 mb-6">
          Open Positions
        </h2>
        <p className="text-gray-600 mb-8">
          We are always looking for passionate people. New roles will be listed
          here as they open.
        </p>

        <div className="border rounded-xl p-10 text-gray-500">
          Currently, there are no open positions.
          <br />
          Feel free to reach out and introduce yourself!
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white px-10 py-14 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Interested in Working With Us?
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Send us your resume or portfolio, and we’ll get in touch if there’s
            a fit.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Contact Careers Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
