import { z } from "zod";

export interface UserCredentials {
	email: string;
	password: string;
}

export const UserCredentials = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});
