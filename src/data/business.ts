const phoneNumber = (value: string | undefined) => value?.replace(/\D/g, "") ?? "";

// Set these public values in .env. Keep the country code, but omit +, spaces, and hyphens.
const phone = phoneNumber(import.meta.env.VITE_BUSINESS_PHONE);
const whatsapp = phoneNumber(import.meta.env.VITE_BUSINESS_WHATSAPP) || phone;

export const business = {
  name: "Vishwakarma WoodWorks",
  phone,
  whatsapp,
  email: "",
  location: "",
  serviceArea: [] as string[],
  instagram: "",
  facebook: "",
  whatsappMessage:
    "Hello Vishwakarma WoodWorks, I found your website and would like to enquire about your carpentry and woodwork services.",
};

export const callUrl = business.phone ? `tel:${business.phone}` : undefined;

export function getWhatsAppUrl(message = business.whatsappMessage) {
  return business.whatsapp
    ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
    : undefined;
}

export const whatsappUrl = getWhatsAppUrl();
