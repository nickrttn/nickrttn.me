import type { JSX, ComponentType, FunctionComponent } from 'preact';
import clsx from 'clsx';
import styles from './section.module.css';

type SectionProps = {
  as: keyof JSX.IntrinsicElements | ComponentType;
  className?: string;
};

export const Section: FunctionComponent<SectionProps> = (props) => {
  const { as: Cmpnt, className, ...rest } = props;
  return <Cmpnt class={clsx(className, styles.section)} {...rest} />;
};
