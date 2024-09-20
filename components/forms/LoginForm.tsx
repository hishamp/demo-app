import { loginAction } from "@/utils/actions";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import { SubmitButton } from "./Buttons";
import Link from "next/link";
import { Button } from "../ui/button";

const LoginForm = () => {
  return (
    <FormContainer title="Login" action={loginAction}>
      <FormInput
        type="email"
        name="email"
        label="Email"
        defaultValue="admin@gmail.com"
      />
      <FormInput
        type="password"
        name="password"
        label="password"
        defaultValue="admin123"
      />
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
  );
};

export default LoginForm;
