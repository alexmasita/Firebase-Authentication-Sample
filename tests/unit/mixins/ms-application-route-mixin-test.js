import EmberObject from '@ember/object';
import MsApplicationRouteMixinMixin from 'ember310/mixins/ms-application-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | ms-application-route-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let MsApplicationRouteMixinObject = EmberObject.extend(MsApplicationRouteMixinMixin);
    let subject = MsApplicationRouteMixinObject.create();
    assert.ok(subject);
  });
});
