import React from 'react';
import { ArrowBack } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import styles from './Pager.module.scss';

const Previous = (props) => (
  <Button {...props} className={styles.Previous}>
    <ArrowBack size={16} />
  </Button>
);

Previous.displayName = 'Pager.Previous';

export default Previous;
