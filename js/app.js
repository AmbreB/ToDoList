'use strict';
$(function(){
	var app = {
		init : function(){
			this.bindListeners();
			this.countTask();
		},
		bindListeners : function(){
			$('ul').on('change', 'input:checkbox', this.checkTask);
			$('ul').on('click', 'i', this.removeTask);
			$('#new-todo').on('keypress', this.addTask);
			$('#active').on('click', this.showActive);
			$('#completed').on('click', this.showCompleted);
			$('#all').on('click', this.showAll);
			$('#clearcompleted').on('click', this.clearCompleted);
		},
		checkTask : function(){ 
			$(this).next().toggleClass('checked');
			app.countTask();
		}, 
		addTask : function(event){
			if(event.which === 13){
         		var text = $('#new-todo').val();
         		if (text != '') {
            		$('ul').append('<li class="listelem"><input type="checkbox" class="checkbox" autocomplete="off"/><label class="element">' + text + '</label><i class="fa fa-times fa-fw"></i></li>');
            		$('#new-todo').val('');
            	}
         	}
         	app.countTask();
		},
		removeTask : function(){
			$(this).parent().remove();
			app.countTask();
		},
		showActive : function(){									
			$(':checked').parent().addClass('hide');						
			$('input:checkbox:not(:checked)').parent().removeClass('hide');
		},
		showCompleted : function(){
			$('input:checkbox:not(:checked)').parent().addClass('hide');
			$(':checked').parent().removeClass('hide');
		},
		showAll : function(){
			$(':checked').parent().removeClass('hide');
			$('input:checkbox:not(:checked)').parent().removeClass('hide');
		},
		clearCompleted : function(){
			$(':checked').parent().remove();
		},
		countTask : function(){
			var nbTask = $('input:checkbox:not(:checked)').size();
			if (nbTask > 1) {
				$('#counter').html(nbTask + ' tâches restantes');
			} else {
				$('#counter').html(nbTask + ' tâche restante');
			}
		},
	}
	app.init();
});
