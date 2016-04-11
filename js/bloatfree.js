// document.getElementById("proAdModule_part").remove();
// document.addEventListener('onLoad', function(){document.getElementById("proAdModule_part").innerHTML = ""});
setTimeout(function(){
  document.getElementById('proAdModule_part').innerHTML = '';
  document.getElementById('integrationstab_header').innerHTML = '';
  document.getElementById('librarytab').innerHTML = '';
  document.getElementById( 'fixedProfile' ).getElementsByTagName( 'div' )[0].innerHTML = '';
}, 2000);
/*$(document).ready(function(){
  $("#proAdModule_part").remove();
});*/
