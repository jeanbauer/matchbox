import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from '../Label';
import { Error } from '../Error';
import { RadioButtonChecked, RadioButtonUnchecked } from '@sparkpost/matchbox-icons';
import Group from './Group';

import styles from './Radio.module.scss';

class Radio extends Component {
  static displayName = 'Radio';

  static Group = Group;

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.node,
    labelHidden: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    helpText: PropTypes.node
  };

  render() {
    const {
      id,
      name,
      checked,
      label,
      labelHidden,
      disabled,
      error,
      value,
      onChange,
      onFocus,
      onBlur,
      helpText,
      ...rest
    } = this.props;

    const setClasses = classnames(
      styles.Radio,
      error && styles.error
    );

    const labelMarkup = label && !labelHidden
      ? <Label id={id} className={styles.Label}>{label}</Label>
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    const helpMarkup = helpText
      ? <div className={styles.HelpText}>{helpText}</div>
      : null;

    return (
      <fieldset className={setClasses}>
        {labelMarkup}
        <input
          id={id}
          name={name}
          value={value}
          checked={checked}
          className={styles.Input}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type='radio'
          {...rest}/>
        <label htmlFor={id} className={styles.Control}>
          <div className={styles.SvgUnchecked}>
            <RadioButtonUnchecked size={21} style={{ verticalAlign: 'top' }}/>
          </div>
          <div className={styles.SvgChecked}>
            <RadioButtonChecked size={21} style={{ verticalAlign: 'top' }}/>
          </div>
        </label>
        {errorMarkup}
        {helpMarkup}
      </fieldset>
    );
  }
}

export default Radio;
