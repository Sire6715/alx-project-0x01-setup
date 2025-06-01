import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white flex flex-col items-center justify-baseline">
      <div className="p-4 border rounded-lg shadow-md w-80">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-xl font-semibold mb-2 text-black">{name}</h2>
          <p>{id}</p>
        </div>
        <p className="text-black">email: {email}</p>
        <p className="text-black text-sm">Username: {username}</p>
        <div className="mt-4">
          <h3 className="font-bold text-black">Address:</h3>
          <p className="text-black text-sm">
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
          </p>
          <p className="text-black text-sm">
            Geo: {address.geo.lat}, {address.geo.lng}
          </p>
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-black">Phone:</h3>
          <p className="text-black text-sm">{phone}</p>
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-black ">Website:</h3>
          <a
            href={`https://${website}`}
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-black">Company:</h3>
          <p className="text-black text-sm">{company.name}</p>
          <p className="text-black text-sm font-light">{company.catchPhrase}</p>
          <p className="text-black text-sm font-light">{company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
