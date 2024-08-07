"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Lab 10 - Lecture</h2>
      <Link href="/todolist">
        Go to todoapp
      </Link>
      <br />
      <Link href="/randomUser">
        Go to random
      </Link>
    </div>
  );
}
