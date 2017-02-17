import Ember from 'ember';

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),
	action: {
		submitNewPatient(){
			self = this;
			let ajaxPost=this.get('ajax').post('/api/client',{
				type: 'application/json',
				data: {patient:{
					client: 'id',
					name: this.get('patientName'),
					species: this.get('patientSpecies'),
					age: this.get('patientAge'),
					color: this.get('patientColor'),
					tattoo: this.get('patientTatoo'),
					microchip: this.get('patientMicrochip'),
					gender:this.get('patientGender'),
					status:this.get('patientStatus')
				}},
			}).then(function(data){
				console.log("statis is " + JSON.stringify(data));
				self.transitionToRoute('login');
			},
			function(data){
				console.log("statis is " + JSON.stringify(data));
			});
		return ajaxPost;
		}
	}
});