import React from "react"
//style is all done in the contact style sheet
import style from "../../style/contact.module.scss"

const Form = () => {
  return (
    <form
      className={style.form}
      name="contact"
      id="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name
          <input type="text" name="name"  />
        </label>
      </p>
      <p>
        <label>
          Email
          <input type="email" name="email"  />
        </label>
      </p>
      <p>
        <label>
          Message
          <textarea name="message" ></textarea>
        </label>
      </p>
      {/* <p style={{ display: "flex", justifyContent: "center" }}> */}
      <div className={style.button}>
        <button type="submit" name="submit">
          <h2>Send</h2>
        </button>
      </div>

      {/* </p> */}
    </form>
  )
}

export default Form
