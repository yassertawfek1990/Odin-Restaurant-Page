export const contact = function(){
    const main = document.createElement('div');
    main.setAttribute("class","HomeMain")
    
    const heading = document.createElement('h1');
    heading.textContent = 'Hello';
    main.appendChild(heading);
    
    const sub = document.createElement('h1');
    sub.setAttribute("class","mainHeader")
    sub.textContent = "Beary's"
    
    main.appendChild(sub);
    
    const div1 = document.createElement('div');
    div1.setAttribute("id","goldi")
    const div1p = document.createElement('p');
    div1p.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    const div1H = document.createElement('h3');
    div1H.textContent = "Goldilocks"
    div1.appendChild(div1p);
    div1.appendChild(div1H);
    
    const div2 = document.createElement('div');
    div2.setAttribute("id","hours")
    const div2H = document.createElement('h3');
    div2H.textContent = "Hours"
    const div2p = document.createElement('p');
    div2p.innerHTML = `
    Sunday: 8am - 8pm<br>
    Monday: 6am - 6pm<br>
    Tuesday: 6am - 6pm<br>
    Wednesday: 6am - 6pm<br>
    Thursday: 6am - 10pm<br>
    Friday: 6am - 10pm<br>
    Saturday: 8am - 10pm
    `;
    div2.appendChild(div2H);
    div2.appendChild(div2p);
    const div3 = document.createElement('div');
    div3.setAttribute("id","location")
    const div3H = document.createElement('h3');
    div3H.textContent = "Location"
    const div3p = document.createElement('p');
    div3p.textContent = "123 Forest Drive, Forestville, Maine"
    div3.appendChild(div3H);
    div3.appendChild(div3p);
    
    main.appendChild(div1)
    main.appendChild(div2)
    main.appendChild(div3)
    document.body.appendChild(main);
    
    }