import { Box, Button, CircularProgress, Input, Typography } from '@mui/material';
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getTokenByKey } from '../../helpers/db';
import { ISettings, ISettingsError } from '../../models/settings';
import Providers from '../../Providers';
import Instruction from './instruction';
import { IProps } from './types';

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}

function getDomain() {
	const currentUrl = window.location.href;
	const url = new URL(currentUrl);
	return url.hostname;
}

function getAuthApiUrl() {
	const domain = getDomain();
	const isStaging = domain.endsWith('staging.uspacy.tech');
	if (isStaging) {
		return 'https://auth.dev.leadbox.com.ua';
	}
	switch (domain) {
		case 'localhost': {
			return 'http://localhost:6904';
		}
		default: {
			return 'https://auth.leadbox.com.ua';
		}
	}
}

const APP_URL = getAuthApiUrl();

const Settings: React.FC = () => {
	const [settings, setSettings] = useState<ISettings>({ installed: false, apiKey: '', isConnected: false });
	const [loading, setLoading] = useState(false);
	const [isChanged, setChange] = useState(false);
	const [errorMessage, setError] = useState('');
	const { t } = useTranslation('settings');

	const fetchInstance = async (url: string, token: string, options?: Record<string, unknown>) => {
		return new Promise((resolve) => {
			const headers = {};
			headers['Accept-Language'] = 'uk';
			headers['Content-Type'] = 'application/json';
			if (token) {
				headers['Authorization'] = `Bearer ${token}`;
			}
			fetch(url, {
				headers,
				...options,
			})
				.then((result) => result.json())
				.then(resolve)
				.catch(() => {
					resolve({
						apiKey: '',
						isConnected: false,
						installed: false,
					});
				});
		});
	};

	const getAppToken = async (): Promise<string> => {
		const isLocalhost = getDomain() === 'localhost';
		if (isLocalhost) {
			return getCookie('usAppToken');
		}

		const token = await getTokenByKey('token');
		const response = await fetchInstance('/apps/v1/apps?code[]=do_it_well_lead_box', token);
		await debounceFn();
		return (response as { data: Record<string, string>[] })?.data[0]?.integration_token || '';
	};

	const debounceFn = (delay = 1000) => new Promise((resolve) => setTimeout(resolve, delay));

	useEffect(() => {
		(async () => {
			setLoading(true);
			const appToken = await getAppToken();
			const response = await fetchInstance(`${APP_URL}/portals/settings`, appToken);
			setSettings(response as ISettings);
			setLoading(false);
		})();
	}, []);

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);
		const appToken = await getAppToken();
		const response = await fetchInstance(`${APP_URL}/portals/settings`, appToken, {
			method: 'POST',
			body: JSON.stringify({ apiKey: settings.apiKey?.trim() }),
		});
		(response as ISettingsError).error ? setError((response as ISettingsError).message) : setSettings(response as ISettings);
		setLoading(false);
		setChange(false);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setError('');
		setSettings({ ...settings, apiKey: e.target.value });
		setChange(true);
	};

	const colorBadge = loading
		? {
				backgroundColor: '#efefef',
				color: '#a6a6a8',
		  }
		: settings?.isConnected
		? {
				backgroundColor: '#d2f7b6',
				color: '#58ca00',
		  }
		: {
				backgroundColor: '#ffdada',
				color: '#f00',
		  };

	return (
		<Box>
			<Box>
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
					<Typography
						sx={{
							...colorBadge,
							display: 'inline-flex',
							fontSize: '12px',
							letterSpacing: '1px',
							padding: '0.1rem 0.75rem',
							borderRadius: '1rem',
						}}
					>
						{loading ? t('loading') : settings?.isConnected ? t('connected') : t('notConnected')}
					</Typography>
				</Box>

				<Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingLeft: '1rem' }}>
					{t('LABEL_API_KEY')}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: '1rem',
					}}
					component={'form'}
					onSubmit={handleSubmit}
				>
					<Input
						sx={{
							width: '100%',
							border: '1px solid #ddd',
							outline: 'none',
							borderRadius: '4px',
							paddingLeft: '1rem',
							paddingRight: '1rem',
							'&:before': { content: 'none' },
							'&:after': { content: 'none' },
						}}
						disabled={loading}
						placeholder={t('integrationApiKey')}
						value={settings.apiKey || ''}
						onChange={handleChange}
					/>
					<Button
						disableElevation
						variant={!settings.apiKey?.trim() || !isChanged ? 'outlined' : 'contained'}
						type="submit"
						disabled={loading || !settings.apiKey?.trim() || !isChanged}
						sx={{
							backgroundColor: '#58ca00',
							border: '1px solid #58ca00',
							padding: '5px 2rem',
							textTransform: 'none',
							letterSpacing: '1px',
							'&:hover': { backgroundColor: '#58ca00' },
							'&:disabled': {
								backgroundColor: settings.apiKey?.trim() && isChanged ? '#d2f7b6' : 'transparent',
								color: loading ? '#a6a6a8' : '#58ca00',
								borderColor: loading ? '#a6a6a8' : '#58ca00',
							},
						}}
					>
						{t('connect')}
						{loading && (
							<CircularProgress
								size={22}
								sx={{
									color: '#a6a6a8',
									position: 'absolute',
									zIndex: 1,
								}}
							/>
						)}
					</Button>
				</Box>
				<Box sx={{ position: 'relative', height: '1rem', marginBottom: '1rem' }}>
					{(
						<Typography
							variant="subtitle2"
							sx={{
								color: 'red',
								position: 'absolute',
								left: 0,
								top: 0,
								fontSize: '11px',
								paddingLeft: '1rem',
							}}
						>
							{t(errorMessage)}
						</Typography>
					) && errorMessage}
				</Box>
			</Box>

			<Instruction />
		</Box>
	);
};

const SettingsWrap: React.FC<IProps> = ({ userSettings }) => (
	<Providers userSettings={userSettings}>
		<Settings />
	</Providers>
);

export default SettingsWrap;
