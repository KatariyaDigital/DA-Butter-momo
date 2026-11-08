let order=[];
function addToOrder(item){order.push(item);document.getElementById('cart-count').innerText=order.length+' items';document.getElementById('cart').style.display='flex';alert(item+' added! Neeche WhatsApp button se order karo.');}
function showMenu(id,btn){document.querySelectorAll('.menu-grid').forEach(e=>e.classList.add('hidden'));document.getElementById('menu-'+id).classList.remove('hidden');document.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));btn.classList.add('active');}
function checkout(){if(order.length===0){alert('Pehle menu se kuch add karo');return;}let msg='Hi D&A Butter Momos! I want to order:\n\n'+order.join('\n')+'\n\nName:\nAddress:';window.open('https://wa.me/919205097243?text='+encodeURIComponent(msg),'_blank');}
