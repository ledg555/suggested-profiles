async function fetchUser(id) {
  let res = await fetch(`https://reqres.in/api/users/${id}`);
  let body = await res.json();
  return body.data;
}

export default async function UserPage({ params }) {
  const user = await fetchUser(params.id);
  return (
    <div className="w-1/3 bg-slate-500 text-slate-50 p-10 rounded-lg mx-auto flex flex-wrap justify-center">
      <div className="w-full pb-4">
        <img src={user.avatar} alt={`${user.first_name}`} className="mx-auto"/>
      </div>
      <h1 className="w-full text-center text-3xl font-bold">
        {user.first_name} {user.last_name}
      </h1>
      <p className="mx-auto">{user.email}</p>
    </div>
  );
}
