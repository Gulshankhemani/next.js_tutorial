import { log } from "console";
import Hello from "./Components/hello";


export default function Home() {
  console.log('what am i doing here  --- server/client component');
  return (
    <>
      <h1 className="text-3xl justify-center align-center">Welcome to Next.js tutorial</h1>
      <Hello/>
    </>
  );
}
