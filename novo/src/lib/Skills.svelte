<script lang="ts">
  import type { SkillIcon } from "../types/shared_data";
  import type { SectionName } from "../types/specified_data";

  export let skills: SkillIcon[];
  export let section_name: SectionName;
</script>

<section id="skills">
  <div class="col-md-12">
    <div class="col-md-12">
      <h1 class="section-title">
        <span class="text-white">
          {section_name.skills}
        </span>
      </h1>
    </div>
    <div class="col-md-12 text-center">
      <ul class="list-inline mx-auto skill-icon">
        {#each skills as skill}
          <li class="list-inline-item mx-3">
            <span>
              <div class="text-center skills-tile">
                <i class={skill.class}>
                  <p class="text-center">
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  div i {
    font-size: "220%";
  }

  div i p.text-center {
    font-size: "30%";
    margin-top: 4px;
  }
</style>
