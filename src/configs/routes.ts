import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/HomePage';

export const routes = [

  {
    path: '/',
    layout: DefaultLayout,
    protected: true,
    component: HomePage
  }
];
