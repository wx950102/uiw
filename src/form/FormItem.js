import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class FormItem extends Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={classNames(`${prefixCls}-item`)}>
        {this.props.children}
      </div>
    );
  }
}

FormItem.propTypes = {
  prefixCls: PropTypes.string
}

FormItem.defaultProps = {
  prefixCls: 'w-form',
}
