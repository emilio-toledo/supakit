import type { RequestHandler } from "./$types";
import { error, json, redirect } from "@sveltejs/kit";

export const GET = (async ({ locals }) => {
	const session = await locals.getSession();

	if (!session) throw error(400, "No user signed in.");

	await locals.supabase.auth.signOut().catch((err) => {
		throw error(400, err);
	});

	throw redirect(303, "/");
}) satisfies RequestHandler;
