import emailjs from 'emailjs-com';

emailjs.init('fpO7Zn1V_TtQzAUcg');

export async function sendEmail(formData: { name: string; email: string; message: string; }) {
  try {
    const response = await emailjs.send('service_kc205db', 'template_6npfirx', formData);
    console.log('Sucesso:', response);
    return response;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

const formData = {
  name: 'Raziel',
  email: 'raziel@example.com',
  message: 'Olá, gostaria de saber mais sobre o serviço.',
};

sendEmail(formData);
