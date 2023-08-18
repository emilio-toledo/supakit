import type UserCredentials from "$lib/schemas/userCredentials";
import parseFormData from "$lib/utils/parseFormData";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

export const POST = (async ({ request, locals }) => {
	const data = await request.formData().catch(() => {
		throw error(400, "Form data missing in request.");
	});

	const { email, password } = parseFormData<UserCredentials>(data);

	const authResponse = await locals.supabase.auth.signInWithPassword({
		email,
		password,
	});

	return json(authResponse);
}) satisfies RequestHandler;
