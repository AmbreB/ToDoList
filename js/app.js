'use strict';
$(function(){
	var app = {
		init : function(){
			this.bindListeners();
			this.countTask();
		},
		/*
			Ajout des listeners sur les checkbox (change), les éléments de la liste (click)
			sur les boutons du dashboard ...
		*/
		bindListeners : function(){
			$('ul').on('change', 'input:checkbox', this.checkTask);
			$('ul').on('click', 'i', this.removeTask);
			$('#new-todo').on('keypress', this.addTask);
			$('#active').on('click', this.showActive);
			$('#completed').on('click', this.showCompleted);
			$('#all').on('click', this.showAll);
			$('#clearcompleted').on('click', this.clearCompleted);
		},
		// Quand une task est checké, ajout d'une classe et incrémentation du compteur
		checkTask : function(){ 
			$(this).next().toggleClass('checked');
			app.countTask();
		}, 
		// Ajout d'une task à la fin de la liste
		addTask : function(event){
			if(event.which === 13){ // 13 ??? Cela correspond à quoi ?
         		var text = $('#new-todo').val();
         		if (text != '') {
         			// La ligne suivant fait 200 caractères... C'est très long et illisible
         			var newTask = '<li class="listelem">'
         			+ '<input type="checkbox" class="checkbox" autocomplete="off"/>'
         			+ '<label class="element">' + text 
         			+ '</label><i class="fa fa-times fa-fw"></i></li>';

            		$('ul').append(newTask);
            		// Reset de la valeur
            		$('#new-todo').val('');
            	}
         	}
         	app.countTask();
		},
		// Suppression d'une task et décrémentation du compteur
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
