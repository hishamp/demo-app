"use client"

import { actionFunction } from "@/utils/types";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
