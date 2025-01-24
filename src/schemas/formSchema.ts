import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  queryType: z.enum(["general-enquiry", "support-request"], {
    required_error: "Query type is required",
  }),
  message: z.string().min(1, "A message is required"),
  consent: z.literal("on", {
    errorMap: () => ({ message: "You must consent before submitting" }),
  }),
});
