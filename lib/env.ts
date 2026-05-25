export function getResendConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.RESEND_FROM_EMAIL ?? "Afrinexel <onboarding@resend.dev>",
    toEmail: process.env.CONTACT_TO_EMAIL ?? "info@afrinexel.co.za",
  }
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY)
}
