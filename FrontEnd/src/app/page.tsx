'use client'
import Login from "./login/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Login />
      <Link href={"./cadastro"}> Ir Para Cadastro</Link> 
     
    </div>
 
  );
}
