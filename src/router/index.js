import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/ViewHomePage.vue";
import ScorePage from "../views/ViewScorePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        breadcrumb: "Home Page",
      },
    },
    {
      path: "/score",
      name: "score",
      component: ScorePage,
      meta: {
        breadcrumb: "Score Page",
      },
    },
  ],
});

export default router;
