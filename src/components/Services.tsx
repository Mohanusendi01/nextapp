"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Services() {
  return (
    <div className="max-w-xs w-full">
      <Link href={"/calculator"}>
        <div
          className={cn(
            "group w-fulloverflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover"
            // Preload hover image by setting it in a pseudo-element
          )}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              SIP CALCULATOR
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              An SIP calculator (Systematic Investment Plan calculator) is a
              tool used to estimate the future returns on investments made
              through a SIP.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Services;
