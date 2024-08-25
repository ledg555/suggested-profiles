import UserCard from "@/components/userCard";

async function fetchUsers() {
  let res = await fetch("https://reqres.in/api/users");
  let body = await res.json();
  return body.data;
}

export default async function Home() {
  let users = await fetchUsers();
  return (
    <div className="flex w-1/3 mx-auto flex-wrap justify-center items-center">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
          avatar={user.avatar}
          id={user.id}
        ></UserCard>
      ))}
    </div>
  );
}
