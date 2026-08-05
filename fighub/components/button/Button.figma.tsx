import figma from '@figma/code-connect';
import { Button } from '@/components/ui/button';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Button,
  'https://www.figma.com/design/HdMsgA9GmWyw3oWbogcob5/Untitled?node-id=1-12847',
  {
    props: {
      size: figma.enum('size', { Default: 'default', Xs: 'xs', Sm: 'sm', Lg: 'lg' }),
      state: figma.enum('state', { Default: 'default', Hover: 'hover', Pressed: 'pressed', FocusVisible: 'focus-visible', Disabled: 'disabled' }),
      variant: figma.enum('variant', { Default: 'default', Destructive: 'destructive', Outline: 'outline', Secondary: 'secondary', Ghost: 'ghost', Link: 'link', Icon: 'icon' }),
      label: figma.string('Label'),
      leadingIcon: figma.boolean('Leading icon'),
      trailingIcon: figma.boolean('Trailing icon'),
    },
    example: (props) => <Button {...props} />,
  },
);
