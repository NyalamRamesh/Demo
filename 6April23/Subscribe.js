function subscribe()
{
    var status=document.getElementById("subscribeBut").value
    console.log(status)
    if(status=="Subscribe")
    {
        document.getElementById("status").innerHTML="Subscribed"
        document.getElementById("bell").style.display="block"
        document.getElementById("arrow").style.display="block"
        document.getElementById("subscribeBut").setAttribute("value","Subscribed")
    }
    else
    {
        document.getElementById("window").style.display="block"
    }
}
    function remove()
    {
        document.getElementById("window").style.display="none"
        document.getElementById("unsubcribe").style.display="none"
    }
    function allBell()
    {
         document.getElementById("window").style.display="none"
         document.getElementById("bell").setAttribute("src","AllBell.png")
         console.log("click")
    }
    function normalbell()
    {
       document.getElementById("window").style.display="none"
       document.getElementById("bell").setAttribute("src","SubBell1.png")
       console.log("click")
    }
    function nonebell()
    {
       document.getElementById("window").style.display="none"
       document.getElementById("bell").setAttribute("src","UnSub.png")
       console.log("click")
    }
    function unsub()
    {
       document.getElementById("window").style.display="none"
       document.getElementById("unsubcribe").style.display="block"
    }
    function unsubscribe()
    {
        document.getElementById("unsubcribe").style.display="none"
        document.getElementById("status").innerHTML="Subscribe"
        document.getElementById("bell").style.display="none"
        document.getElementById("arrow").style.display="none"
        document.getElementById("subscribeBut").setAttribute("value","Subscribe")
    }