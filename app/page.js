"use client";
import HeroBanner from "@/components/HeroBanner";
import Collection from "@/components/Collection";
import HomeProducts from "@/components/HomeProducts";
import { useState } from "react";

export default function Home() {
  const [show] = useState(true);
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <Collection />
      <HomeProducts show={show} />
    </div>
  );
}
