import emailjs from '@emailjs/browser';

/**
 * Sends contact email using EmailJS service.
 * Replace placeholders with your actual EmailJS credentials from your dashboard:
 * https://dashboard.emailjs.com/
 *
 * @param {Object} templateParams - The form fields { name, email, subject, message }
 * @returns {Promise<{ success: boolean, message: string, data?: any }>}
 */
export const sendContactEmail = async (templateParams) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default';

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return {
      success: true,
      message: 'Message sent successfully! Muneeb will get back to you shortly.',
      data: response,
    };
  } catch (error) {
    console.error('EmailJS Send Error:', error);
    return {
      success: false,
      message: error?.text || 'Failed to send message. Please try again or reach out directly via email.',
      error,
    };
  }
};
