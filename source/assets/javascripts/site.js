$(document).ready(() => {
  $(".typed").typed({
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
  });
});


class DonationBox extends React.Component {
  render() {
    return (
      <div className='donation-box'>
      </div>
    );
  }
}

ReactDOM.render(
  <DonationBox />,
  document.getElementById('donation-box')
);
