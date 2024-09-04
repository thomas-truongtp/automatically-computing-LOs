<template lang="">
  <aside>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/score">Score</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script></script>

<style scoped>
@import "../assets/base.css";
aside {
  width: 200px;
  height: 100vh;
  position: fixed;
  background: var(--color-background-dark);
  top: 0;
  left: 0;
  line-height: 2;
  font-size: 18px;
  padding-top: 15px;
}
ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    text-align: center;
  }
}
a {
  text-decoration: none;
  color: var(--color-text);
  transition: 0.4s;
  display: block;
}

@media (hover: hover) {
  a:hover {
    color: var(--color-text);
    background-color: var(--color-border-hover);
  }
}
</style>
