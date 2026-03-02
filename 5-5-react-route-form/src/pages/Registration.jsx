import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    {/*Form validations*/}

    const nextErrors = {};

    // Email validation
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!(email.includes("@") && email.endsWith(".com")))
      nextErrors.email = "Enter a valid email address";

    // Password validation
    if (!password.trim()) nextErrors.password = "Password is required";

    // Gender validation
    if (!gender) nextErrors.gender = "Please select your gender";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return; // stop form submit if errors

    alert(`User Registered: ${email})`);

    alert(`Regiteration submit: ${email}`);
    
    
  };

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error">{errors.email}</p>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <fieldset className="form-row">
          {/*Radio Button for gender*/}
            <legend>Gender</legend>

            <label className="radio">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>

            <label className="radio">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>

            {errors.gender && (
              <p className="error">{errors.gender}</p>
            )}

          </fieldset>

          {/*Disable the submit button until all requirements met*/}
        <button type="submit" disabled={!email || !password || !gender}>Register</button>
      </form>

      <div className="card info">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>📘 Access course materials & assignments</li>
          <li>💬 Join the discussion forum</li>
          <li>🎓 Track your progress & get certified</li>
        </ul>
      </div>
    </section>
  );
}

// ================================================================
// TODO #2: Use Registeration.jsx file.
//          Add password & gender fields, make all fields required,
//          and validate the email (must contain "@" and end with ".com").
//          Finally, show the provided alert ONLY on successful submit.
// ================================================================
//
// Goal: Extend the registration form with more input fields and validations.
//
// 1) Add new state variables at the top of the component for password and gender.
//    Hint:
//      const [password, setPassword] = useState("");
//      const [gender, setGender] = useState("");
//
// 2) Below the email input, create a password field inside a <div className="form-row">.
//    Hint:
//      <label htmlFor="password">Password</label>
//      <input
//        id="password"
//        type="password"
//        value={password}
//        onChange={(e) => setPassword(e.target.value)}
//      />
//
// 3) Add gender selection below the password field inside the <fieldset className="form-row">.
//    Use two radio inputs with the same name="gender" so they act as one group.
//    Example (just structure):
//      <fieldset className="form-row">
//        <legend>Gender</legend>
//        <label className="radio">
//          <input
//            type="radio"
//            name="gender"
//            value="male"
//            checked={gender === "male"}
//            onChange={(e) => setGender(e.target.value)}
//          /> Male
//        </label>
//      </fieldset>
//
// 4) Inside handleSubmit(), make sure all fields are mandatory and validate the email.
//    You can do this by building an errors object and checking each field.
//
//    Hint:
//      const nextErrors = {};
//
//      // Email validation
//      if (!email.trim()) nextErrors.email = "Email is required";
//      else if (!(email.includes("@") && email.endsWith(".com")))
//        nextErrors.email = "Enter a valid email address";
//
//      // Password validation
//      if (!password.trim()) nextErrors.password = "Password is required";
//
//      // Gender validation
//      if (!gender) nextErrors.gender = "Please select your gender";
//
//      setErrors(nextErrors);
//      if (Object.keys(nextErrors).length > 0) return; // stop form submit if errors
//
// 5) Show small <p className="error"> under each invalid input
//    Hint:
//      {errors.password && <p className="error">{errors.password}</p>}
//
// 6) Disable the "Register" button until all fields are filled
//    Hint:
//      <button type="submit" disabled={!email || !password || !gender}>Register</button>
//
// 7) SUCCESS ALERT (important):
//    There is an alert message commented in handleSubmit. You should show this alert
//    ONLY when the form passes validation. Place it AFTER the error check so it runs
//    only on success.
//    Hint (where to place it):
//      setErrors(nextErrors);
//      if (Object.keys(nextErrors).length > 0) return;  // errors exist → do NOT alert
//      // Place (or uncomment) the alert HERE so it runs only when there are no errors.
//      // Example:
//      // alert(`User Registered: ${email})`);
//
// NOTE:
// - Don’t change any CSS — the form and error styles are already provided.
// - Use the hints above to guide your implementation, but write the actual JSX and logic yourself.
// ================================================================

