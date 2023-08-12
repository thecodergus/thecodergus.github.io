<script lang="ts">
  import type { Social } from "../types/shared_data";
  import type { SectionName } from "../types/specified_data";

  export let name: SectionName;
  export let social: Social[];
</script>

<section id="contact">
  <div class="col-md-12">
    <h1 class="section-title">
      <span>
        {#if name}
          {name}
        {:else}
          ???
        {/if}
      </span>
    </h1>
  </div>
  <div class="social-links fa-3x">
    {#if social}
      {#each social as item}
        <span class="m-4">
          <a href={item.url} class="fa-2x">
            <i class={item.class} />
          </a>
        </span>
      {/each}
    {/if}
  </div>
</section>
