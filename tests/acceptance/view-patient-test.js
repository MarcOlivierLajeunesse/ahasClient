import { test } from 'qunit';
import moduleForAcceptance from 'ahasweb/tests/helpers/module-for-acceptance';
import { authenticateSession, invalidateSession } from '../helpers/ember-simple-auth';



moduleForAcceptance('Acceptance | view patient');


test('visiting /view-patient/ before login', function(assert) {
	invalidateSession(this.application);
	visit('/view-patient/1');

	andThen(function(){
		assert.notEqual(currentURL(), '/view-patient/1');
	});
});


test('visiting /view-patient', function(assert) {
   authenticateSession(this.application);
  visit('/view-patient/1');

  andThen(function() {
    assert.equal(currentURL(), '/view-patient/1');
  });
});
