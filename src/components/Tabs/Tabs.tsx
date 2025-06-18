import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  );
}

interface LinkTabProps {
  label: string;
  href: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      sx={{
        color: '#666666',
        fontFamily: "'Mulish', sans-serif",
        textTransform: 'capitalize',
        fontSize: '16px',
      }}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected ? 'page' : undefined}
      {...props}
    />
  );
}

export interface NavTabItem {
  label: string;
  href: string;
  component: React.ReactNode; // Use 'component' as per your usage
}

interface NavTabProps {
  tabs: NavTabItem[];
  initialValue?: number;
  onTabChange?: () => void;
}

const NavTab: React.FC<NavTabProps> = ({
  tabs,
  initialValue = 0,
  onTabChange
}) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
      onTabChange?.();
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigation tabs"
        role="navigation"
        sx={{ padding: '10px 15px' }}
      >
        {tabs.map((tab, index) => (
          <LinkTab
            key={index}
            label={tab.label}
            href={tab.href}
            selected={value === index}
          />
        ))}
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tabs[value] && tabs[value].component}
      </Box>
    </Box>
  );
};

export default NavTab;
