import LandingPage from '../client/LandingPage'
import Login from './Login'
import Resume from '../client/Resume';
const routes = [

  {
    path: '/',
    exact: true,
    component: LandingPage,
},
  {
    path: '/Login',
    exact: true,
    component: Login,
},
{
  path: '/Resume',
  exact: true,
  component: Resume,
}

]
export default routes
