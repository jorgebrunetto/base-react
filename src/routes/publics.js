import * as Auth from 'pages/auth';

const publicsRoutes = [
  {
    path: '/',
    component: Auth.SignIn,
    exact: true,
  },
];

export default publicsRoutes;
