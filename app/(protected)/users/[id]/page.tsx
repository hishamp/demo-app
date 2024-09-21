import RoleSelect from "@/components/forms/RoleSelect";
import Container from "@/components/global/Container";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fetchSingleUser } from "@/utils/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await fetchSingleUser(id);

  return (
    <Container className="flex justify-center mt-10">
      <Card className="p-2 w-[600px]">
        <div className="grid gap-2 grid-cols-2 p-2">
          <p>First Name :</p>
          <p>{user.first_name}</p>
        </div>
        <Separator />
        <div className="grid gap-2 grid-cols-2 p-2">
          <p>Last Name :</p>
          <p>{user.last_name}</p>
        </div>
        <Separator />
        <div className="grid gap-2 grid-cols-2 p-2">
          <p>Email :</p>
          <p>{user.email}</p>
        </div>
        <Separator />
        <div className="grid gap-2 grid-cols-2 p-2">
          <p>Role :</p>
          <RoleSelect userId={user._id.toString()} defaultValue={user.role} />
        </div>
      </Card>
    </Container>
  );
}
