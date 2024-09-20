import Container from "../global/Container";
import { getAuthUser, logout } from "@/utils/actions";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";

const NavBar = async () => {
  const user = getAuthUser();
  const isAdmin = (await user).role === "admin";
  return (
    <nav className="border-b">
      <Container className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <NavLinks isAdmin={isAdmin} />
        </div>
        <div>
          <form action={logout}>
            <Button>Logout</Button>
          </form>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
