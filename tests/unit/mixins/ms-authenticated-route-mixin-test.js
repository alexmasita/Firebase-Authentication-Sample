import EmberObject from '@ember/object';
import MsAuthenticatedRouteMixinMixin from 'ember310/mixins/ms-authenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | ms-authenticated-route-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let MsAuthenticatedRouteMixinObject = EmberObject.extend(MsAuthenticatedRouteMixinMixin);
    let subject = MsAuthenticatedRouteMixinObject.create();
    assert.ok(subject);
  });
});
