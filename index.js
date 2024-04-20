let num = 0, num2 = 0;

function myfun(num1) {
   
    if (num1 === 1) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.school_list').style="display: block;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.school_list').style ="display: none;"; 
            num++;
        }
    } else if (num1 === 2) {
        if (num2%2 === 0 ) {
            ++num2;
            document.querySelector('.age_list').style="display: block;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num2%2 != 0 ) {
            document.querySelector('.age_list').style ='display: none;'; 
            ++num2;
        }
    } else if (num1 === 3) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.color_list').style="display: block;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.color_list').style ='display: none;'; 
            num++;
        }
    } else if (num1 === 4) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.forgirl_list').style="display: block;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.forboy_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.forgirl_list').style ='display: none;'; 
            num++;
        }
    } else if (num1 === 5) {
        if (num%2 === 0 ) {
            num++;
            document.querySelector('.forboy_list').style="display: block;";
            document.querySelector('.school_list').style="display: none;";
            document.querySelector('.age_list').style="display: none;";
            document.querySelector('.color_list').style="display: none;";
            document.querySelector('.forgirl_list').style ='display: none;';
        } else if (num%2 != 0 ) {
            document.querySelector('.forboy_list').style ='display: none;'; 
            num++;
        }
    }
    
}





/* this only for sign up form display on*/

function myfun021() {
    if (num%2 === 0 ) {
        document.querySelector('.body1').style='display: none;';
        document.querySelector('.signup_form').style='display: block;';
        document.querySelector('.body').style='background-image: url(BH2.png);';
        num++;
    } else {
        document.querySelector('.body1').style='display: block;';
        num++;
    }
   
}



function myfun031() {

    let login = {
        email: "", /* p9050731@gmail.com */
        password: "" /* lgskbd12 */
    },email, password;
    
    email = String(document.querySelector('.input_login_e').value);
    password  =  String(document.querySelector('.input_login_pw').value);
    

    if (email === login.email && password === login.password  ) {
        document.querySelector('.login_form').style='display: none;';
        document.querySelector('.body').style='background-image: url(BH2.png);';
        alert('welcome to your administrator!');
        document.querySelector('.admin_side').style='display: block;';
        num++;
    } else {
        alert('pleasse try agein');
    }
   
}












/* this only for login form display on*/


function myfun02() {
    if (num%2 === 0 ) {
        document.querySelector('.body1').style='display: none;';
        document.querySelector('.login_form').style='display: block;';
        document.querySelector('.body').style='background-image: url(BH2.png);';
        num++;
    } else {
        document.querySelector('.body1').style='display: block;';
        num++;
    }
   
}





function myfun03() {

    let login = {
        email: "p9050731@gmail.com", /* p9050731@gmail.com */
        password: "lgskbd12" /* lgskbd12 */
    },email, password;
    
    email = String(document.querySelector('.input_login_e').value);
    password  =  String(document.querySelector('.input_login_pw').value);
    

    if (email === login.email && password === login.password  ) {
        document.querySelector('.login_form').style='display: none;';
        document.querySelector('.body').style='background-image: url(BH2.png);';
        alert('welcome to your administrator!');
        document.querySelector('.admin_side').style='display: block;';
        num++;
    } else {
        alert('pleasse try agein');
    }
   
}















/* the following 8 are for the shirt only*/




let shirt2, c_value2, p_value2,s_value2;

shirt2 = JSON.parse(localStorage.getItem('shirt'));

    
    document.querySelector('.shirt_2_h6').innerHTML = "  price :" + shirt2.price + " \n color :"  + shirt2.color   + " \n size :" + shirt2.size;
    document.querySelector('.shirt_2_h6').style = "font-size: 12px; font-weight: bold;";


function myfun2() {

    s_value2 = String(document.querySelector(".input_size").value);
    c_value2 = String(document.querySelector(".input_color").value);
    p_value2 = Number(document.querySelector(".input_price").value);

    shirt2.price += p_value2;
    shirt2.color = c_value2;
    shirt2.size = s_value2;
    localStorage.setItem('shirt', JSON.stringify(shirt2));

}

function myfun2s(num) {
    if (num === 1) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star2.png";
        document.getElementById('star23').src="star2.png";
        document.getElementById('star24').src="star2.png";
        document.getElementById('star25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star2.png";
        document.getElementById('star24').src="star2.png";
        document.getElementById('star25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star22.png";
        document.getElementById('star24').src="star2.png";
        document.getElementById('star25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star22.png";
        document.getElementById('star24').src="star23.png";
        document.getElementById('star25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star21').src="star21.png";
        document.getElementById('star22').src="star21.png";
        document.getElementById('star23').src="star22.png";
        document.getElementById('star24').src="star23.png";
        document.getElementById('star25').src="star23.png";
    }
} 





 
   
let shirt3, c_value3, p_value3, s_value3;

shirt3 = JSON.parse(localStorage.getItem('shirt3'));

   
    document.querySelector('.shirt_3_h6').innerHTML = "  price :" + shirt3.price + " \n color :"  + shirt3.color   + " \n size :" + shirt3.size;
    document.querySelector('.shirt_3_h6').style = "font-size: 12px; font-weight: bold;";


function myfun3() {

    s_value3 = String(document.querySelector(".input_size").value);
    c_value3 = String(document.querySelector(".input_color").value);
    p_value3 = Number(document.querySelector(".input_price").value);

    shirt3.price += p_value3;
    shirt3.color = c_value3;
    shirt3.size = s_value3;
    localStorage.setItem('shirt3', JSON.stringify(shirt3));

}

function myfun3s(num) {
    if (num === 1) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star2.png";
        document.getElementById('star33').src="star2.png";
        document.getElementById('star34').src="star2.png";
        document.getElementById('star35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star2.png";
        document.getElementById('star34').src="star2.png";
        document.getElementById('star35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star22.png";
        document.getElementById('star34').src="star2.png";
        document.getElementById('star35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star22.png";
        document.getElementById('star34').src="star23.png";
        document.getElementById('star35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star31').src="star21.png";
        document.getElementById('star32').src="star21.png";
        document.getElementById('star33').src="star22.png";
        document.getElementById('star34').src="star23.png";
        document.getElementById('star35').src="star23.png";
    }
} 








let shirt4, c_value4, p_value4, s_value4;

shirt4 = JSON.parse(localStorage.getItem('shirt4'));

    
    document.querySelector('.shirt_4_h6').innerHTML = "  price :" + shirt4.price + " \n color :"  + shirt4.color   + " \n size :" + shirt4.size;
    document.querySelector('.shirt_4_h6').style = "font-size: 12px; font-weight: bold;";


function myfun4() {

    s_value4 = String(document.querySelector(".input_size").value);
    c_value4 = String(document.querySelector(".input_color").value);
    p_value4 = Number(document.querySelector(".input_price").value);

    shirt4.price += p_value4;
    shirt4.color = c_value4;
    shirt4.size = s_value4;
    localStorage.setItem('shirt4', JSON.stringify(shirt4));

}

function myfun4s(num) {
    if (num === 1) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star2.png";
        document.getElementById('star43').src="star2.png";
        document.getElementById('star44').src="star2.png";
        document.getElementById('star45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star2.png";
        document.getElementById('star44').src="star2.png";
        document.getElementById('star45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star22.png";
        document.getElementById('star44').src="star2.png";
        document.getElementById('star45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star22.png";
        document.getElementById('star44').src="star23.png";
        document.getElementById('star45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star41').src="star21.png";
        document.getElementById('star42').src="star21.png";
        document.getElementById('star43').src="star22.png";
        document.getElementById('star44').src="star23.png";
        document.getElementById('star45').src="star23.png";
    }
}






let shirt5, c_value5, p_value5, s_value5;

shirt5 = JSON.parse(localStorage.getItem('shirt5'));

    
    document.querySelector('.shirt_5_h6').innerHTML = "  price :" + shirt5.price + " \n color :"  + shirt5.color   + " \n size :" + shirt5.size;
    document.querySelector('.shirt_5_h6').style = "font-size: 12px; font-weight: bold;";


function myfun5() {

    s_value5 = String(document.querySelector(".input_size").value);
    c_value5 = String(document.querySelector(".input_color").value);
    p_value5 = Number(document.querySelector(".input_price").value);

    shirt5.price += p_value5;
    shirt5.color = c_value5;
    shirt5.size = s_value5;
    localStorage.setItem('shirt5', JSON.stringify(shirt5));

}

function myfun5s(num) {
    if (num === 1) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star2.png";
        document.getElementById('star53').src="star2.png";
        document.getElementById('star54').src="star2.png";
        document.getElementById('star55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star2.png";
        document.getElementById('star54').src="star2.png";
        document.getElementById('star55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star22.png";
        document.getElementById('star54').src="star2.png";
        document.getElementById('star55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star22.png";
        document.getElementById('star54').src="star23.png";
        document.getElementById('star55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star51').src="star21.png";
        document.getElementById('star52').src="star21.png";
        document.getElementById('star53').src="star22.png";
        document.getElementById('star54').src="star23.png";
        document.getElementById('star55').src="star23.png";
    }
}                           






let shirt7, c_value7, p_value7, s_value7;

shirt7 = JSON.parse(localStorage.getItem('shirt7'));

    console.log();
    document.querySelector('.shirt_7_h6').innerHTML = "  price :" + shirt7.price + " \n color :"  + shirt7.color   + " \n size :" + shirt7.size;
    document.querySelector('.shirt_7_h6').style = "font-size: 12px; font-weight: bold;";


function myfun7() {

    s_value7 = String(document.querySelector(".input_size").value);
    c_value7 = String(document.querySelector(".input_color").value);
    p_value7 = Number(document.querySelector(".input_price").value);

    shirt7.price += p_value7;
    shirt7.color = c_value7;
    shirt7.size = s_value7;
    localStorage.setItem('shirt7', JSON.stringify(shirt7));

}

function myfun7s(num) {
    if (num === 1) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star2.png";
        document.getElementById('star73').src="star2.png";
        document.getElementById('star74').src="star2.png";
        document.getElementById('star75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star2.png";
        document.getElementById('star74').src="star2.png";
        document.getElementById('star75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star22.png";
        document.getElementById('star74').src="star2.png";
        document.getElementById('star75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star22.png";
        document.getElementById('star74').src="star23.png";
        document.getElementById('star75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star71').src="star21.png";
        document.getElementById('star72').src="star21.png";
        document.getElementById('star73').src="star22.png";
        document.getElementById('star74').src="star23.png";
        document.getElementById('star75').src="star23.png";
    }
}




let shirt8, c_value8, p_value8, s_value8;

shirt8 = JSON.parse(localStorage.getItem('shirt8'));

    
    document.querySelector('.shirt_8_h6').innerHTML = "  price :" + shirt8.price + " \n color :"  + shirt8.color   + " \n size :" + shirt8.size;
    document.querySelector('.shirt_8_h6').style = "font-size: 12px; font-weight: bold;";


function myfun8() {

    s_value8 = String(document.querySelector(".input_size").value);
    c_value8 = String(document.querySelector(".input_color").value);
    p_value8 = Number(document.querySelector(".input_price").value);

    shirt8.price += p_value8;
    shirt8.color = c_value8;
    shirt8.size = s_value8;
    localStorage.setItem('shirt8', JSON.stringify(shirt8));

}
function myfun8s(num) {
    if (num === 1) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star2.png";
        document.getElementById('star83').src="star2.png";
        document.getElementById('star84').src="star2.png";
        document.getElementById('star85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star2.png";
        document.getElementById('star84').src="star2.png";
        document.getElementById('star85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star22.png";
        document.getElementById('star84').src="star2.png";
        document.getElementById('star85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star22.png";
        document.getElementById('star84').src="star23.png";
        document.getElementById('star85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star81').src="star21.png";
        document.getElementById('star82').src="star21.png";
        document.getElementById('star83').src="star22.png";
        document.getElementById('star84').src="star23.png";
        document.getElementById('star85').src="star23.png";
    }
}                           








let shirt9, c_value9, p_value9, s_value9;

shirt9 = JSON.parse(localStorage.getItem('shirt9'));

    
    document.querySelector('.shirt_9_h6').innerHTML = "  price :" + shirt9.price + " \n color :"  + shirt9.color   + " \n size :" + shirt9.size;
    document.querySelector('.shirt_9_h6').style = "font-size: 12px; font-weight: bold;";


function myfun9() {

    s_value9 = String(document.querySelector(".input_size").value);
    c_value9 = String(document.querySelector(".input_color").value);
    p_value9 = Number(document.querySelector(".input_price").value);

    shirt9.price += p_value9;
    shirt9.color = c_value9;
    shirt9.size = s_value9;
    localStorage.setItem('shirt9', JSON.stringify(shirt9));

}

function myfun9s(num) {
    if (num === 1) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star2.png";
        document.getElementById('star93').src="star2.png";
        document.getElementById('star94').src="star2.png";
        document.getElementById('star95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star2.png";
        document.getElementById('star94').src="star2.png";
        document.getElementById('star95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star22.png";
        document.getElementById('star94').src="star2.png";
        document.getElementById('star95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star22.png";
        document.getElementById('star94').src="star23.png";
        document.getElementById('star95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star91').src="star21.png";
        document.getElementById('star92').src="star21.png";
        document.getElementById('star93').src="star22.png";
        document.getElementById('star94').src="star23.png";
        document.getElementById('star95').src="star23.png";
    }
}






let shirt10, c_value10, p_value10, s_value10;

shirt10 = JSON.parse(localStorage.getItem('shirt10'));

   

    document.querySelector('.shirt_10_h6').innerHTML = "  price :" + shirt10.price + " \n color :"  + shirt10.color   + " \n size :" + shirt10.size;
    document.querySelector('.shirt_10_h6').style = "font-size: 12px; font-weight: bold;";


function myfun10() {

    s_value10 = String(document.querySelector(".input_size").value);
    c_value10 = String(document.querySelector(".input_color").value);
    p_value10 = Number(document.querySelector(".input_price").value);

    shirt10.price += p_value10;
    shirt10.color = c_value10;
    shirt10.size = s_value10;
    localStorage.setItem('shirt10', JSON.stringify(shirt10));

}

function myfun10s(num) {
    if (num === 1) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star2.png";
        document.getElementById('star103').src="star2.png";
        document.getElementById('star104').src="star2.png";
        document.getElementById('star105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star2.png";
        document.getElementById('star104').src="star2.png";
        document.getElementById('star105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star22.png";
        document.getElementById('star104').src="star2.png";
        document.getElementById('star105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star22.png";
        document.getElementById('star104').src="star23.png";
        document.getElementById('star105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('star101').src="star21.png";
        document.getElementById('star102').src="star21.png";
        document.getElementById('star103').src="star22.png";
        document.getElementById('star104').src="star23.png";
        document.getElementById('star105').src="star23.png";
    }
}







/* the following 8 are for the sweater only*/


let sweater12, c_value12, p_value12,s_value12;

sweater12 = JSON.parse(localStorage.getItem('sweater12'));

    document.querySelector('.sweater_2_h6').innerHTML = "  price :" + sweater12.price + " \n color :"  + sweater12.color   + " \n size :" + sweater12.size;
    document.querySelector('.sweater_2_h6').style = "font-size: 15px; font-weight: bold;";


function myfun12() {

    s_value12 = String(document.querySelector(".input_size1").value);
    c_value12 = String(document.querySelector(".input_color1").value);
    p_value12 = Number(document.querySelector(".input_price1").value);

    sweater12.price += p_value12;
    sweater12.color = c_value12;
    sweater12.size = s_value12;
    localStorage.setItem('sweater12', JSON.stringify(sweater12));

}


function myfun2sw(num) {
    if (num === 1) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star2.png";
        document.getElementById('starw23').src="star2.png";
        document.getElementById('starw24').src="star2.png";
        document.getElementById('starw25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star2.png";
        document.getElementById('starw24').src="star2.png";
        document.getElementById('starw25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star22.png";
        document.getElementById('starw24').src="star2.png";
        document.getElementById('starw25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star22.png";
        document.getElementById('starw24').src="star23.png";
        document.getElementById('starw25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw21').src="star21.png";
        document.getElementById('starw22').src="star21.png";
        document.getElementById('starw23').src="star22.png";
        document.getElementById('starw24').src="star23.png";
        document.getElementById('starw25').src="star23.png";
    }
}



 
   
let sweater13, c_value13, p_value13, s_value13;

sweater13 = JSON.parse(localStorage.getItem('sweater13'));



    document.querySelector('.sweater_3_h6').innerHTML = "  price :" + sweater13.price + " \n color :"  + sweater13.color   + " \n size :" + sweater13.size;
    document.querySelector('.sweater_3_h6').style = "font-size: 15px; font-weight: bold;";


function myfun13() {

    s_value13 = String(document.querySelector(".input_size1").value);
    c_value13 = String(document.querySelector(".input_color1").value);
    p_value13 = Number(document.querySelector(".input_price1").value);

    sweater13.price += p_value13;
    sweater13.color = c_value13;
    sweater13.size = s_value13;
    localStorage.setItem('sweater13', JSON.stringify(sweater13));

}


function myfun3sw(num) {
    if (num === 1) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star2.png";
        document.getElementById('starw33').src="star2.png";
        document.getElementById('starw34').src="star2.png";
        document.getElementById('starw35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star2.png";
        document.getElementById('starw34').src="star2.png";
        document.getElementById('starw35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star22.png";
        document.getElementById('starw34').src="star2.png";
        document.getElementById('starw35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star22.png";
        document.getElementById('starw34').src="star23.png";
        document.getElementById('starw35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw31').src="star21.png";
        document.getElementById('starw32').src="star21.png";
        document.getElementById('starw33').src="star22.png";
        document.getElementById('starw34').src="star23.png";
        document.getElementById('starw35').src="star23.png";
    }
}






let sweater14, c_value14, p_value14, s_value14;

sweater14 = JSON.parse(localStorage.getItem('sweater14'));

    document.querySelector('.sweater_4_h6').innerHTML = "  price :" + sweater14.price + " \n color :"  + sweater14.color   + " \n size :" + sweater14.size;
    document.querySelector('.sweater_4_h6').style = "font-size: 15px; font-weight: bold;";


function myfun14() {

    s_value14 = String(document.querySelector(".input_size1").value);
    c_value14 = String(document.querySelector(".input_color1").value);
    p_value14 = Number(document.querySelector(".input_price1").value);

    sweater14.price += p_value14;
    sweater14.color = c_value14;
    sweater14.size = s_value14;
    localStorage.setItem('sweater14', JSON.stringify(sweater14));

}

function myfun4sw(num) {
    if (num === 1) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star2.png";
        document.getElementById('starw43').src="star2.png";
        document.getElementById('starw44').src="star2.png";
        document.getElementById('starw45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star2.png";
        document.getElementById('starw44').src="star2.png";
        document.getElementById('starw45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star22.png";
        document.getElementById('starw44').src="star2.png";
        document.getElementById('starw45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star22.png";
        document.getElementById('starw44').src="star23.png";
        document.getElementById('starw45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw41').src="star21.png";
        document.getElementById('starw42').src="star21.png";
        document.getElementById('starw43').src="star22.png";
        document.getElementById('starw44').src="star23.png";
        document.getElementById('starw45').src="star23.png";
    }
} 







let sweater15, c_value15, p_value15, s_value15;

sweater15 = JSON.parse(localStorage.getItem('sweater14'));

    document.querySelector('.sweater_5_h6').innerHTML = "  price :" + sweater15.price + " \n color :"  + sweater15.color   + " \n size :" + sweater15.size;
    document.querySelector('.sweater_5_h6').style = "font-size: 15px; font-weight: bold;";


function myfun15() {

    s_value15 = String(document.querySelector(".input_size1").value);
    c_value15 = String(document.querySelector(".input_color1").value);
    p_value15 = Number(document.querySelector(".input_price1").value);

    sweater15.price += p_value15;
    sweater15.color = c_value15;
    sweater15.size = s_value15;
    localStorage.setItem('sweater15', JSON.stringify(sweater15));

}

function myfun5sw(num) {
    if (num === 1) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star2.png";
        document.getElementById('starw53').src="star2.png";
        document.getElementById('starw54').src="star2.png";
        document.getElementById('starw55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star2.png";
        document.getElementById('starw54').src="star2.png";
        document.getElementById('starw55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star22.png";
        document.getElementById('starw54').src="star2.png";
        document.getElementById('starw55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star22.png";
        document.getElementById('starw54').src="star23.png";
        document.getElementById('starw55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw51').src="star21.png";
        document.getElementById('starw52').src="star21.png";
        document.getElementById('starw53').src="star22.png";
        document.getElementById('starw54').src="star23.png";
        document.getElementById('starw55').src="star23.png";
    }
} 







let sweater17, c_value17, p_value17, s_value17;

sweater17 = JSON.parse(localStorage.getItem('sweater14'));


    document.querySelector('.sweater_7_h6').innerHTML = "  price :" + sweater17.price + " \n color :"  + sweater17.color   + " \n size :" + sweater17.size;
    document.querySelector('.sweater_7_h6').style = "font-size: 15px; font-weight: bold;";


function myfun17() {

    s_value17 = String(document.querySelector(".input_size1").value);
    c_value17 = String(document.querySelector(".input_color1").value);
    p_value17 = Number(document.querySelector(".input_price1").value);

    sweater17.price += p_value17;
    sweater17.color = c_value17;
    sweater17.size = s_value17;
    localStorage.setItem('sweater17', JSON.stringify(sweater17));

}

function myfun7sw(num) {
    if (num === 1) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star2.png";
        document.getElementById('starw73').src="star2.png";
        document.getElementById('starw74').src="star2.png";
        document.getElementById('starw75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star2.png";
        document.getElementById('starw74').src="star2.png";
        document.getElementById('starw75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star22.png";
        document.getElementById('starw74').src="star2.png";
        document.getElementById('starw75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star22.png";
        document.getElementById('starw74').src="star23.png";
        document.getElementById('starw75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw71').src="star21.png";
        document.getElementById('starw72').src="star21.png";
        document.getElementById('starw73').src="star22.png";
        document.getElementById('starw74').src="star23.png";
        document.getElementById('starw75').src="star23.png";
    }
}








let sweater18, c_value18, p_value18, s_value18;

sweater18 = JSON.parse(localStorage.getItem('sweater14'));

    document.querySelector('.sweater_8_h6').innerHTML = "  price :" + sweater18.price + " \n color :"  + sweater18.color   + " \n size :" + sweater18.size;
    document.querySelector('.sweater_8_h6').style = "font-size: 15px; font-weight: bold;";


function myfun18() {

    s_value18 = String(document.querySelector(".input_size1").value);
    c_value18 = String(document.querySelector(".input_color1").value);
    p_value18 = Number(document.querySelector(".input_price1").value);

    sweater18.price += p_value18;
    sweater18.color = c_value18;
    sweater18.size = s_value18;
    localStorage.setItem('sweater18', JSON.stringify(sweater18));

}


function myfun8sw(num) {
    if (num === 1) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star2.png";
        document.getElementById('starw83').src="star2.png";
        document.getElementById('starw84').src="star2.png";
        document.getElementById('starw85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star2.png";
        document.getElementById('starw84').src="star2.png";
        document.getElementById('starw85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star22.png";
        document.getElementById('starw84').src="star2.png";
        document.getElementById('starw85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star22.png";
        document.getElementById('starw84').src="star23.png";
        document.getElementById('starw85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw81').src="star21.png";
        document.getElementById('starw82').src="star21.png";
        document.getElementById('starw83').src="star22.png";
        document.getElementById('starw84').src="star23.png";
        document.getElementById('starw85').src="star23.png";
    }
}







let sweater19, c_value19, p_value19, s_value19;

sweater19 = JSON.parse(localStorage.getItem('sweater14'));
    document.querySelector('.sweater_9_h6').innerHTML = "  price :" + sweater19.price + " \n color :"  + sweater19.color   + " \n size :" + sweater19.size;
    document.querySelector('.sweater_9_h6').style = "font-size: 15px; font-weight: bold;";


function myfun19() {

    s_value19 = String(document.querySelector(".input_size1").value);
    c_value19 = String(document.querySelector(".input_color1").value);
    p_value19 = Number(document.querySelector(".input_price1").value);

    sweater19.price += p_value19;
    sweater19.color = c_value19;
    sweater19.size = s_value19;
    localStorage.setItem('sweater19', JSON.stringify(sweater19));

}


function myfun9sw(num) {
    if (num === 1) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star2.png";
        document.getElementById('starw93').src="star2.png";
        document.getElementById('starw94').src="star2.png";
        document.getElementById('starw95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star2.png";
        document.getElementById('starw94').src="star2.png";
        document.getElementById('starw95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star22.png";
        document.getElementById('starw94').src="star2.png";
        document.getElementById('starw95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star22.png";
        document.getElementById('starw94').src="star23.png";
        document.getElementById('starw95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw91').src="star21.png";
        document.getElementById('starw92').src="star21.png";
        document.getElementById('starw93').src="star22.png";
        document.getElementById('starw94').src="star23.png";
        document.getElementById('starw95').src="star23.png";
    }
}









let sweater110, c_value110, p_value110, s_value110;

sweater110 = JSON.parse(localStorage.getItem('sweater14'));
    document.querySelector('.sweater_10_h6').innerHTML = "  price :" + sweater110.price + " \n color :"  + sweater110.color   + " \n size :" + sweater110.size;
    document.querySelector('.sweater_10_h6').style = "color: red;font-size: 15px; font-weight: bold;";


function myfun110() {

    s_value110 = String(document.querySelector(".input_size1").value);
    c_value110 = String(document.querySelector(".input_color1").value);
    p_value110 = Number(document.querySelector(".input_price1").value);

    sweater110.price += p_value110;
    sweater110.color = c_value110;
    sweater110.size = s_value110;
    localStorage.setItem('sweater110', JSON.stringify(sweater110));

}

function myfun10sw(num) {
    if (num === 1) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star2.png";
        document.getElementById('starw103').src="star2.png";
        document.getElementById('starw104').src="star2.png";
        document.getElementById('starw105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star2.png";
        document.getElementById('starw104').src="star2.png";
        document.getElementById('starw105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star22.png";
        document.getElementById('starw104').src="star2.png";
        document.getElementById('starw105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star22.png";
        document.getElementById('starw104').src="star23.png";
        document.getElementById('starw105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('starw101').src="star21.png";
        document.getElementById('starw102').src="star21.png";
        document.getElementById('starw103').src="star22.png";
        document.getElementById('starw104').src="star23.png";
        document.getElementById('starw105').src="star23.png";
    }
}








/* the following 8 are for the trauther only*/


let trauther22, c_value22, p_value22,s_value22;

trauther22 = JSON.parse(localStorage.getItem('trauther22'));

    document.querySelector('.trauther_2_h6').innerHTML = "  price :" + trauther22.price + " \n color :"  + trauther22.color   + " \n size :" + trauther22.size;
    document.querySelector('.trauther_2_h6').style = "font-size: 12px; font-weight: bold;";


function myfun22() {

    s_value22 = String(document.querySelector(".input_size2").value);
    c_value22 = String(document.querySelector(".input_color2").value);
    p_value22 = Number(document.querySelector(".input_price2").value);

    trauther22.price += p_value22;
    trauther22.color = c_value22;
    trauther22.size = s_value22;
    localStorage.setItem('trauther22', JSON.stringify(trauther22));

}
function myfun2t(num) {
    if (num === 1) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star2.png";
        document.getElementById('start23').src="star2.png";
        document.getElementById('start24').src="star2.png";
        document.getElementById('start25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star2.png";
        document.getElementById('start24').src="star2.png";
        document.getElementById('start25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star22.png";
        document.getElementById('start24').src="star2.png";
        document.getElementById('start25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star22.png";
        document.getElementById('start24').src="star23.png";
        document.getElementById('start25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start21').src="star21.png";
        document.getElementById('start22').src="star21.png";
        document.getElementById('start23').src="star22.png";
        document.getElementById('start24').src="star23.png";
        document.getElementById('start25').src="star23.png";
    }
}





 
   
let trauther23, c_value23, p_value23, s_value23;

trauther23 = JSON.parse(localStorage.getItem('trauther23'));

    
    document.querySelector('.trauther_3_h6').innerHTML = "  price :" + trauther23.price + " \n color :"  + trauther23.color   + " \n size :" + trauther23.size;
    document.querySelector('.trauther_3_h6').style = "font-size: 12px; font-weight: bold;";


function myfun23() {

    s_value23 = String(document.querySelector(".input_size2").value);
    c_value23 = String(document.querySelector(".input_color2").value);
    p_value23 = Number(document.querySelector(".input_price2").value);

    trauther23.price += p_value23;
    trauther23.color = c_value23;
    trauther23.size = s_value23;
    localStorage.setItem('trauther23', JSON.stringify(trauther23));

}

function myfun3t(num) {
    if (num === 1) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star2.png";
        document.getElementById('start33').src="star2.png";
        document.getElementById('start34').src="star2.png";
        document.getElementById('start35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star2.png";
        document.getElementById('start34').src="star2.png";
        document.getElementById('start35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star22.png";
        document.getElementById('start34').src="star2.png";
        document.getElementById('start35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star22.png";
        document.getElementById('start34').src="star23.png";
        document.getElementById('start35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start31').src="star21.png";
        document.getElementById('start32').src="star21.png";
        document.getElementById('start33').src="star22.png";
        document.getElementById('start34').src="star23.png";
        document.getElementById('start35').src="star23.png";
    }
}








let trauther24, c_value24, p_value24, s_value24;

trauther24 = JSON.parse(localStorage.getItem('trauther24'));

    document.querySelector('.trauther_4_h6').innerHTML = "  price :" + trauther24.price + " \n color :"  + trauther24.color   + " \n size :" + trauther24.size;
    document.querySelector('.trauther_4_h6').style = "font-size: 12px; font-weight: bold;";


function myfun24() {

    s_value24 = String(document.querySelector(".input_size2").value);
    c_value24 = String(document.querySelector(".input_color2").value);
    p_value24 = Number(document.querySelector(".input_price2").value);

    trauther24.price += p_value24;
    trauther24.color = c_value24;
    trauther24.size = s_value24;
    localStorage.setItem('trauther24', JSON.stringify(trauther24));

}

function myfun4t(num) {
    if (num === 1) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star2.png";
        document.getElementById('start43').src="star2.png";
        document.getElementById('start44').src="star2.png";
        document.getElementById('start45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star2.png";
        document.getElementById('start44').src="star2.png";
        document.getElementById('start45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star22.png";
        document.getElementById('start44').src="star2.png";
        document.getElementById('start45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star22.png";
        document.getElementById('start44').src="star23.png";
        document.getElementById('start45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start41').src="star21.png";
        document.getElementById('start42').src="star21.png";
        document.getElementById('start43').src="star22.png";
        document.getElementById('start44').src="star23.png";
        document.getElementById('start45').src="star23.png";
    }
}






let trauther25, c_value25, p_value25, s_value25;

trauther25 = JSON.parse(localStorage.getItem('trauther25'));

    document.querySelector('.trauther_5_h6').innerHTML = "  price :" + trauther25.price + " \n color :"  + trauther25.color   + " \n size :" + trauther25.size;
    document.querySelector('.trauther_5_h6').style = "font-size: 12px; font-weight: bold;";


function myfun25() {

    s_value25 = String(document.querySelector(".input_size2").value);
    c_value25 = String(document.querySelector(".input_color2").value);
    p_value25 = Number(document.querySelector(".input_price2").value);

    trauther25.price += p_value25;
    trauther25.color = c_value25;
    trauther25.size = s_value25;
    localStorage.setItem('trauther25', JSON.stringify(trauther25));

}
function myfun5t(num) {
    if (num === 1) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star2.png";
        document.getElementById('start53').src="star2.png";
        document.getElementById('start54').src="star2.png";
        document.getElementById('start55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star2.png";
        document.getElementById('start54').src="star2.png";
        document.getElementById('start55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star22.png";
        document.getElementById('start54').src="star2.png";
        document.getElementById('start55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star22.png";
        document.getElementById('start54').src="star23.png";
        document.getElementById('start55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start51').src="star21.png";
        document.getElementById('start52').src="star21.png";
        document.getElementById('start53').src="star22.png";
        document.getElementById('start54').src="star23.png";
        document.getElementById('start55').src="star23.png";
    }
}







let trauther27, c_value27, p_value27, s_value27;

trauther27 = JSON.parse(localStorage.getItem('trauther27'));

    document.querySelector('.trauther_7_h6').innerHTML = "  price :" + trauther27.price + " \n color :"  + trauther27.color   + " \n size :" + trauther27.size;
    document.querySelector('.trauther_7_h6').style = "font-size: 12px; font-weight: bold;";


function myfun27() {

    s_value27 = String(document.querySelector(".input_size2").value);
    c_value27 = String(document.querySelector(".input_color2").value);
    p_value27 = Number(document.querySelector(".input_price2").value);

    trauther27.price += p_value27;
    trauther27.color = c_value27;
    trauther27.size = s_value27;
    localStorage.setItem('trauther27', JSON.stringify(trauther27));

}
function myfun7t(num) {
    if (num === 1) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star2.png";
        document.getElementById('start73').src="star2.png";
        document.getElementById('start74').src="star2.png";
        document.getElementById('start75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star2.png";
        document.getElementById('start74').src="star2.png";
        document.getElementById('start75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star22.png";
        document.getElementById('start74').src="star2.png";
        document.getElementById('start75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star22.png";
        document.getElementById('start74').src="star23.png";
        document.getElementById('start75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start71').src="star21.png";
        document.getElementById('start72').src="star21.png";
        document.getElementById('start73').src="star22.png";
        document.getElementById('start74').src="star23.png";
        document.getElementById('start75').src="star23.png";
    }
}





let trauther28, c_value28, p_value28, s_value28;

trauther28 = JSON.parse(localStorage.getItem('trauther28'));

    
    document.querySelector('.trauther_8_h6').innerHTML = "  price :" + trauther28.price + " \n color :"  + trauther28.color   + " \n size :" + trauther28.size;
    document.querySelector('.trauther_8_h6').style = "font-size: 12px; font-weight: bold;";


function myfun28() {

    s_value28 = String(document.querySelector(".input_size2").value);
    c_value28 = String(document.querySelector(".input_color2").value);
    p_value28 = Number(document.querySelector(".input_price2").value);

    trauther28.price += p_value28;
    trauther28.color = c_value28;
    trauther28.size = s_value28;
    localStorage.setItem('trauther28', JSON.stringify(trauther28));

}

function myfun8t(num) {
    if (num === 1) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star2.png";
        document.getElementById('start83').src="star2.png";
        document.getElementById('start84').src="star2.png";
        document.getElementById('start85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star2.png";
        document.getElementById('start84').src="star2.png";
        document.getElementById('start85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star22.png";
        document.getElementById('start84').src="star2.png";
        document.getElementById('start85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star22.png";
        document.getElementById('start84').src="star23.png";
        document.getElementById('start85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start81').src="star21.png";
        document.getElementById('start82').src="star21.png";
        document.getElementById('start83').src="star22.png";
        document.getElementById('start84').src="star23.png";
        document.getElementById('start85').src="star23.png";
    }
}






let trauther29, c_value29, p_value29, s_value29;

trauther29 =JSON.parse(localStorage.getItem('trauther29'));

    document.querySelector('.trauther_9_h6').innerHTML = "  price :" + trauther29.price + " \n color :"  + trauther29.color   + " \n size :" + trauther29.size;
    document.querySelector('.trauther_9_h6').style = "font-size: 12px; font-weight: bold;";


function myfun29() {

    s_value29 = String(document.querySelector(".input_size2").value);
    c_value29 = String(document.querySelector(".input_color2").value);
    p_value29 = Number(document.querySelector(".input_price2").value);

    trauther29.price += p_value29;
    trauther29.color = c_value29;
    trauther29.size = s_value29;
    localStorage.setItem('trauther29', JSON.stringify(trauther29));

}
function myfun9t(num) {
    if (num === 1) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star2.png";
        document.getElementById('start93').src="star2.png";
        document.getElementById('start94').src="star2.png";
        document.getElementById('start95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star2.png";
        document.getElementById('start94').src="star2.png";
        document.getElementById('start95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star22.png";
        document.getElementById('start94').src="star2.png";
        document.getElementById('start95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star22.png";
        document.getElementById('start94').src="star23.png";
        document.getElementById('start95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start91').src="star21.png";
        document.getElementById('start92').src="star21.png";
        document.getElementById('start93').src="star22.png";
        document.getElementById('start94').src="star23.png";
        document.getElementById('start95').src="star23.png";
    }
}







let trauther210, c_value210, p_value210, s_value210;

trauther210 = JSON.parse(localStorage.getItem('trauther210'));


    document.querySelector('.trauther_10_h6').innerHTML = "  price :" + trauther210.price + " \n color :"  + trauther210.color   + " \n size :" + trauther210.size;
    document.querySelector('.trauther_10_h6').style = "font-size: 12px; font-weight: bold;";


function myfun210() {

    s_value210 = String(document.querySelector('.input_size2').value);
    c_value210 = String(document.querySelector('.input_color2').value);
    p_value210 = Number(document.querySelector('.input_price2').value);

    trauther210.price += p_value210;
    trauther210.color = c_value210;
    trauther210.size = s_value210;
    localStorage.setItem('trauther210', JSON.stringify(trauther210));

}

function myfun10t(num) {
    if (num === 1) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star2.png";
        document.getElementById('start103').src="star2.png";
        document.getElementById('start104').src="star2.png";
        document.getElementById('start105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star2.png";
        document.getElementById('start104').src="star2.png";
        document.getElementById('start105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star22.png";
        document.getElementById('start104').src="star2.png";
        document.getElementById('start105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star22.png";
        document.getElementById('start104').src="star23.png";
        document.getElementById('start105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('start101').src="star21.png";
        document.getElementById('start102').src="star21.png";
        document.getElementById('start103').src="star22.png";
        document.getElementById('start104').src="star23.png";
        document.getElementById('start105').src="star23.png";
    }
}















/* the following 8 are for the dress only*/


let dress42, c_value42, p_value42,s_value42;

dress42 = JSON.parse(localStorage.getItem('dress42'));


    document.querySelector('.dress_2_h6').innerHTML = "  price :" + dress42.price + " \n color :"  + dress42.color   + " \n size :" + dress42.size;
    document.querySelector('.dress_2_h6').style = "font-size: 12px; font-weight: bold;";


function myfun42() {

    s_value42 = String(document.querySelector(".input_size4").value);
    c_value42 = String(document.querySelector(".input_color4").value);
    p_value42 = Number(document.querySelector(".input_price4").value);

    dress42.price += p_value42;
    dress42.color = c_value42;
    dress42.size = s_value42;
    localStorage.setItem('dress42', JSON.stringify(dress42));

}

function myfun2d(num) {
    if (num === 1) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star2.png";
        document.getElementById('stard23').src="star2.png";
        document.getElementById('stard24').src="star2.png";
        document.getElementById('stard25').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star2.png";
        document.getElementById('stard24').src="star2.png";
        document.getElementById('stard25').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star22.png";
        document.getElementById('stard24').src="star2.png";
        document.getElementById('stard25').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star22.png";
        document.getElementById('stard24').src="star23.png";
        document.getElementById('stard25').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard21').src="star21.png";
        document.getElementById('stard22').src="star21.png";
        document.getElementById('stard23').src="star22.png";
        document.getElementById('stard24').src="star23.png";
        document.getElementById('stard25').src="star23.png";
    }
}



 
   
let dress43, c_value43, p_value43, s_value43;

dress43 = JSON.parse(localStorage.getItem('dress43'));


    document.querySelector('.dress_3_h6').innerHTML = "  price :" + dress43.price + " \n color :"  + dress43.color   + " \n size :" + dress43.size;
    document.querySelector('.dress_3_h6').style = "font-size: 12px; font-weight: bold;";


function myfun43() {

    s_value43 += String(document.querySelector(".input_size4").value);
    c_value43 = String(document.querySelector(".input_color4").value);
    p_value43 = Number(document.querySelector(".input_price4").value);

    dress43.price += p_value43;
    dress43.color = c_value43;
    dress43.size = s_value43;
    localStorage.setItem('dress43', JSON.stringify(dress43));

}

function myfun3d(num) {
    if (num === 1) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star2.png";
        document.getElementById('stard33').src="star2.png";
        document.getElementById('stard34').src="star2.png";
        document.getElementById('stard35').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star2.png";
        document.getElementById('stard34').src="star2.png";
        document.getElementById('stard35').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star22.png";
        document.getElementById('stard34').src="star2.png";
        document.getElementById('stard35').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star22.png";
        document.getElementById('stard34').src="star23.png";
        document.getElementById('stard35').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard31').src="star21.png";
        document.getElementById('stard32').src="star21.png";
        document.getElementById('stard33').src="star22.png";
        document.getElementById('stard34').src="star23.png";
        document.getElementById('stard35').src="star23.png";
    }
}







let dress44, c_value44, p_value44, s_value44;

dress44 = JSON.parse(localStorage.getItem('dress44'));


    document.querySelector('.dress_4_h6').innerHTML = "  price :" + dress44.price + " \n color :"  + dress44.color   + " \n size :" + dress44.size;
    document.querySelector('.dress_4_h6').style = "font-size: 12px; font-weight: bold;";


function myfun44() {

    s_value44 = String(document.querySelector(".input_size4").value);
    c_value44 = String(document.querySelector(".input_color4").value);
    p_value44 = Number(document.querySelector(".input_price4").value);

    dress44.price += p_value44;
    dress44.color = c_value44;
    dress44.size = s_value44;
    localStorage.setItem('dress44', JSON.stringify(dress44));

}

function myfun4d(num) {
    if (num === 1) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star2.png";
        document.getElementById('stard43').src="star2.png";
        document.getElementById('stard44').src="star2.png";
        document.getElementById('stard45').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star2.png";
        document.getElementById('stard44').src="star2.png";
        document.getElementById('stard45').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star22.png";
        document.getElementById('stard44').src="star2.png";
        document.getElementById('stard45').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star22.png";
        document.getElementById('stard44').src="star23.png";
        document.getElementById('stard45').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard41').src="star21.png";
        document.getElementById('stard42').src="star21.png";
        document.getElementById('stard43').src="star22.png";
        document.getElementById('stard44').src="star23.png";
        document.getElementById('stard45').src="star23.png";
    }
}







let dress45, c_value45, p_value45, s_value45;

dress45 = JSON.parse(localStorage.getItem('dress45'));


    document.querySelector('.dress_5_h6').innerHTML = "  price :" + dress45.price + " \n color :"  + dress45.color   + " \n size :" + dress45.size;
    document.querySelector('.dress_5_h6').style = "font-size: 12px; font-weight: bold;";


function myfun45() {

    s_value45 = String(document.querySelector(".input_size4").value);
    c_value45 = String(document.querySelector(".input_color4").value);
    p_value45 = Number(document.querySelector(".input_price4").value);

    dress45.price += p_value45;
    dress45.color = c_value45;
    dress45.size = s_value45;
    localStorage.setItem('dress45', JSON.stringify(dress45));

}

function myfun5d(num) {
    if (num === 1) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star2.png";
        document.getElementById('stard53').src="star2.png";
        document.getElementById('stard54').src="star2.png";
        document.getElementById('stard55').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star2.png";
        document.getElementById('stard54').src="star2.png";
        document.getElementById('stard55').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star22.png";
        document.getElementById('stard54').src="star2.png";
        document.getElementById('stard55').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star22.png";
        document.getElementById('stard54').src="star23.png";
        document.getElementById('stard55').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard51').src="star21.png";
        document.getElementById('stard52').src="star21.png";
        document.getElementById('stard53').src="star22.png";
        document.getElementById('stard54').src="star23.png";
        document.getElementById('stard55').src="star23.png";
    }
}







let dress47, c_value47, p_value47, s_value47;

dress47 = JSON.parse(localStorage.getItem('dress47'));


    document.querySelector('.dress_7_h6').innerHTML = "  price :" + dress47.price + " \n color :"  + dress47.color   + " \n size :" + dress47.size;
    document.querySelector('.dress_7_h6').style = "font-size: 12px; font-weight: bold;";


function myfun47() {

    s_value47 = String(document.querySelector(".input_size4").value);
    c_value47 = String(document.querySelector(".input_color4").value);
    p_value47 = Number(document.querySelector(".input_price4").value);

    dress47.price += p_value47;
    dress47.color = c_value47;
    dress47.size = s_value47;
    localStorage.setItem('dress47', JSON.stringify(dress47));

}

function myfun7d(num) {
    if (num === 1) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star2.png";
        document.getElementById('stard73').src="star2.png";
        document.getElementById('stard74').src="star2.png";
        document.getElementById('stard75').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star2.png";
        document.getElementById('stard74').src="star2.png";
        document.getElementById('stard75').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star22.png";
        document.getElementById('stard74').src="star2.png";
        document.getElementById('stard75').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star22.png";
        document.getElementById('stard74').src="star23.png";
        document.getElementById('stard75').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard71').src="star21.png";
        document.getElementById('stard72').src="star21.png";
        document.getElementById('stard73').src="star22.png";
        document.getElementById('stard74').src="star23.png";
        document.getElementById('stard75').src="star23.png";
    }
}






let dress48, c_value48, p_value48, s_value48;

dress48 = JSON.parse(localStorage.getItem('dress48'));


    document.querySelector('.dress_8_h6').innerHTML = "  price :" + dress48.price + " \n color :"  + dress48.color   + " \n size :" + dress48.size;
    document.querySelector('.dress_8_h6').style = "font-size: 12px; font-weight: bold;";


function myfun48() {

    s_value48 = String(document.querySelector(".input_size4").value);
    c_value48 = String(document.querySelector(".input_color4").value);
    p_value48 = Number(document.querySelector(".input_price4").value);

    dress48.price += p_value48;
    dress48.color = c_value48;
    dress48.size = s_value48;
    localStorage.setItem('dress48', JSON.stringify(dress48));

}

function myfun8d(num) {
    if (num === 1) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star2.png";
        document.getElementById('stard83').src="star2.png";
        document.getElementById('stard84').src="star2.png";
        document.getElementById('stard85').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star2.png";
        document.getElementById('stard84').src="star2.png";
        document.getElementById('stard85').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star22.png";
        document.getElementById('stard84').src="star2.png";
        document.getElementById('stard85').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star22.png";
        document.getElementById('stard84').src="star23.png";
        document.getElementById('stard85').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard81').src="star21.png";
        document.getElementById('stard82').src="star21.png";
        document.getElementById('stard83').src="star22.png";
        document.getElementById('stard84').src="star23.png";
        document.getElementById('stard85').src="star23.png";
    }
}







let dress49, c_value49, p_value49, s_value49;

dress49 = JSON.parse(localStorage.getItem('dress49'));


    document.querySelector('.dress_9_h6').innerHTML = "  price :" + dress49.price + " \n color :"  + dress49.color   + " \n size :" + dress49.size;
    document.querySelector('.dress_9_h6').style = "font-size: 12px; font-weight: bold;";


function myfun49() {

    s_value49 = String(document.querySelector(".input_size4").value);
    c_value49 = String(document.querySelector(".input_color4").value);
    p_value49 = Number(document.querySelector(".input_price4").value);

    dress49.price += p_value49;
    dress49.color = c_value49;
    dress49.size = s_value49;
    localStorage.setItem('dress49', JSON.stringify(dress49));

}
function myfun9d(num) {
    if (num === 1) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star2.png";
        document.getElementById('stard93').src="star2.png";
        document.getElementById('stard94').src="star2.png";
        document.getElementById('stard95').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star2.png";
        document.getElementById('stard94').src="star2.png";
        document.getElementById('stard95').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star22.png";
        document.getElementById('stard94').src="star2.png";
        document.getElementById('stard95').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star22.png";
        document.getElementById('stard94').src="star23.png";
        document.getElementById('stard95').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard91').src="star21.png";
        document.getElementById('stard92').src="star21.png";
        document.getElementById('stard93').src="star22.png";
        document.getElementById('stard94').src="star23.png";
        document.getElementById('stard95').src="star23.png";
    }
}







let dress410, c_value410, p_value410, s_value410;

dress410 = JSON.parse(localStorage.getItem('dress410'));


    document.querySelector('.dress_10_h6').innerHTML = "  price :" + dress410.price + " \n color :"  + dress410.color   + " \n size :" + dress410.size;
    document.querySelector('.dress_10_h6').style = "font-size: 12px; font-weight: bold;";


function myfun410() {

    s_value410 = String(document.querySelector(".input_size4").value);
    c_value410 = String(document.querySelector(".input_color4").value);
    p_value410 = Number(document.querySelector(".input_price4").value);

    dress410.price = p_value410;
    dress410.color = c_value410;
    dress410.size = s_value410;

    localStorage.setItem('dress410', JSON.stringify(dress410));

}
function myfun10d(num) {
    if (num === 1) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star2.png";
        document.getElementById('stard103').src="star2.png";
        document.getElementById('stard104').src="star2.png";
        document.getElementById('stard105').src="star2.png";
    } else if (num === 2) {
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star2.png";
        document.getElementById('stard104').src="star2.png";
        document.getElementById('stard105').src="star2.png";
    } else if (num === 3) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star22.png";
        document.getElementById('stard104').src="star2.png";
        document.getElementById('stard105').src="star2.png";
    } else if (num === 4) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star22.png";
        document.getElementById('stard104').src="star23.png";
        document.getElementById('stard105').src="star2.png";
    }  else if (num === 5) {
        document.getElementById('stard101').src="star21.png";
        document.getElementById('stard102').src="star21.png";
        document.getElementById('stard103').src="star22.png";
        document.getElementById('stard104').src="star23.png";
        document.getElementById('stard105').src="star23.png";
    }
}








