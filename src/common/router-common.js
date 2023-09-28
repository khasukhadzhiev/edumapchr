import Vue from 'vue';
import VueRouter from 'vue-router';

import college from '../components/college';
import school from '../components/school';
import university from '../components/university';
import { RouteEnum } from '../enums/routeEnum';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    //guest route
    { path: `${RouteEnum.college}`, name: "college", component: college },
    { path: `${RouteEnum.school}`, name: "school", component: school },
    { path: `${RouteEnum.university}`, name: "university", component: university },
    { path: `${RouteEnum.slash}`, name: "school", component: school },
  ]
});