import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async ({ locals }) => {
	const session = await locals.getSession();

	if (!session) throw error(400, "No user signed in.");

	await locals.supabase.auth.signOut().catch((err) => {
		throw error(400, err);
	});

	return json({ message: `${session.user.email} signed out successfully.` });
}) satisfies RequestHandler;
