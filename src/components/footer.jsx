import './footer.css'

export function Footer(){
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Designed by Your Name</p>
      </div>
    </footer>
  )
}
