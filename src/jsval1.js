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
						
						if(!this.vDate.isValid(inpt.dateFormat, inpt.dateSeparator, e.value))
						{
							stack.push({source: inpt.id, message: inpt.message, isDateFailed:true});
						}
							
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
	},
	vDate: {
		
		year:0, month:0, day:0, hour:0, minute:0, second:0, 
		
		toDate: function(){
			
			return this.year + '-' + this.month +'-'+ this.day;
		},
		setDate: function(dateFormat, separator, date){
			
			var dtfrmt = dateFormat.toLowerCase().split(separator);
			var dts = date.split(separator);
			
			for(var j=0;j<dtfrmt.length;j++)
			{
				if(dtfrmt[j].startsWith('y')){this.year =dts[j];}
				else if(dtfrmt[j].startsWith('m')){this.month =dts[j];}
				else if(dtfrmt[j].startsWith('d')){this.day =dts[j];}
				else if(dtfrmt[j].startsWith('h')){this.hour =dts[j];}
				else if(dtfrmt[j].startsWith('m')){this.minute =dts[j];}
				else if(dtfrmt[j].startsWith('s')){this.second =dts[j];}
			}
		},
		isValid: function(dateFormat, separator, date){
			
			this.clean();
			this.setDate(dateFormat, separator,date);
			var vdate = new Date(this.toDate());
			vdate.setHours(this.hour);
			vdate.setMinutes(this.minute);
			vdate.setSeconds(this.second);
			
			return !isNaN(Date.parse(vdate));
		},
		clean: function(){
			
			this.year=0;this.month=0;this.day=0;this.hour=0;this.minute=0;this.second=0;
		}
	}
};