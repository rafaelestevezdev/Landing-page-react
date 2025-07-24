import './Hero.css'

export function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-description">We offer the best services for you.</p>
        <a href="#services" className="hero-button">Learn More</a>
      </div>
    </section>
  )
}
