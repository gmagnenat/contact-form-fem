export function getDOMElements() {
  const form = document.querySelector(".contact-form")! as HTMLFormElement;
  const firstName = document.querySelector(
    ".input--first-name"
  )! as HTMLInputElement;
  const lastName = document.querySelector(
    ".input--last-name"
  )! as HTMLInputElement;
  const email = document.querySelector(".input--email")! as HTMLInputElement;
  const queryType = document.querySelector(
    ".input--query-type"
  )! as HTMLInputElement;
  const message = document.querySelector(
    ".textarea--message"
  )! as HTMLTextAreaElement;
  const consent = document.querySelector(
    ".input--consent"
  )! as HTMLInputElement;
  const dialog = document.querySelector(".dialog")! as HTMLDialogElement;

  if (
    !form ||
    !firstName ||
    !lastName ||
    !email ||
    !queryType ||
    !message ||
    !consent ||
    !dialog
  ) {
    throw new Error("One or more elements not found");
  }

  return {
    form,
    firstName,
    lastName,
    email,
    queryType,
    message,
    consent,
    dialog,
  };
}
