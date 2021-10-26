function calculate()
{
	var a=Number(document.getElementById("a").value);
	var b=Number(document.getElementById("b").value);
	var c=document.getElementById("c").value=(a*b);

    var a1=Number(document.getElementById("a1").value);
	var b1=Number(document.getElementById("b1").value);
	var c1=document.getElementById("c1").value=(a1*b1);

	var a2=Number(document.getElementById("a2").value);
	var b2=Number(document.getElementById("b2").value);
	var c2=document.getElementById("c2").value=(a2*b2);

	var a3=Number(document.getElementById("a3").value);
	var b3=Number(document.getElementById("b3").value);
	var c3=document.getElementById("c3").value=(a3*b3);

    var a4=Number(document.getElementById("a4").value);
	var b4=Number(document.getElementById("b4").value);
	var c4=document.getElementById("c4").value=(a4*b4);

    var a5=Number(document.getElementById("a5").value);
	var b5=Number(document.getElementById("b5").value);
	var c5=document.getElementById("c5").value=(a5*b5);

	var a6=Number(document.getElementById("a6").value);
	var b6=Number(document.getElementById("b6").value);
	var c6=document.getElementById("c6").value=(a6*b6);

    var a7=Number(document.getElementById("a7").value);
	var b7=Number(document.getElementById("b7").value);
	var c7=document.getElementById("c7").value=(a7*b7);

    var a8=Number(document.getElementById("a8").value);
	var b8=Number(document.getElementById("b8").value);
	var c9=document.getElementById("c8").value=(a8*b8);

	var a9=Number(document.getElementById("a9").value);
	var b9=Number(document.getElementById("b9").value);
	var c9=document.getElementById("c9").value=(a9*b9);

    var a10=Number(document.getElementById("a10").value);
	var b10=Number(document.getElementById("b10").value);
	var c10=document.getElementById("c10").value=(a10*b10);

    var R1 =Number(document.getElementById("R1").value);
    
	var ST1= Number(document.getElementById("ST1").value);
	document.getElementById("ST1").value=(r1+r2+r3+r4+r5+r6+r7+r8+r9+r10+r11);

	var ST1_R1=Number(document.getElementById("ST1_R1").value);
	document.getElementById("ST1_R1").value=(ST1-R1);

	var I1=parseInt(document.getElementById("I1").value+"%");

	var t1=parseInt(document.getElementById("t1").value);
	document.getElementById("t1").value=Math.round((ST1*I1)/100);

	var EXP_m1=Number(document.getElementById("EXP_m1").value);

	var solde=Number(document.getElementById("solde").value);
	document.getElementById("solde").value=(ST1_R1+t1+EXP_m1);
}

function access()
{
	var username=prompt("Identifiant :");
	var password=prompt("Mot de passe :");
	if (username==="Admin_GSB" && password==="admin"){
	document.location.href="code source.html";
}
	else
{ 
	alert("Identifiant ou mot de passe incorrects")}
}