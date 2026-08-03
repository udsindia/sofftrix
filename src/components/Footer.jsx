export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} Softtrix. All rights reserved.</span>
        <div className="footer-contact">
          <a href="tel:+919704356075">+91 97043 56075</a>
          <span className="dot">•</span>
          <a href="mailto:udsindiateam@gmail.com">udsindiateam@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
