$(document).ready(function() {  

	$(".form-valid").submit(function () {
		var error = 0;
		var email = (".valid-email").val();
		if (!isValidEmailAddress(email)) {
			error = 2;
			$(".valid-email").css('background', 'pink');
		}
		if (error === 0) {
			return true;
		}
		else {
			return false;
		}
	});
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	};

	$('.select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
				$(this).closest('.select-custom').toggleClass('on');
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
			$(this).closest('.select-custom').toggleClass('on');
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$(this).closest('.select-custom').removeClass('on star');
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

        $('.collapse').collapse()

        $('.carousel').carousel()

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$('.select-custom').removeClass('on');
			$list.hide();
		});
	});

	$('.accordion-link').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	});

});


