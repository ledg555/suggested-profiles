import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card.jsx";

export default function UserCard({ name, email }) {
  return (
      <Card className="block w-full bg-slate-400 mb-2 text-slate-50">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{email}</CardDescription>
        </CardHeader>

        <CardContent></CardContent>

        <CardFooter></CardFooter>
      </Card>
  );
}
