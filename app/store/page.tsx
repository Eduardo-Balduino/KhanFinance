// app/(main)/store/page.tsx
import { redirect } from "next/navigation";

export default function StoreRedirectPage() {
  redirect("/shop");
}