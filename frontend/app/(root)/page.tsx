'use client'
import { useUser } from "@/providers/AuthProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const { user } = useUser() ?? { user: null, loading: true };
  console.log(user);
  const router = useRouter();
  // if (loading) return <p>Loading user...</p>;
  if (!user)
    router.push("/login");
  return (
    <div>
      <h1>Hello, {user?.username}</h1>
    </div>
  );
}
