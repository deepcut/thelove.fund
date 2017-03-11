import React from 'react'
import AmountBtn from './AmountBtn'
import CustomAmtInput from './CustomAmtInput'

const openModal = (pledgedAmt) => {
  $('#email-modal').foundation('open')
  $('#email-modal .amount').text('$' + pledgedAmt)
  $('#email-modal input.amount').val(pledgedAmt)
}

class DonationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: [ 10, 20, 50, 100 ],
      minAmount: 5,
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
    if(amt && amt > this.state.minAmount) {
      console.log(`yay! pledged: ${amt}. At least: ${this.state.minAmount}`)
      openModal(amt)
    } else {
      alert(`nahhhhh. pledged: ${amt}.  At least: ${this.state.minAmount}`)
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
          <br />
          <a className='typeform-share contribute-other link' href="https://fei3.typeform.com/to/abmmSi" data-mode="1" target="_blank">Contribute in other ways</a>
        </div>
      </div>
    )
  }
}

export default DonationBox

