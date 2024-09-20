import { loginAction } from "@/utils/actions";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SubmitButton } from "./Buttons";
import Link from "next/link";
import { Button } from "../ui/button";

const LoginForm = () => {
  return (
    <Card className="w-[300px] p-2">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <FormContainer action={loginAction}>
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="password" />
          <div className="flex flex-col items-center">
            <SubmitButton className="w-full" text="Login" />
            <span>OR</span>
            <Link className="w-full" href={"/register"}>
              <Button className="w-full" type="button">
                Register
              </Button>
            </Link>
          </div>
        </FormContainer>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
