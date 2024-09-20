import Link from "next/link";
import Container from "../global/Container";
import { getAuthUser, logout } from "@/utils/actions";

const NavBar = async() => {
  const user = getAuthUser()
  const isAdmin = (await user).role === "admin"
  return (
    <nav className="border-b">
      <Container className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Link href={"/calculate"}>Calculation</Link>
          {isAdmin && <Link href={"/users"}>Users</Link>}
          {/* <Link href={"assign"}>Assign</Link> */}
        </div>
        <div>
          <form action={logout}>
            <button>Logout</button>
          </form>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
