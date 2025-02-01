import DefaultLayout from '../layouts/DefaultLayout';
import HabitsPage from '../pages/HabitsPage';
import HomePage from '../pages/HomePage';
import NotesPage from '../pages/NotesPage';
import PlanningPage from '../pages/PlanningPage';
import TimerPage from '../pages/TimerPage';

export const routes = [

  {
    path: '/',
    layout: DefaultLayout,
    protected: true,
    component: HomePage
  },
  {
    path: '/timer',
    layout: DefaultLayout,
    protected: true,
    component: TimerPage
  },
  {
    path: '/planning',
    layout: DefaultLayout,
    protected: true,
    component: PlanningPage
  },
  {
    path: '/habits',
    layout: DefaultLayout,
    protected: true,
    component: HabitsPage
  },
  {
    path: '/notes',
    layout: DefaultLayout,
    protected: true,
    component: NotesPage
  }
];
