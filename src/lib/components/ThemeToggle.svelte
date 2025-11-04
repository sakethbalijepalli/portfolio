<script lang="ts">
  let light = false;
  if (typeof document !== 'undefined') {
    light = document.documentElement.classList.contains('light');
  }
  function toggle(){
    const root = document.documentElement;
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    light = isLight;
  }
</script>

<button class="btn" on:click={toggle} aria-label="Toggle theme">{light ? '☀️' : '🌙'}</button>
