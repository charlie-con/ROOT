var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allwtoon = Array.from(document.querySelectorAll('.wtoon'));
var checked = {};

getChecked('day');
getChecked('date');
getChecked('adult');
getChecked('platform');

Array.prototype.forEach.call(allCheckboxes, function (el) {
    el.addEventListener('change', toggleCheckbox);
  });

  function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
  }

  function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
      return el.value;
    });
  }

  function setVisibility() {
    allwtoon.map(function (el) {
      var day = checked.day.length ? _.intersection(Array.from(el.classList), checked.day).length : true;
      var date = checked.date.length ? _.intersection(Array.from(el.classList), checked.date).length : true;
      var adult = checked.adult.length ? _.intersection(Array.from(el.classList), checked.adult).length : true;
      var platform = checked.platform.length ? _.intersection(Array.from(el.classList), checked.platform).length : true;
      if (day && date && adult && platform) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }


  $(document).ready(function(){
    var wtoon = $(".wtoon");
    for(var i = 0; i < wtoon.length; i++){
      var idx = Math.floor(Math.random() * wtoon.length -1) + 1;
      var idx2 = Math.floor(Math.random() * wtoon.length -1) + 1;
      wtoon.eq(idx).before(wtoon.eq(idx2));
    };
  });