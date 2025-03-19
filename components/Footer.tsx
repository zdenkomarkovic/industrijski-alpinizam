"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 items-center md:pb-0 md:space-y-1">
              <li>
                <Link href="/" className=" hover:text-primary">
                  Početna
                </Link>
              </li>

              <li>
                <Link
                  href="/industrijskialpinizam"
                  className="text-muted-foreground hover:text-primary"
                >
                  Industrijski alpinizam
                </Link>
              </li>
              <li>
                <Link
                  href="/krovopokrivanje"
                  className="text-muted-foreground hover:text-primary"
                >
                  Krovopokrivački radovi
                </Link>
              </li>
              <li>
                <Link
                  href="/limarskiradovi"
                  className="text-muted-foreground hover:text-primary"
                >
                  Limarski radovi
                </Link>
              </li>

              <li>
                <Link
                  href="/kontakt"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+38162332476">
                <p className="text-muted-foreground  hover:text-primary">
                  Telefon: +38162 332 476
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:mtmmigic09@gmail.com" target={"_blank"}>
                <p className="text-muted-foreground text-wrap  hover:text-primary">
                  Email: mtmmigic09@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100047803942371&ref=hl#"
                target={"_blank"}
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/alpinista_migic/"
                target={"_blank"}
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              Industrijski alpinizam
            </h3>

            <p className=" font-bold ">Visinski radovi</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 M Migic. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold text-primary"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
