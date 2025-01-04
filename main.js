let container = document.querySelector('form');

container.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;
    let userGender = document.getElementById("gender").value;
    let order1 = document.getElementById("rd1");
    let order2 = document.getElementById("rd2");
    let order3 = document.getElementById("rd3");

    // if(order1.checked == true){
    //     document.getElementById("box").innerHTML = `Your name : ${userName}
    //     Your age :${userAge}years
    //     your gender:  ${userGender}
    //     your order : ${order1.value}`;
    // }else if(order2.checked == true){
    //     document.getElementById("box").innerHTML = `Your name : ${userName}
    //     Your age :${userAge}years
    //     your gender:  ${userGender}
    //     your order : ${order2.value}`;
    // }else if (order3.checked == true){
    //     document.getElementById("box").innerHTML = `Your name : ${userName}
    //     Your age :${userAge}years
    //     your gender:  ${userGender}
    //     your order : ${order3.value}`;
    // }else{
    //     document.getElementById("box").innerHTML = `Your name : ${userName}
    //     Your age :${userAge}years
    //     your gender:  ${userGender}`;
    // }

    let arrayData = [];
    if(order1.checked == true){
        arrayData.push(userName,userAge,userGender,order1.value) ;
        //return arrayData;    
    }else if(order2.checked == true){
        arrayData.push(userName,userAge,userGender,order2.value) ;
       //return arrayData;
    }else if (order3.checked == true){
        arrayData.push(userName,userAge,userGender,order3.value) ;
       // return arrayData;
    }else{
        arrayData.push(userName,userAge,userGender) ;
       // return arrayData;
    }  


    let box = document.getElementById("box");
    let orderdList = document.createElement('ol');
    box.appendChild(orderdList);
    let list = document.createElement('li');
    orderdList.appendChild(list);

    list.textContent += `Your name : ${arrayData[0]}
         -Your age :${arrayData[1]}years
         -your gender:  ${arrayData[2]}
         -your order : ${arrayData[3]}`;

    // for(i=0;i<arrayData.length;i++){
    //     let list = document.createElement('li');
    //     orderdList.appendChild(list);
    //     list.textContent+=arrayData[i];

    // }

    
})