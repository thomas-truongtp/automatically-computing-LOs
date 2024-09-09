<template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
      const matchedRoutes = route.matched;

      return matchedRoutes.map((routeItem) => ({
        label: routeItem.meta.breadcrumb || routeItem.name,
        to: getRoutePath(route, routeItem),
      }));
    });

    const getRoutePath = (route, routeItem) => {
      const matchedSegments = route.matched.slice(0, route.matched.indexOf(routeItem) + 1);
      return matchedSegments.map((segment) => segment.path).join("/");
    };

    return {
      breadcrumbs,
    };
  },
};
</script>

<style scoped>
@import "../assets/base.css";
ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}
a {
  text-decoration: none;
  color: var(--color-text);
  transition: 0.4s;
  display: block;
  text-align: center;
}

@media (hover: hover) {
  a:hover {
    color: var(--color-border-hover);
  }
}
nav {
  padding: 20px;
  margin-left: 200px;
  background: var(--color-background-dark);
}
</style>
