import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UserPageProps {
  posts: UserProps[];
}

const Users: React.FC<UserPageProps> = ({ posts }) => {
  return (
    <div className="bg-[#f2f2f2]">
      <Header />
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
