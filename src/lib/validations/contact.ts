import type {
  ContactInquiry,
  ContactFormErrors,
} from "@/types/contact";

export function validateContactInquiry(
  data: ContactInquiry
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (data.fullName.length > 100) {
    errors.fullName = "Name is too long.";
  }

  if (data.company.length > 150) {
    errors.company = "Company name is too long.";
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      data.email.trim()
    ) ||
    data.email.length > 254
  ) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = data.phone.replace(/[\s()-]/g, "");

  if (!/^\+?\d{10,15}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.service.trim()) {
    errors.service = "Please select a service.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Please enter at least 10 characters.";
  }

  if (data.message.length > 2000) {
    errors.message = "Message cannot exceed 2000 characters.";
  }

  return errors;
}