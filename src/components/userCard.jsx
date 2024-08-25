"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card.jsx";
import Link from "next/link";

export default function UserCard({ name, email, avatar, id, }) {
  return (
    <Link href={`/user/${id}`} className="block w-full">
      <Card className="flex justify-between items-center w-full bg-slate-400 mb-2 text-slate-50">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{email}</CardDescription>
        </CardHeader>

        <CardContent>
          <img src={avatar} alt={name} className="mt-4 w-20 rounded-full" />
        </CardContent>
        {/* <CardFooter></CardFooter> */}
      </Card>
    </Link>
  );
}
