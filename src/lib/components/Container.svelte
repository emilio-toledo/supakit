<script lang="ts">
    let classeName = $$restProps.class ?? "";
</script>

<main class={classeName}>
    <slot />
</main>
