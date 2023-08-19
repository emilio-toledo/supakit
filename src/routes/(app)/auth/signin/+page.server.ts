import { UserCredentials } from "$lib/schemas/userCredentials";
import type { PageServerLoad } from "./$types";
import type { AuthTokenResponse } from "@supabase/supabase-js";
import { type Actions, fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms/server";

export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (session) throw redirect(303, "/");

	const form = await superValidate(UserCredentials);
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, UserCredentials);
		if (!form.valid) return fail(400, { form });

		const { email, password } = form.data;

		const { error } = await locals.supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) return setError(form, "password", "Invalid email or password.");

		return { form };
	},
} satisfies Actions;
