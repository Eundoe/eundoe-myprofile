import $ from 'jquery'
import SlogunData from '../static/data/slogun.json'
import SkillData from '../static/data/skill.json'
import PortData from '../static/data/portfolio.json'
import TransData from '../static/data/lang.json'
import i18next from "i18next";

// translate data 
let gallmove = $('#gall>li').width()
let slogunData = SlogunData
let start = 1
let finish = slogunData.length
let language = 'ko'


$(window).on('resize',function(e){
  this.location.reload()
  if (e.target.outerWidth <= 979){
    $('div#headwrap').css('display','none')
  }
  else{
    $('div#headwrap').css('display','block')
  }
})

$('p.mainmenu>span').on('click',function(){
  $('div#headwrap').fadeIn(350)
})
$('p.mainclose>span').on('click',function(e){
  $('div#headwrap').fadeOut(350)
})




function VhControl(){
  let headerH = document.querySelector('header').clientHeight
  if (window.outerWidth >= 980){
    headerH = 0
  }
  else{
    headerH = document.querySelector('header').clientHeight
  }
  let art2 = document.querySelector('div#aboutwrap')
  let ar2cont = document.querySelector('div#aboutwrap>figure')
  let ar2h = document.querySelector('div#aboutwrap>h2')
  
  art2.style.padding = `
    calc(50vh - ${ar2cont.clientHeight/2 + ar2h.clientHeight - headerH/2}px) 0  calc(50vh - ${ar2cont.clientHeight/2}px)
  ` 


let art3 = document.querySelector('div#skillwrap')
let ar3cont1 = document.querySelector('div#skilllist') 
let ar3cont2 = document.querySelector('div#skillhover') 
let ar3h = document.querySelector('div#skillwrap>h2')

art3.style.padding = `
  calc(40vh - ${ar3cont1.clientHeight + ar3cont2.clientHeight + ar3h.clientHeight - headerH/2}px) 0  calc(50vh - ${ar3cont1.clientHeight + ar3cont2.clientHeight }px)
`

let art4 = document.querySelector('div#portwrap')
let ar4cont = document.querySelector('div#portshow')
let ar4h = document.querySelector('div#portwrap>h2')
art4.style.padding = `
  calc(50vh - ${ar4cont.clientHeight/2 + ar4h.clientHeight - headerH/2 }px) 0 calc(50vh - ${ar4cont.clientHeight/2}px)
`

let art5 = document.querySelector('div#contactwrap')
let ar5cont = document.querySelector('div#contactin')
let ar5h = document.querySelector('div#contactwrap>h2')
art5.style.padding = `
   ${headerH + ar5h.clientHeight + 20}px 0 calc(50vh - ${ar5cont.clientHeight/2}px)
`

}

// translate data
i18next.init({
  lng : 'ko',
  resources : {
    ko : {
      translation  : {
       slogun : {
        slogun1 : TransData.ko.slogun[0],
        slogun2 : TransData.ko.slogun[1],
        slogun3 : TransData.ko.slogun[2],
        slogun4 : TransData.ko.slogun[3],
       },
       desc : {
        desc1 : TransData.ko.desc[0],
        desc2 : TransData.ko.desc[1],
        desc3 : TransData.ko.desc[2]
       },
       privM : {
        name : TransData.ko.privm.name,
        birth : TransData.ko.privm.birth,
        major : TransData.ko.privm.major,
        habit : TransData.ko.privm.habit
       },
       privD : {
        name : TransData.ko.privd.name,
        birth : TransData.ko.privd.birth,
        major  : TransData.ko.privd.major,
        habit : TransData.ko.privd.habit,
        creed : TransData.ko.privd.creed
       }
      }
    },
    ja : {
      translation  : {
        slogun : {
         slogun1 : TransData.ja.slogun[0],
         slogun2 : TransData.ja.slogun[1],
         slogun3 : TransData.ja.slogun[2],
         slogun4 : TransData.ja.slogun[3],
        },
        desc : {
         desc1 : TransData.ja.desc[0],
         desc2 : TransData.ja.desc[1],
         desc3 : TransData.ja.desc[2]
        },
        privM : {
         name : TransData.ja.privm.name,
         birth : TransData.ja.privm.birth,
         major : TransData.ja.privm.major,
         habit : TransData.ja.privm.habit
        },
        privD : {
         name : TransData.ja.privd.name,
         birth : TransData.ja.privd.birth,
         major  : TransData.ja.privd.major,
         habit : TransData.ja.privd.habit,
         creed : TransData.ja.privd.creed
        }
       }
    },
    en : {
      translation  : {
        slogun : {
         slogun1 : TransData.en.slogun[0],
         slogun2 : TransData.en.slogun[1],
         slogun3 : TransData.en.slogun[2],
         slogun4 : TransData.en.slogun[3],
        },
        desc : {
         desc1 : TransData.en.desc[0],
         desc2 : TransData.en.desc[1],
         desc3 : TransData.en.desc[2]
        },
        privM : {
         name : TransData.en.privm.name,
         birth : TransData.en.privm.birth,
         major : TransData.en.privm.major,
         habit : TransData.en.privm.habit
        },
        privD : {
         name : TransData.en.privd.name,
         birth : TransData.en.privd.birth,
         major  : TransData.en.privd.major,
         habit : TransData.en.privd.habit,
         creed : TransData.en.privd.creed
        }
       }
    }
  }
})




$('ul#lang>li').on('click',function(e){
  $('ul#lang>li').removeClass('langselect')
  let lngopt = e.target.getAttribute('type-value')
  $(e.target).addClass('langselect')
  language = lngopt
  document.querySelector('#gall>li').innerHTML = `
<p>
  ${i18next.t(`slogun.slogun${start}`, {lng: language})}
</p>`
  TData()

})

// mainnavigation


let logo = document.querySelector('h1>a')
logo.addEventListener('click',function(e){
  let base = document.querySelector('#slogun').offsetTop
  window.scroll({
    top: base,
    behavior : 'smooth'
  })
  e.preventDefault()
})


let mainnav = document.querySelectorAll('#mainnav>li>a')
mainnav.forEach((item,index) => {
  let check = item.getAttribute('href');
  item.addEventListener('click',function(e){
    let Yside = document.querySelector(check).offsetTop
    window.scroll({
      top: Yside,
      behavior : 'smooth'
    })
    if (window.outerWidth < 980){
    $('div#headwrap').fadeOut(500)
    }
    e.preventDefault()
  })
})

// slogun



document.querySelector('#gall>li').innerHTML = `
<p>
  ${i18next.t(`slogun.slogun1`, {lng: language})}
</p>`

$('p.next>span').on('click',function(){
  start += 1
  if (start >  finish){
    start = 1
  }
  let newLi = document.createElement('li')
  newLi.innerHTML = `<p>
  ${i18next.t(`slogun.slogun${start}`, {lng: language})}</p>`
  $('#gall').append(newLi)
  $('#gall>li:last').css('background', 'url(./image/slogun/back' + start + '.png) no-repeat center/cover')
  $('#gall').stop().animate({marginLeft : '-=' + gallmove + 'px'}, 400, function(){
    $('#gall>li:not(:last)').remove();
    $('#gall').css('margin-left', '0')
  })
})


$('p.prev>span').on('click',function(){
  start -= 1
  if(start <= 0){
    start = finish
  }
  let newLi = document.createElement('li')
  newLi.innerHTML = `<p>
  ${i18next.t(`slogun.slogun${start}`, {lng: language})}</p>`
  $('#gall').css('margin-left', '-' + gallmove + 'px').prepend(newLi);
  $('#gall>li:first').css('background', 'url(./image/slogun/back' + start + '.png) no-repeat center/cover')
  $('#gall').stop().animate({marginLeft : '+=' + gallmove + 'px'}, 400, function(){
    $('#gall>li:not(:first)').remove();
    $('#gall').css('margin-left', '0')
  })
})

// Private Data 
TData()
function TData(){
document.querySelector('p.creed').innerHTML = i18next.t(`privD.creed`, {lng: language})
document.querySelector('dl#name>dt').innerHTML = `<span class="material-symbols-outlined">badge</span>${i18next.t(`privM.name`, {lng: language})}`
document.querySelector('dl#name>dd').innerHTML = i18next.t(`privD.name`, {lng: language})
document.querySelector('dl#birth>dt').innerHTML = `<span class="material-symbols-outlined">cake</span>${i18next.t(`privM.birth`, {lng: language})}`
document.querySelector('dl#birth>dd').innerHTML = i18next.t(`privD.birth`, {lng: language})
document.querySelector('dl#habit>dt').innerHTML = `<span class="material-symbols-outlined">handyman</span>${i18next.t(`privM.habit`, {lng: language})}`
document.querySelector('dl#habit>dd').innerHTML = i18next.t(`privD.habit`, {lng: language})
document.querySelector('dl#major>dt').innerHTML = `<span class="material-symbols-outlined">handyman</span>${i18next.t(`privM.major`, {lng: language})}`
document.querySelector('dl#major>dd').innerHTML = i18next.t(`privD.major`, {lng: language})
}





// skill
let skillData = SkillData
for(let i = 1; i <= skillData.length; i++){
 let data = skillData[i - 1]
 let newS = document.createElement('li')
 let newI = document.createElement('img')
 newI.setAttribute('src', data.path)
 newI.setAttribute('alt', data.name)
 newI.style.cursor = 'pointer'
 newS.append(newI)
 newI.addEventListener('click',function(e){
  let name = document.querySelector('#skillhover>dl>dt')
  let percent = document.querySelector('#skillhover>dl>dd')
  let pergage = document.querySelector('#skillhover>p')
  name.textContent = data.name
  percent.textContent = 'Master Level ' + data.master + '%' 
  pergage.style.backgroundSize = `${data.master}% 100%`

  $('div#skillhover').slideDown(350)
 })

 $('#skilllist>ul').append(newS)
}

$('span.skillclose').on('click',function(){
  $('div#skillhover').slideUp(350)
})


// portfolio

for (let i = 0; i < PortData.length; i++){
let portShow = document.querySelector('div#portshow')
let portCont = document.createElement('figure')

portCont.innerHTML = `
<p><img src=${PortData[i].img} alt=${PortData[i].pjname}></p>
          <figcaption>
            <h3>${PortData[i].pjname}</h3>
              <dl id="date">
                <dt><span class="material-symbols-outlined">
                  date_range
                  </span>Period</dt>
                <dd>${PortData[i].period}</dd>
              </dl>
              <dl id="devlang">
                <dt><span class="material-symbols-outlined">
                  subtitles
                  </span>Devtool</dt>
                <dd>${PortData[i].lang}</dd>
              </dl>
              <dl id="deploy">
                <dt><span class="material-symbols-outlined">
                  link
                  </span>Domain</dt>
                <dd><a href=${PortData[i].path} target ="_blank" >Go Site</a></dd>
              </dl>
            <p class="modalbtn"><a href="#" type-value = ${PortData[i].id} >Detail</a></p>
          </figcaption>
`
portShow.append(portCont)
}





$('p.modalbtn>a').on('click',function(e){
  let index = Number($(e.target).attr('type-value'))
  let ModalData = PortData[index]
  console.log(ModalData)
  
  document.querySelector('div#modalbox>h2').innerHTML = ModalData.pjname
  document.querySelector('div#mwrap>p>img').setAttribute('src', ModalData.img)
  document.querySelector('div#mwrap>p>img').setAttribute('alt', ModalData.pjname)
  document.querySelector('dl#mdate>dd').innerHTML = ModalData.period
  document.querySelector('dl#mlang>dd').innerHTML = ModalData.lang
  document.querySelector('dl#mdeploy>dd').innerHTML = `
    <a href=${ModalData.path} target = "_blank">Go Now</a>
  `
  document.querySelector('dl#mgit>dd').innerHTML = `
    <a href=${ModalData.giturl} target = "_blank">Click Here!</a>
  `
  document.querySelector('div#mdesc>dl>dd').textContent = i18next.t(`desc.desc${index + 1}`, {lng: language})


  $('div#portmodal').fadeIn(350)
  return false
})

$('.modalclose>span').on('click',function(){
  $('div#portmodal').fadeOut(350)
})

$('form#format>fieldset>button').on('click',function(e){
  window.alert('아직 준비중입니다.')
  e.preventDefault()
})


VhControl()