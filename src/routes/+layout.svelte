<script>
    import "../app.postcss";

    import { invalidate } from "$app/navigation";
    import { onMount } from "svelte";
    import Container from "$lib/components/Container.svelte";

    export let data;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate("supabase:auth");
            }
        });

        return () => subscription.unsubscribe();
    });
</script>

<nav class="flex justify-between p-4">
    <a href="/">Supakit</a>
    <a href="/auth/signin">Sign In</a>
</nav>

<slot />
