"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton({ type }: { type?: string }) {
  return (
    <div>
      <button
        className={`inline-flex w-[20vw] items-center justify-center rounded-md border border-black  px-3.5 py-2.5 font-semibold hover:text-white hover:bg-black/80`}
        onClick={() =>
          signOut({
            callbackUrl: type == "Admin" ? "/admin/login" : "/login",
            redirect: true,
          })
        }
      >
        Sign Out
      </button>
    </div>
  );
}