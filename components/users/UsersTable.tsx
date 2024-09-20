import { User } from "@/models/User";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";

const UsersTable = ({ users }: { users: User[] }) => {
  return (
    <Card className="w-[600px]">
      <Table>
        <TableCaption>List of registered users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const { role, first_name, last_name, email, _id } = user;
            return (
              <TableRow key={_id as string}>
                <TableCell>{first_name}</TableCell>
                <TableCell>{last_name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{role}</TableCell>
                <TableCell>
                  <Link href={`/users/${_id as string}`}>
                    <Button className="w-6 h-6" size={"icon"}>
                      <Pencil1Icon />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UsersTable;
