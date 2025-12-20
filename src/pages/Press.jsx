import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Press = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-24">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <Title
          align="center"
          title="Press & Media"
          subTitle="News, updates, and official resources from QuickStay."
        />
        <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          Welcome to the{" "}
          <span className="font-semibold text-blue-950">QuickStay</span> press
          room. Here you’ll find the latest announcements, media coverage, and
          resources for journalists and media professionals.
        </p>
      </div>

      {/* About for Press */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 mb-8 text-center">
          About QuickStay
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          QuickStay is a modern hotel booking platform focused on simplicity,
          transparency, and seamless travel experiences. We connect travelers
          with trusted accommodations while empowering property owners with
          powerful management tools.
        </p>
      </div>

      {/* Press Highlights */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-12">
          Press Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <p className="text-sm text-gray-400 mb-2">Announcement</p>
            <h3 className="text-lg font-semibold text-blue-950 mb-3">
              QuickStay Launches Smart Booking Platform
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Introducing a faster, more reliable way for travelers to book
              hotels with confidence and ease.
            </p>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <p className="text-sm text-gray-400 mb-2">Media Coverage</p>
            <h3 className="text-lg font-semibold text-blue-950 mb-3">
              Redefining Hotel Booking for the Modern Traveler
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              How QuickStay is building a user-first booking experience through
              technology and design.
            </p>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-xl transition">
            <p className="text-sm text-gray-400 mb-2">Update</p>
            <h3 className="text-lg font-semibold text-blue-950 mb-3">
              Expanding Our Partner Hotel Network
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              QuickStay continues to grow its trusted network of hotels across
              multiple cities.
            </p>
          </div>
        </div>
      </div>

      {/* Media Resources */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-12">
          Media Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl bg-primary/5 p-8">
            <h3 className="font-semibold text-blue-950 mb-3">Brand Assets</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Download official QuickStay logos, brand guidelines, and product
              visuals for editorial use.
            </p>
          </div>

          <div className="rounded-xl bg-primary/5 p-8">
            <h3 className="font-semibold text-blue-950 mb-3">
              Company Factsheet
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Key facts, milestones, and company information for accurate and
              consistent reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Press Contact */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white px-10 py-14 text-center">
          <h3 className="text-2xl font-semibold mb-4">Press Contact</h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            For press inquiries, interviews, or media requests, please reach out
            to our communications team.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Contact Press Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Press;
