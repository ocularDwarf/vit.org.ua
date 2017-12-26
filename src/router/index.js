import index from '../pages/index.vue'
import tour from '../pages/tour.vue'
import feature from '../pages/feature.vue'
import about from '../pages/about.vue'
import contact from '../pages/contact.vue'
import category from '../pages/category.vue'
import partner from '../pages/partner.vue'
import error404 from '../components/error404.vue'
import tourism from '../pages/tourism.vue'

export const routes = [
  {path: '/', component: index },
  {path: '/features', component: feature },
  {path: '/tourism', component: tourism },
  {path: '/category/:name', name: 'country', component: category },
  {path: '/category/:name/:id', name: 'tour', component: tour },
  {path: '/partners', component: partner },
  {path: '/about',   component: about} ,
  {path: '/contact', component: contact },
  {path: '/*', component: error404 }
]
