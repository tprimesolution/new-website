import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/technoprime-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={320} height={320} />
    </Link>
  );
}
