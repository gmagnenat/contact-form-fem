import { formSchema } from "../schemas/formSchema";
import { displayErrors } from "./displayErrors";
import { displayDialog } from "./displayDialog";
import { FormElements } from "../types/formTypes";

export function handleSubmit(e: SubmitEvent, elements: FormElements): void {
  e.preventDefault();

  const { form } = elements;

  // reset all the highlighted fields
  const highlightedFields = document.querySelectorAll(".highlighted");
  highlightedFields.forEach((field) => {
    field.classList.remove("highlighted");
  });

  // reset all the error messages
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach((error) => {
    error.innerHTML = "";
  });

  // get the form data
  const formData = new FormData(form);

  // convert the form data to an object
  const data = Object.fromEntries(formData.entries());

  const result = formSchema.safeParse(data);

  // if the form data is invalid, display the errors
  if (!result.success) {
    const errors = result.error.format();
    console.log(errors);
    displayErrors(errors, form);
    return;
  }

  form.reset();

  // open a dialog box to show the user that the form was submitted
  displayDialog(elements.dialog);
}
