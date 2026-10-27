// Single source of truth for all recruitment details.
export const SITE_URL = 'https://freedomodisha.org/'
export const EMAIL = 'mo.freedomodisha@gmail.com'
export const PHONE = '8249351868'
export const WHATSAPP_INTL = '918249351868'

export const EMAIL_SUBJECT =
  'Application for Cluster Development Executive (CDE) – Bhadrak Agro Jaggery Products Cluster'

export const EMAIL_BODY = `Dear Recruitment Team,

I am writing to apply for the position of Cluster Development Executive (CDE) for the Bhadrak Agro Jaggery Products Cluster.

Please find my biodata/CV attached for your consideration.

My details are provided below:

Full Name:
Contact Number:
Educational Qualification:
Relevant Experience:

Thank you for your consideration.

Regards,
[Your Name]`

// Properly encoded mailto URL (subject and body are percent-encoded).
export const APPLY_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}&body=${encodeURIComponent(EMAIL_BODY)}`

export const PLAIN_EMAIL_URL = `mailto:${EMAIL}`
export const TEL_URL = `tel:${PHONE}`
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_INTL}`

// Deadline wording is kept exactly as in the source advertisement.
// No publication date is configured, so no calendar date is calculated.
export const DEADLINE_TEXT = 'Within 15 days of publication of the advertisement.'
