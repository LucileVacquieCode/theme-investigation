'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { TextBlock } from "@/components/textBlock";
import Link from "next/link";
import { useTheme } from "./providers/ThemeContext";

export default function Home() {
  const { logo } = useTheme();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Next.js logo"
          width={200}
          height={38}
          priority
        />

        <TextBlock 
          title="Hello World!" 
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam lorem, vel tincidunt nibh enim non elit. Nullam eget ligula vitae odio dictum gravida. Curabitur in magna sit amet nulla commodo fermentum. Suspendisse potenti. Integer et posuere libero, nec vestibulum augue. Donec vel nunc sed nunc interdum dapibus ut vel quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          surface='accent'
        />

        <Link href="/" className="primary-link">Primary link</Link>
        <Link href="/" className="primary-reverse-link">Primary reverse link</Link>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

