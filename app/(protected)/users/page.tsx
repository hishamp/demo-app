import Container from "@/components/global/Container";
import UsersTable from "@/components/users/UsersTable";
import { User } from "@/models/User";
import { fetchRegisteredUsers } from "@/utils/actions";
import Link from "next/link";

export default async function Users() {
  const users: User[] = await fetchRegisteredUsers();

  if (users.length === 0) {
    return <p> No users are registered </p>;
  }

  return (
    <Container className="flex mt-20 justify-center">
      <UsersTable users={users} />
    </Container>
  );
}
