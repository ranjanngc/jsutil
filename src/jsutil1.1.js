var $V=
{
	callback:null,
	inputs:[],
	add: function(validationAttribute){
		
		this.inputs.push(validationAttribute);
	},
	validate: function(){
		
		if(this.callback)
		{
			var stack = [];
			for(var i=0,l=this.inputs.length;i<l;i++)
			{
				var inpt = this.inputs[i];
				var e=document.getElementById(inpt.id);
				if(e)
				{
					if(inpt.isRequired && e.value.trim()===''){
						
						stack.push({source: inpt.id, message: inpt.message, isRequiredFailed:true});
					}
					
					if(inpt.isDate && e.value.trim()!=='' && inpt.dateFormat){
							
						stack.push({source: inpt.id, message: inpt.message, isDateFailed:true});
					}
					
					if(inpt.isNumeric && e.value.trim()===''){
						
						var val = parseInt(inpt.value);
						if(val < inpt.min || val > inpt.max)
						stack.push({source: inpt.id, message: inpt.message, isNumericFailed:true});
					}
				}
			}
			
			$V.callback(stack);
		}
	}
};