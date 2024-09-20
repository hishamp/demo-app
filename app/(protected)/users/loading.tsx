"use client";

import Container from "@/components/global/Container";
import LoadingTable from "@/components/global/LoadingTable";
import { Card } from "@/components/ui/card";

const loading = () => {
  return (
    <Container className="flex mt-20 justify-center">
      <Card className="w-[600px]">
        <LoadingTable />
      </Card>
    </Container>
  );
};
export default loading;
