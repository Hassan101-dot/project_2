item=document.getElementById('iconmobile')
showid=document.getElementById('spacemobile')

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkScreenSize() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 930) {
        showid.style.height = '0px';
    }
}


window.addEventListener('resize', checkScreenSize);

async function show(){
    
        
    if(showid.style.height=='0px'){
        for (let i=0;i<320;i+=5){
            showid.style.height=`${i}px`
            await delay(0.01)
        }
        
        }
    else{
       for(let i=320;i>=0;i-=5){
        showid.style.height=`${i}px`
        await delay(0.01)
        }
        
    }
}
item.addEventListener('click',show)

box = document.getElementById('title2')
linex = document.getElementById('line2')

function linez(){
    linex.style.width= '60%'
}

function lineq(){
    linex.style.width = '40%'
}

box.addEventListener('mouseover' , linez)
box.addEventListener('mouseout' , lineq)