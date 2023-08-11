import * as React from 'react';

import styles from './styles.module.scss'

import { IButtonLayout } from '../data'

export const Button = ({ data }: IButtonLayout ) => (
  <div className={styles.container}>
    <h1>{`Button`}</h1>
  </div>
)