import Mixin from '@ember/object/mixin';
import MsApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Mixin.create(MsApplicationRouteMixin, {
  routeAfterAuthentication: 'protected',
  routeIfAlreadyAuthenticated: 'protected'
});
