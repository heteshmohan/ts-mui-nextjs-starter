import dynamic from 'next/dynamic';
import type { ComponentType, FC } from 'react';
import type { Props as CardsSectionProps } from './sections/CardsSection';
import type { Props as HeroSectionProps } from './sections/HeroSection';
import type { Props as FormSectionProps } from './sections/FormSection'; // Import the props type for FormSection

// Define a base interface that ensures the presence of the `type` property as a string
interface BaseProps {
  type: string;
}

// Extend each section's props to include the base `type` property
export type Props = (CardsSectionProps & BaseProps) | (HeroSectionProps & BaseProps) | (FormSectionProps & BaseProps);

// Define the ComponentsMap with a constraint that `type` is always a string
type ComponentsMap = {
  [key: string]: ComponentType<any>;
};

const componentsMap: ComponentsMap = {
  // sections
  CardsSection: dynamic(() => namedComponent(import('./sections/CardsSection'), 'CardsSection')),
  HeroSection: dynamic(() => namedComponent(import('./sections/HeroSection'), 'HeroSection')),
  FormSection: dynamic(() => namedComponent(import('./sections/FormSection'), 'FormSection')), // Add FormSection here
};

export const DynamicComponent: FC<Props> = (props) => {
  if (!props.type) {
    throw new Error(`Object does not have the 'type' property required to select a component: ${JSON.stringify(props, null, 2)}`);
  }

  const Component = componentsMap[props.type];

  if (!Component) {
    throw new Error(
      `No component match object with type: '${props.type}'\nMake sure DynamicComponent.tsx file has an entry for '${props.type}' in 'componentsMap'`
    );
  }

  return <Component {...props} />;
};

const namedComponent = async <T, N extends keyof T>(modPromise: Promise<T>, exportName: N) => {
  const mod = await modPromise;
  return mod[exportName];
};
