let element = document.getElementById('phone');
    let maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: true
        } 
     let mask = new IMask(element, maskOptions);