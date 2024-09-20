"use client";

import { actionFunction } from "@/utils/types";
import { useFormState } from "react-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  title,
  className,
  children,
}: {
  action: actionFunction;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <Card className={cn("w-[300px] p-2", className)}>
      <CardHeader>
        <CardTitle className="capitalize text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>{children}</form>
      </CardContent>
      <CardFooter>
        {state.message && (
          <Alert variant={"destructive"}>
            <ExclamationTriangleIcon />
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
};

export default FormContainer;
