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

const AmountBtn = ({ amount, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`button secondary ${isActive ? 'active' : ''}`}>
    ${amount}
  </button>
)

const CustomAmtInput = ({ onChange, value }) => (
  <div className='custom-amount expanded'>
    <input onChange={onChange} value={value} placeholder='40' type='number' min='0' />
  </div>
)

class DonationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: [ 10, 20, 50, 100 ],
      amount: null,
      showCustom: false
    };
    this.onAmountSelect = (amount) => ( this.setState({amount: amount}) )
    this.onCustomAmtChange = (evt) => ( this.setState({amount: parseInt(evt.target.value)}) )
    this.isActive = (amount) => ( amount === this.state.amount )
    this.showCustom = () => ( this.setState({showCustom: true}) )
    this.onPledgeClick = this.onPledgeClick.bind(this)
  }
  onPledgeClick() {
    const amt = parseInt(this.state.amount)
    if(amt && amt > 5) {
      alert(`yay! pledged: ${amt}`)
    } else {
      alert(`nahhhhh. pledged: ${amt}`)
    }
  }
  render() {
    return (
      <div>
        <div className='amounts button-group expanded stacked-small'>
          {this.state.amounts.map(amt =>
            <AmountBtn
              key={`amt-${amt}`}
              isActive={this.isActive(amt)}
              amount={amt}
              onClick={this.onAmountSelect.bind(this, amt)}/>
          )}
          { !this.state.showCustom &&
            <button className='button secondary' onClick={this.showCustom}>CUSTOM</button> }
        </div>
        { this.state.showCustom &&
          <CustomAmtInput onChange={this.onCustomAmtChange} value={this.state.amount} /> }
        <div className='center-elements'>
          <button className='button large cta' onClick={this.onPledgeClick}>Pledge</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <DonationBox />,
  document.getElementById('donation-box')
);

