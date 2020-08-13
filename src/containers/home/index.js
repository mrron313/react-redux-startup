import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { increaseCount, decreaseCount, resetCount } from '../store/reducers/CounterReducer';

export const index = props => {
  return (
    <div>
      {props.count}
      <button onClick={props.handleIncrease}> Increase </button>
      <button onClick={props.handleDecrease}> Decrease </button>
      <button onClick={props.handleReset}> Reset </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
    handleReset: resetCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
