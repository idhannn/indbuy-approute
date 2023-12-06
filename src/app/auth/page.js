"use client";

import { signIn, signOut } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="bg-rose-500 text-slate-50 m-10"
      >
        LOGIN
      </button>
      <button
        onClick={() => signOut()}
        className="bg-gray-800 text-slate-50 m-10"
      >
        LOgout
      </button>
    </div>
  );
};

export default LoginPage;
