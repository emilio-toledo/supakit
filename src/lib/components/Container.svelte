<script lang="ts">
    let classes = $$restProps.class ?? "";
</script>

<main class={`flex-grow text-text p-4 ${classes}`.trim()}>
    <slot />
</main>
