import React from 'react';
import {Component, PropTypes} from '../utils/';
import Message from './Message';


export function isEmpty (obj) {
  if (obj === null || obj === undefined)     return true
  if (typeof obj === 'number' && isNaN(obj)) return true
  if (obj.length !== undefined)              return obj.length === 0
  if (obj instanceof Date)                   return false
  if (typeof obj === 'object')               return Object.keys(obj).length === 0
  return false
}

export default class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: {}
    }
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage (msg) {
    let message = this.state.message
    message[msg.id] = msg
    this.setState({ message , placement:msg.placement, currentId:msg.id})
  }

  render () {
    const { prefixCls, className } = this.props;
    const {message, currentId} = this.state;
    if(isEmpty(message)) return null;

    let cls = this.classNames(prefixCls);
    let _placement = message[currentId].placement;
    if(_placement){
      cls = this.classNames(className,cls,{
        [`${prefixCls}-top`]: _placement           === 'top',            // 默认顶部中间
        [`${prefixCls}-bottom`]: _placement        === 'bottom',         // 底部中间
        [`${prefixCls}-top-left`]: _placement      === 'topLeft',        // 左边上角
        [`${prefixCls}-top-right`]: _placement     === 'topRight',       // 右边上角
        [`${prefixCls}-bottom-left`]: _placement   === 'bottomLeft',     // 左边下角
        [`${prefixCls}-bottom-right`]: _placement  === 'bottomRight',    // 右边下角
      })
    }
    return (
      <div className={ cls }>
        {
          Object.keys(message).map((key) => <Message key={key} {...message[key]}/>)
        }
      </div>
    )
  }
}


Container.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
Container.defaultProps = {
  placement: "top", // 位置
  prefixCls: "w-message",
};

