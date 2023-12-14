document.querySelectorAll('.burger').forEach(function(item){
    item.addEventListener('click', function(event){
    	document.querySelector('.menu_overlay').classList.add('active');
    });
});

document.querySelector('.menu_overlay .close').addEventListener('click', function() {
    document.querySelector('.menu_overlay').classList.remove('active');
});

document.querySelector('.search_overlay .close').addEventListener('click', function() {
    document.querySelector('.search_overlay').classList.remove('active');
});

function mapPopup(id){
  document.querySelectorAll('.map_popup').forEach(function(item){
    item.classList.remove('active');
  });
  document.getElementById('mp'+id).classList.add('active');
}

if(document.querySelector('.index_map')){
  document.querySelectorAll('.map_popup .close').forEach(function(item){
    item.addEventListener('click', function(event){
      document.querySelectorAll('.map_popup').forEach(function(item2){
        item2.classList.remove('active');
      });
    });
  });
}

function startGuide(n){
  document.querySelectorAll('.audio_day_details').forEach(function(item2){
    item2.classList.remove('active');
  });
  document.getElementById('add_'+n).classList.add('active');
  map.setCenter(placemarks[n].geometry.getCoordinates());
  map.setZoom(14);
}

if(document.querySelector('.days_v-list')){
  document.querySelectorAll('.days_v-list a').forEach(function(item){
    item.addEventListener('click', function(event){
      startGuide(item.dataset.id);
    });
  });
}

function headerState(){
    if(0 < pageYOffset){
        document.querySelector('header').classList.add('hidden');
        document.querySelector('.fixed_header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('hidden');
        document.querySelector('.fixed_header').classList.remove('active');
    }
}

window.addEventListener('load', function(){
    headerState();
});

window.addEventListener('scroll', function() {
    headerState();
});

document.querySelectorAll('.history .tabs a').forEach(function(item){
    item.addEventListener('click', function(event){
        document.querySelectorAll('.history .tabs a').forEach(function(item2){
          item2.classList.remove('active');
        });
        item.classList.add('active');
        document.querySelectorAll('.history .row').forEach(function(item2){
          item2.classList.remove('active');
        });
        document.getElementById('history_block_'+item.dataset.id).classList.add('active');
    });
});

if(document.querySelector('.dd_wrap')){
  document.querySelectorAll('.dd_wrap').forEach(function(item){
    item.addEventListener('click', function(event){
      event.stopPropagation();
      event.preventDefault();
      item.classList.toggle('active');
    });
  });

  document.querySelectorAll('.dd_list a').forEach(function(item){
    item.addEventListener('click', function(event){
      event.stopPropagation();
      event.preventDefault();
      item.parentNode.parentNode.querySelector('span').innerHTML = item.innerHTML;
      item.parentNode.parentNode.querySelector('input').value = item.dataset.id;

      if(item.parentNode.parentNode.classList.contains('ajax_food')){
        reloadFood();
      } else if(item.parentNode.parentNode.classList.contains('ajax_hotels')){
        reloadHotels();
      } else if(item.parentNode.parentNode.classList.contains('ajax_tours')){
        reloadTours();
      }

      document.querySelectorAll('.dd_wrap').forEach(function(item){
        item.classList.remove('active');
      });
    });
  });
}

document.querySelectorAll('.styled-scrollbar').forEach(function(item){
  window.Scrollbar.init(item, { alwaysShowTracks: true });
});

function reloadFood(){
  var place = document.getElementById('f_place').value;
  var type = document.getElementById('f_type').value;
  var food = document.getElementById('f_food').value;
  fetch('/ajax/food.php?lang_id='+lang_id+'&place='+place+'&type='+type+'&food='+food, { method: "get" }).then(response => response.text()).then((data) => {
    document.getElementById('ajax').innerHTML = data;
  });
}

function reloadHotels(){
  var place = document.getElementById('f_place').value;
  var type = document.getElementById('f_type').value;
  fetch('/ajax/hotels.php?lang_id='+lang_id+'&place='+place+'&type='+type, { method: "get" }).then(response => response.text()).then((data) => {
    document.getElementById('ajax').innerHTML = data;
  });
}

function reloadTours(){
  //var city = document.getElementById('f_city').value;
  var season = document.getElementById('f_season').value;
  var type = document.getElementById('f_type').value;
  var long = document.getElementById('f_long').value;
  var price_from = document.getElementById('priceFrom').value
  var price_to = document.getElementById('priceTo').value;
  // fetch('/ajax/tours.php?lang_id='+lang_id+'&city='+city+'&type='+type+'&season='+season+'&long='+long+'&price_from='+price_from+'&price_to='+price_to, { method: "get" }).then(response => response.text()).then((data) => {
  //   document.getElementById('ajax').innerHTML = data;
  // });
  fetch('/ajax/tours.php?lang_id='+lang_id+'&type='+type+'&season='+season+'&long='+long+'&price_from='+price_from+'&price_to='+price_to, { method: "get" }).then(response => response.text()).then((data) => {
    document.getElementById('ajax').innerHTML = data;
  });
}

function reloadEvents(){
  var date = document.getElementById('dateValue').value;
  var cats = '';
  document.querySelectorAll('.block_cats label input').forEach(function(item){
    if(item.checked){
      cats += item.value + '|';
    }
  });
  fetch('/ajax/events.php?lang_id='+lang_id+'&date='+date+'&cats='+cats, { method: "get" }).then(response => response.text()).then((data) => {
    document.getElementById('ajax').innerHTML = data;
  });
}

if(document.querySelector('.map_items')){
  document.querySelectorAll('.map_items .item').forEach(function(item){
    item.addEventListener('click', function(event){
      document.querySelector('.map_items').classList.add('hidden');
      document.getElementById('mi'+item.dataset.id).classList.add('active');
    });
  });
}

function closeMapDetails(){
  document.querySelectorAll('.map_details').forEach(function(item){
    item.classList.remove('active');
    document.querySelector('.map_items').classList.remove('hidden');
  });
}

if(document.querySelector('.calendar_button')){
  document.querySelector('.calendar_button').addEventListener('click', function() {
      document.querySelector('.flatpickr-calendar').classList.add('active');
  });
}

function startSearch(){
  document.getElementById('searchForm').submit();
}

function startSearch2(){
  document.getElementById('searchForm2').submit();
}

function openSearch(){
  document.querySelector('.search_overlay').classList.add('active');
}

if(document.querySelector('.company_gallery')){
  new Glide('.company_gallery', { type: 'carousel', perView: 3,
    breakpoints: {
      768: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  }).mount();
}

if(document.querySelector('.audio_col')){
	document.querySelectorAll('audio').forEach(function(item){
		item.addEventListener('play', function(event){
			document.querySelectorAll('audio').forEach(function(item2){
				if(item != item2){
					item2.pause();
				}
			});
		});
	});
}


window.addEventListener('scroll', function(){
  if(document.documentElement.clientWidth > 480){
    if(document.querySelector('.slidest')){
      let fixed_breakpoint = document.querySelector('.slidest').offsetTop + document.querySelector('.content_page.slidest').clientHeight - 100;
      let slidest_top_position = document.querySelector('.slidest').offsetTop;
      if ((pageYOffset < slidest_top_position)||(pageYOffset>fixed_breakpoint)){
        document.querySelector('.slidest').classList.remove('fixed');
      } else  {
        document.querySelector('.slidest').classList.add('fixed');
      }
    }
    
    if(document.querySelector('.slidest_big')){
      let fixed_breakpoint = document.querySelector('.slidest_big').offsetTop + document.querySelector('.content_page.slidest_big').clientHeight - 100;
      let slidest_top_position = document.querySelector('.slidest_big').offsetTop;
      if((pageYOffset < slidest_top_position)||(pageYOffset>fixed_breakpoint)){
        document.querySelector('.slidest_big').classList.remove('fixed');
      } else {
        document.querySelector('.slidest_big').classList.add('fixed');
      }
    }
  }
});

if(document.querySelector('.filters_mob-title')){
  setTimeout(document.querySelector('.tour_filters').classList.add('hidden_filters'), 100);
  document.querySelector('.filters_mob-title').addEventListener('click', function() {
    document.querySelector('.filters_mob-title').classList.toggle('active');
    document.querySelector('.tour_filters').classList.toggle('hidden_filters');
  });
}

if(document.querySelector('.taganay-page-video')){
	const taganaPageImage = document.querySelector('.taganay-page-images');
	taganaPageImage.style.display = 'flex';
}





