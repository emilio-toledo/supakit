import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import parseFormData from "$lib/utils/parseFormData";
import type UserCredentials from "$lib/schemas/userCredentials";

export const POST = (async ({ request, locals, url }) => {
	const data = await request.formData().catch(() => {
		throw error(400, "Form data missing in request.");
	});

	const { email, password } = parseFormData<UserCredentials>(data);

	const signUpAuthResponse = await locals.supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${url.origin}/auth/callback`,
		},
	});

	return json(signUpAuthResponse);
}) satisfies RequestHandler;
