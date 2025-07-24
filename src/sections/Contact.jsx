import './Contact.css'

export function Contact(){
  return(
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
