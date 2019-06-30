import Route from '@ember/routing/route';
import ApplicationRouteMixin from '../mixins/ms-application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  activate() {
    console.log('application route activated');
  }
});
