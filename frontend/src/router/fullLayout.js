import AdminRouter from './AdminRouter.js'
import AdminManagerRouter from './AdminManagerRouter.js'
import AuthManagerRouter from './AuthManagerRouter.js'
import commonRouter from './commonRouter.js'
export default {
  path: '/  ',
  component: resolve => require(['@/components/layout/fulllayout'], resolve),
  children: [
      AuthManagerRouter,
      AdminRouter,
      AdminManagerRouter,
      commonRouter
  ]
}
