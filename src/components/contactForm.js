function contactForm(e) {
  const handleSubmit = (e) => {
    e.preventDefault();

    var status = document.getElementById("form-status");
    var data = new FormData(e.target);
    fetch(e.target.action, {
      method: e.target.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        status.textContent = "Thanks for your submission!";
        e.target.reset();
      })
      .catch((error) => {
        status.textContent = "Oops! There was a problem submitting your form";
      });
  };

  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/xleaaeen"
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2>Drop a message</h2>
      <div>
        <input className="textinput" required type="text" name="Name" />
        <fieldset></fieldset>
      </div>
      <div>
        <input className="emailinput" required type="email" name="Email" />
        <fieldset></fieldset>
      </div>
      <div>
        <textarea
          className="messagetextarea"
          required
          rows="5"
          name="Message"
        ></textarea>
        <fieldset></fieldset>
      </div>
      <button type="submit">
        Send <i className="far fa-paper-plane"></i>
      </button>
      <p id="form-status"></p>
    </form>
  );
}

export default contactForm;
