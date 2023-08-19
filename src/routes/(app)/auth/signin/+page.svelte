<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import { superForm } from "sveltekit-superforms/client";
    import type { PageData } from "./$types";

    export let data: PageData;

    const { form, enhance } = superForm(data.form, {
        customValidity: true,
        resetForm: true,
    });
</script>

<svelte:head>
    <title>Supakit - Sign In</title>
    <meta name="description" content="Supakit sign in page" />
</svelte:head>

<Container class="flex justify-center items-center">
    <form method="post" class="flex flex-col space-y-2" use:enhance>
        <label for="email-">Email</label>
        <input
            type="text"
            name="email"
            id="email-input"
            placeholder="example@gmail.com"
            bind:value={$form.email}
        />

        <label for="password-input">Password</label>
        <input
            type="password"
            name="password"
            id="password-input"
            placeholder="password"
            bind:value={$form.password}
        />
        <input type="submit" value="Sign In" />
    </form>
</Container>
