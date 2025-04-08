"use client"; // Forces client-side rendering
import dynamic from "next/dynamic";

// Lazy-load HomePage only on client side
const HomePage = dynamic(() => import("./home-page"), { ssr: false });

export default function Page() {
  return <HomePage />;
}
