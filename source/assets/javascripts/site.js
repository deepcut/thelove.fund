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

class DonationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: null
    };
    this.onAmountSelect = this.onAmountSelect.bind(this)
    this.onPledgeClick = this.onPledgeClick.bind(this)
    this.isActive = this.isActive.bind(this)
  }
  onAmountSelect(amount) {
    this.setState({selectedAmount: amount})
  }
  onPledgeClick() {
    console.log("Pledged: ", this.state.selectedAmount)
  }
  isActive(amount) {
    return amount === this.state.selectedAmount
  }
  render() {
    return (
      <div>
        <div className='amounts button-group expanded stacked-small'>
          {this.props.amounts.map(amt =>
            <AmountBtn
              key={`amt-${amt}`}
              isActive={this.isActive(amt)}
              amount={amt}
              onClick={this.onAmountSelect.bind(this, amt)}/>
          )}
        </div>
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
