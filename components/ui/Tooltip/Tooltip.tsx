import { FC, PropsWithChildren, useRef } from 'react';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';

import s from './Tooltip.module.css';

interface Props {
  text: string;
  disabled?: boolean;
}

const DELAY = 200;

const Tooltip: FC<PropsWithChildren<Props>> = ({ children, text, disabled }) => {
  const ref = useRef(null);
  const state = useTooltipTriggerState({ delay: DELAY, isDisabled: false });

  const { triggerProps, tooltipProps: tooltipTriggerProps } = useTooltipTrigger(
    { delay: DELAY, isDisabled: disabled },
    state,
    ref,
  );

  const { tooltipProps } = useTooltip(tooltipTriggerProps, state);

  return (
    <span className={s.root}>
      <span ref={ref} {...triggerProps}>
        {children}
      </span>
      {state.isOpen && (
        <span {...tooltipProps} {...tooltipTriggerProps} className={s.overlay}>
          <span className={s.arrow} />
          {text}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
