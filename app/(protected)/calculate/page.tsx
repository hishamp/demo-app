import Calculator from "@/components/calculator/Calculator";
import Container from "@/components/global/Container";
import { getAuthUser } from "@/utils/actions";

export default async function Calculation() {
  try {
    await getAuthUser();
  } catch (error) {
    console.error("Error", error);
  }

  return (
    <Container className="mt-10 flex justify-center">
      <Calculator />
    </Container>
  );
}
