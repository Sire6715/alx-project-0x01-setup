import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-sm">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          User Details
        </h2>
        <p className="text-gray-700">This is a modal for user details.</p>
        <form
          onSubmit={handleSubmit}
          className="mt-4 text-black scrollable overflow-y-auto h-full"
        >
          <label className="block texblack font-medium mb-2">Name</label>
          <h2 className="text-xl font-bold">User Form</h2>

          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 w-full"
          />
          <input
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2 w-full"
          />
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 w-full"
          />

          <h3 className="font-semibold text-black mt-4">Address</h3>
          <input
            name="address.street"
            value={userData.address.street}
            onChange={handleChange}
            placeholder="Street"
            className="border p-2 w-full"
          />
          <input
            name="address.suite"
            value={userData.address.suite}
            onChange={handleChange}
            placeholder="Suite"
            className="border p-2 w-full"
          />
          <input
            name="address.city"
            value={userData.address.city}
            onChange={handleChange}
            placeholder="City"
            className="border p-2 w-full"
          />
          <input
            name="address.zipcode"
            value={userData.address.zipcode}
            onChange={handleChange}
            placeholder="Zipcode"
            className="border p-2 w-full"
          />
          <input
            name="address.geo.lat"
            value={userData.address.geo.lat}
            onChange={handleChange}
            placeholder="Latitude"
            className="border p-2 w-full"
          />
          <input
            name="address.geo.lng"
            value={userData.address.geo.lng}
            onChange={handleChange}
            placeholder="Longitude"
            className="border p-2 w-full"
          />

          <input
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 w-full"
          />
          <input
            name="website"
            value={userData.website}
            onChange={handleChange}
            placeholder="Website"
            className="border p-2 w-full"
          />

          <h3 className="font-semibold mt-4">Company</h3>
          <input
            name="company.name"
            value={userData.company.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="border p-2 w-full"
          />
          <input
            name="company.catchPhrase"
            value={userData.company.catchPhrase}
            onChange={handleChange}
            placeholder="Catch Phrase"
            className="border p-2 w-full"
          />
          <div className="flex items-center justify-between m-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Data
            </button>
          </div>
        </form>
        Close
      </div>
    </div>
  );
};
export default UserModal;
