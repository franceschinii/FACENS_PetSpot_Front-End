import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import OurServicesPage from "../pages/OurServicesPage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import OurPartnersPage from "../pages/OurPartnersPage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const isAuthenticated = () => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    return false;
  }

  try {
    const decodedToken = JSON.parse(atob(userId.split(".")[1]));
    const expirationDate = decodedToken.exp * 1000;

    if (Date.now() >= expirationDate) {
      localStorage.clear();
      return false;
    }

    return true;
  } catch (error) {
    console.error("Erro ao decodificar ou verificar o userId:", userId);
    localStorage.clear();
    return false;
  }
};

const authGuard = (_to: any, _from: any, next: any) => {
  if (isAuthenticated()) {
    next();
  } else {
    next("login-page");
  }
};

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
    beforeEnter: isAuthenticated,
  },

  {
    path: "/sign-up",
    name: "register-page",
    component: RegisterPage,
    beforeEnter: isAuthenticated,
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
