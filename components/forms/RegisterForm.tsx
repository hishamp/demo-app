import { registerAction } from "@/utils/actions";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SubmitButton } from "./Buttons";
import Link from "next/link";
import { Button } from "../ui/button";

const RegisterForm = () => {
  return (
    <Card className="w-[300px] p-2">
      <CardHeader>
        <CardTitle className="text-3xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <FormContainer action={registerAction}>
          <FormInput type="text" name="first_name" label="First Name" />
          <FormInput type="text" name="last_name" label="Last Name" />
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="password" />
          <div className="flex flex-col items-center">
            <SubmitButton className="w-full" />
            <span>OR</span>
            <Link className="w-full" href={"/login"}>
              <Button className="w-full" type="button">
                Login
              </Button>
            </Link>
          </div>
        </FormContainer>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
