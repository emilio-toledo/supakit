<script lang="ts">
    let classes = $$restProps.class ?? "";
</script>

<div class={`h-full text-text p-4 ${classes}`.trim()}>
    <slot />
</div>
