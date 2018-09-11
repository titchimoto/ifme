// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faQuestion, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '../Tooltip';
import css from './Input.scss';
import globalCss from '../../styles/_global.scss';

export interface Props {
  id: string;
  label?: string;
  required?: boolean;
  info?: string;
  error?: boolean;
  active?: boolean;
  dark?: boolean;
  large?: boolean;
}

const displayTags = (props: Props) => {
  const { required, info } = props;
  return (
    <div className={css.tags}>
      {info ?
        <div>
          <Tooltip
            element={<FontAwesomeIcon icon={faQuestion} />}
            text={info}
            right
          />
        </div> : null}
      {required ?
        <div>
          <FontAwesomeIcon icon={faAsterisk} />
        </div> : null}
    </div>
  );
};

const labelClassNames = (props) => {
  const { dark, large, active } = props;
  return `${css.label} ${dark ? css.dark : ''} ${large ? css.large : ''} ${
    active ? css.active : ''
  }`;
};

export const InputLabel = (props: Props) => {
  const { error, label, required, info, id } = props;
  return (
    <div className={`${globalCss.gridRowSpaceBetween} ${labelClassNames(props)}`}>
      <div>
        <label htmlFor={id} className={error ? css.error : ''}>{label}</label>
        {error ? <FontAwesomeIcon icon={faExclamation} /> : null}
      </div>
      {required || info ? displayTags(props) : null}
    </div>
  );
};
