import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await request.formData();
		const name = form.get('name') as string;
		const phone = form.get('phone') as string;
		const email = form.get('email') as string;
		const message = form.get('message') as string;
		const checkbox = form.get('checkbox') as string;

		if (name.length < 5) {
			return fail(400, { name, nameError: true })
		}
		
		const numberRegex = /^\d+$/;
		if (!numberRegex.test(phone)) {
			return fail(400, { phone, phoneError: true })
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email) && email.length < 5) {
			return fail(400, { email, emailError: true })
		}

		if (message.length < 5) {
			return fail(400, { message, messageError: true })
		}
		if (checkbox !== "on") {
			return fail(400, { checkbox, checkboxError: true })
		}

		const resend = new Resend(import.meta.env.VITE_RESEND);

		const { data, error } = await resend.emails.send({
			from: 'kontakt@eupol-przewozy.pl',
			to: ['krzysztof.eupol@gmail.com'],
			subject: 'Nowy zapytanie - eupol',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /> <strong>Wiadomość: '+message+'</strong>',
		});

		if (error) {
			return console.log({ error });
		}

		return { success: true };
	},
};