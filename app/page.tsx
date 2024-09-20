import { redirect } from "next/navigation";

export default function Home() {
  redirect("/calculate");
  return null;
}
