import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import OurServicesPage from "../pages/OurServicesPage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import OurPartnersPage from "../pages/OurPartnersPage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "landing-page",
    component: LandingPage,
  },

  {
    path: "/sign-in",
    name: "login-page",
    component: LoginPage,
  },

  {
    path: "/sign-up",
    name: "register-page",
    component: RegisterPage,
  },

  {
    path: "/our-services",
    name: "our-services-page",
    component: OurServicesPage,
  },

  {
    path: "/about-us",
    name: "about-us-page",
    component: AboutUsPage,
  },

  {
    path: "/our-partners",
    name: "our-partners-page",
    component: OurPartnersPage,
  },

  {
    path: "/contact-us",
    name: "contact-us-page",
    component: ContactUsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
