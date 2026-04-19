export default function Footer() {
    return (
        <footer>
          <copyright>
            Copyright {new Date().getFullYear()} AutoBlog - новини за коли
          </copyright>
          <p style={{ marginTop: "0.4em", fontSize: "0.85em", fontWeight: "normal", opacity: 0.8 }}>
            <a
              href="https://inweblife.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#634a00", textDecoration: "underline" }}
            >
              SEO оптимизация и изработка на сайт
            </a>
          </p>
        </footer>
    );
}