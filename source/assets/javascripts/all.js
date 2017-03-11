import '../stylesheets/all.scss'
import Foundation from 'foundation-sites'
import React from 'react'
import ReactDOM from 'react-dom'
import DonationBox from './DonationBox'

const setupEmailModalListners = () => {
  $('#email-modal .close-button').on('click', () => {
    $('body').removeClass('is-reveal-open')
  })

  $('form#mc-embedded-subscribe-form').on('submit', () => {
    $('#email-modal').foundation('close')
  })
}

const initTyped = () => (
  $('.typed').typed({
    stringsElement: $('.typed-words'),
    typeSpeed: 85,
    // time before typing starts
    startDelay: 60,
    // backspacing speed
    backSpeed: 10,
    // time before backspacing
    backDelay: 1500,
    cursorChar: '|',
    // loop: true,
    // callback: () => {
    //   window.setTimeout(() => {
    //     $('.typed-cursor').hide();
    //   }, 1000);
    // }
  })
)

$(document).ready(() => {
  $(document).foundation()
  setupEmailModalListners()
  initTyped()
})

const donationBoxElems = document.getElementsByClassName('donation-box')
for (var i = 0; i < donationBoxElems.length; i++) {
  ReactDOM.render(<DonationBox />, donationBoxElems[i])
}

