import React, { useState } from "react";

const Bookingform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    location: "",
    description: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="flex items-center justify-center p-4 md:my-20 my-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Book Your Project
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Website / Social Media
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter website or social media link"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Project Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter project location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Describe your project"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Budget Range
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter your budget range"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00ff99] hover:bg-[#00ff99] text-black py-3 rounded-xl font-semibold transition"
        >
          Send Booking Request
        </button>
      </form>
    </div>
  );
};

export default Bookingform;
