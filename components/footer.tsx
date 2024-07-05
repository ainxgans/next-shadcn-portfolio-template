import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-4 md:container py-12 align-bottom mt-auto"
      id="footer"
    >
      <ul className="flex flex-wrap gap-4 justify-center">
        <li>
          <Link
            href="https://www.instagram.com/yth_maulana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Instagram className="h-4 w-4 mr-2" />
              @yth_maulana
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/ainxgans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="h-4 w-4 mr-2" />
              @ainxgans
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/maulanamaulana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Linkedin className="h-4 w-4 mr-2" />
              @maulanamaulana
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
