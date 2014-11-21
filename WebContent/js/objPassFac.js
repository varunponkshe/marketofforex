myApp.factory("objPassFac", function(){
	var info = {
		first : "",
		last : '',
		email : '',
		phone : '',
		creditCard : '',
		address1 : '',
		address2 : '',
		city : '',
		state : '',
		zip : ''
	};
	
	return {
		getFirstName: function(){
			return info.first;
		},
		setFirstName: function(firstName){
			info.first = firstName;
		},
		getLastName: function(){
			return info.last;
		},
		setLastName: function(lastName){
			info.last = lastName;
		},
		getEmail: function(){
			return info.email;
		},
		setEmail: function(newEmail){
			info.email = newEmail;
		},
		getPhone: function(){
			return info.phone;
		},
		setPhone: function(newPhone){
			info.phone= newPhone;
		},
		getCC: function(){
			return info.creditCard;
		},
		setCC: function(CC){
			info.creditCard= CC;
		},
		getA1: function(){
			return info.address1;
		},
		setA1: function(A1){
			info.address1 = A1;
		},
		getA2: function(){
			return info.address2;
		},
		setA2: function(A2){
			info.address2 = A2;
		},
		getCity: function(){
			return info.city;
		},
		setCity: function(newCity){
			info.city = newCity;
		},
		getState: function(){
			return info.state;
		},
		setState: function(newState){
			info.state = newState;
		},
		getZip: function(){
			return info.zip;
		},
		setZip: function(newZip){
			info.zip = newZip;
		}
		
	};
		});