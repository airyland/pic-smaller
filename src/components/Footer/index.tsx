import style from "./index.module.scss";

export const Footer = () => {
  const links = [
    { href: "https://AI.LS", label: "AI.LS" },
    { href: "https://www.logo.surf", label: "Logo.surf" },
    { href: "https://Favicon.im", label: "Favicon.im" },
    { href: "https://Query.domains", label: "Query.domains" },
    { href: "https://ip.network", label: "IP.network" },
    { href: "https://DNS.fish", label: "DNS.fish" },
    { href: "https://www.gptshunter.com", label: "GPTsHunter" },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.links}>
        {links.map((link, index) => (
          <span key={link.href}>
            {index > 0 && <span className={style.separator}>·</span>}
            <a
              href={link.href}
              aria-label={`${link.label} Link`}
              target="_blank"
              rel="noopener noreferrer"
              className={style.link}
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
      <div className={style.copyright}>
        © webmaster.studio.&emsp;
        <a href="https://github.com/joye61/pic-smaller">
          Based on PicSmaller, MIT Licensed
        </a>
      </div>
    </footer>
  );
};