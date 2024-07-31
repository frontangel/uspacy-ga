import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Providers from '../../Providers';
import CustomTabPanel from '../CustomTabPanel';
import DescriptionTab from '../DescriptionTab';
import { IProps } from './types';

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const App: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		// @ts-ignore
		setValue(newValue);
	};
	const tabSx = { width: '100%', maxWidth: '50%', textTransform: 'none', letterSpacing: '1px' };
	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
				<Tabs sx={{ width: '100%' }} value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab sx={tabSx} label={t('aboutApp')} {...a11yProps(0)} />
					<Tab sx={tabSx} label={t('settingsApp')} {...a11yProps(1)} />
				</Tabs>
			</Box>
			<DescriptionTab value={value} />
			<CustomTabPanel value={value} index={1}>
				Item Two
			</CustomTabPanel>
		</Box>
	);
};

const AppWrap: React.FC<IProps> = ({ userSettings }) => {
	return (
		<Providers userSettings={userSettings}>
			<App />
		</Providers>
	);
};

export default AppWrap;
