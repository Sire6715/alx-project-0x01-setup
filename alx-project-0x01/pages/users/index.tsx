import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData, UserModalProps } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import React, { useState } from "react";

interface UserPageProps {
  posts: UserProps[];
}

type UserDataProps = UserPageProps & UserModalProps;

const Users: React.FC<UserDataProps > = ({ posts, onSubmit }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUserData({ ...newUser, id: posts.length + 1 });
    onSubmit(newUser);
  };

  return (
    <div className="bg-[#f2f2f2]">
      <Header />
      <div>
        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        {isModalOpen && (
          <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
        )}
      </div>
      <div className="grid grid-cols-3">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
