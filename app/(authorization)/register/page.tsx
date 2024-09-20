"use client";

import RegisterForm from "@/components/forms/RegisterForm";
import Container from "@/components/global/Container";

export default function Register() {
  return (
    <Container className="flex mt-20 justify-center">
      <RegisterForm />
    </Container>
  );
}
