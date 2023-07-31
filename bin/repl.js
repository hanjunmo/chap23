
import repl from "repl"

repl.start({
	prompt: "숫자 입력>> ",
   eval : function (command, x, y, finish) {
	   console.log(command)
	   command = Number(command)
	   if (isNaN(command))
	       console.log("숫자가 아닙니다.")
	   else
	       console.log("숫자입니다.")
	       
	      finish();
	  }
});

console.log("Ene....")

