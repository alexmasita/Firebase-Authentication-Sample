import Route from '@ember/routing/route';
import MsAuthenticatedRouteMixin from '../mixins/ms-authenticated-route-mixin';
import {inject as service} from '@ember/service';

export default Route.extend(MsAuthenticatedRouteMixin, {
  session: service(),
  actions:{
    logout(){
      this.session.invalidate();
    }
  }
});
