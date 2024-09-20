"use client";

import { updateUserRole } from "@/utils/actions";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function RoleSelect({
  defaultValue,
  userId,
}: {
  defaultValue: string;
  userId: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleRoleChange = (value: string) => {
    const newRole = value as "admin" | "member";

    startTransition(() => {
      updateUserRole(userId, newRole);
    });
  };

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={handleRoleChange}
      disabled={isPending}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="member">member only</SelectItem>
        <SelectItem value="admin">admin</SelectItem>
      </SelectContent>
    </Select>
    // <select
    //   className="border"
    //   onChange={handleRoleChange}
    //   defaultValue={defaultValue}
    //   disabled={isPending}
    // >
    //   <option value="member">member only</option>
    //   <option value="admin">admin</option>
    // </select>
  );
}
