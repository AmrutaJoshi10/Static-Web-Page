function setTheme() {
  var CurrentThemeVal=window.localStorage.getItem("CurrentTheme");
  if(CurrentThemeVal===null|CurrentThemeVal==="default")
  {
  resetTheme();
  let Color = document.getElementsByTagName("div")[0].getAttribute("class");
  if (Color=="darktheme") {
    setLinkTheme('linkdarktheme');
    return;
  }
  else if (Color=="lighttheme") {
    setLinkTheme('linklighttheme');
    return;
  }
  return;
  }
  else if (CurrentThemeVal==="darktheme") {
    darkTheme('darktheme');
    setLinkTheme('linkdarktheme');
    return;
  } 
  else if(CurrentThemeVal==="lighttheme"){
    lightTheme('lighttheme');
    setLinkTheme('linklighttheme');
    return;
  }   
}
function setLinkTheme(theme) {
  if(document.links.length!=0)
  var linkTh = document.links[0].getAttribute("class");
  for (let i = 0, l = document.links.length; i < l; ++i) {
    let lnk = document.links[i];
    if (lnk.classList.contains(theme))
      return;
      else{
        lnk.classList.remove(linkTh);
        lnk.classList.add(theme);
      }
   
  }
}

function lightTheme(theme){
  resetBodyTheme(theme);
  document.getElementsByTagName("BODY")[0].setAttribute("class", "lighttheme");
}
function darkTheme(theme){
  resetBodyTheme(theme);
  document.getElementsByTagName("BODY")[0].setAttribute("class", "darktheme");
}
function resetTheme(theme)
{
 var test=  document.getElementsByTagName("div")[0].getAttribute("class");
 var testelem = document.getElementsByTagName('body')[0].getAttribute("class");
 var elem = document.getElementsByTagName('body')[0];
 if (elem.classList.contains(test))
   return;
   else
   {
   elem.classList.remove(testelem);
 elem.classList.add(test);
   }
}
function resetBodyTheme(theme)
{
var testelem = document.getElementsByTagName('body')[0].getAttribute("class");
var elem = document.getElementsByTagName('body')[0];
if(elem.classList.contains(theme))
return;
else 
{
  elem.classList.remove(testelem);
  elem.classList.add(theme);
}
}
/*---- set class attribute on all links -----------------*/
function DarkTheme()
{
  window.localStorage.setItem("CurrentTheme","darktheme");
  setTheme();
}
function LightTheme()
{
  window.localStorage.setItem("CurrentTheme","lighttheme");
  setTheme();
}
function PageReset()
{
  window.localStorage.removeItem("CurrentTheme");
  setTheme();
}

