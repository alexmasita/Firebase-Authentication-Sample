import EmberObject from '@ember/object';
import MsUnauthenticatedRouteMixinMixin from 'ember310/mixins/ms-unauthenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | ms-unauthenticated-route-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let MsUnauthenticatedRouteMixinObject = EmberObject.extend(MsUnauthenticatedRouteMixinMixin);
    let subject = MsUnauthenticatedRouteMixinObject.create();
    assert.ok(subject);
  });
});
