import { Box, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import YouTube from 'react-youtube';

function IntegrationInstructions() {
	const { i18n } = useTranslation('settings');
	const currentLocale = i18n.language;
	const helpUrlUk = 'https://leadbox.crunch.help/uk/intieghratsiia-z-analitichnimi-sistiemami/pidkliuchiennia-google-analytics-4';
	const helpUrlEn = 'https://leadbox.crunch.help/en/intieghratsiia-z-analitichnimi-sistiemami/pidkliuchiennia-google-analytics-4';
	// const videoId = 'BF1E3O2IfUI';
	// const playerStyles = {
	// 	maxWidth: '1000px',
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	marginBottom: '2rem',
	// 	aspectRatio: '16/9',
	// };
	// const opts = {
	// 	height: '100%',
	// 	width: '100%',
	// 	playerVars: {
	// 		autoplay: 0,
	// 		controls: 0,
	// 		rel: 0,
	// 		showinfo: 0,
	// 		iv_load_policy: 3, // приховати анотації
	// 	},
	// };
	const boldColor = { fontWeight: 500, color: '#9c27b0' };
	const btnStyle = {
		color: boldColor.color,
		border: `1px solid ${boldColor.color}`,
		display: 'inline-flex',
		padding: '0.25rem 1rem',
		borderRadius: '3px',
		marginLeft: '0.5rem',
		letterSpacing: '1px',
		fontSize: '14px',
	};
	const linkStyles = { color: '#03a9f4' };
	return (
		<Box>
			{currentLocale === 'uk' && (
				<>
					{/* <YouTube videoId={videoId} style={playerStyles} opts={opts} /> */}
					<Box sx={{ marginBottom: 6 }}>
						<Typography gutterBottom variant="h5" component="div">
							КРОК 1 - підключення Uspacy до акаунту LeadBox
						</Typography>
						<Typography gutterBottom component="div">
							Зареєструйте акаунт в сервісі{' '}
							<Link href="https://my.leadbox.com.ua" sx={linkStyles} target="_blank">
								my.leadbox.com.ua
							</Link>
							, якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку{' '}
							<Link href="https://my.leadbox.com.ua/admin/integrations" sx={linkStyles} target="_blank">
								Інтеграції
							</Link>
							.
						</Typography>
						<Typography component="div">
							Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:
						</Typography>
						<List>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ оберіть <span style={boldColor}>Додати інтеграцію</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ оберіть розділ <span style={boldColor}>CRM</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ натисніть <span style={boldColor}>Uspacy</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText primary="➡️ введіть потрібну вам назву" />
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ скопіюте отриманий <span style={boldColor}>Api ключ</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ вставте ключ в форму вище і натисніть
											<span style={btnStyle}>Підключити</span>
										</>
									}
								/>
							</ListItem>
						</List>
					</Box>
					<Box>
						<Typography gutterBottom variant="h5" component="div">
							КРОК 2 - підключення інтеграції Google Analytics
						</Typography>
						<List>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ зайдіть на сторінку інтеграцій в <span style={boldColor}>LeadBox</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ натисніть <span style={boldColor}>Додати інтеграцію</span> та оберіть з переліку{' '}
											<span style={boldColor}>Аналітика → Google Analytics</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText primary="➡️ Дайте назву інтеграції" />
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Заповніть налаштування згідно з цією{' '}
											<Link href={helpUrlUk} sx={linkStyles} target="_blank">
												інструкцією
											</Link>
											.
										</>
									}
								/>
							</ListItem>
						</List>
					</Box>
					<Box sx={{ marginTop: 4 }}>
						<Typography component="div">
							Якщо у вас виникнуть питання: - пишіть нам в 💬 тех.підтримку на{' '}
							<Link href="https://my.leadbox.com.ua" sx={linkStyles} target="_blank">
								my.leadbox.com.ua
							</Link>{' '}
							або:
						</Typography>
						<Typography component="div">
							✉️{' '}
							<Link href="mailto:office@leadbox.com.ua" sx={linkStyles}>
								office@leadbox.com.ua
							</Link>
						</Typography>
						<Typography component="div">
							📱{' '}
							<Link href="tel:+380933164008" sx={linkStyles}>
								+38 (093) 316-40-08
							</Link>
						</Typography>
					</Box>
				</>
			)}
			{currentLocale !== 'uk' && (
				<>
					{/* <YouTube videoId={videoId} style={playerStyles} opts={opts} /> */}
					<Box sx={{ marginBottom: 6 }}>
						<Typography gutterBottom variant="h5" component="div">
							STEP 1 - Connecting Uspacy to your LeadBox account:
						</Typography>
						<Typography gutterBottom component="div">
							Register an account at{' '}
							<Link href="https://my.leadbox.com.ua" sx={linkStyles} target="_blank">
								my.leadbox.com.ua
							</Link>
							. If you already have an account, log in and go to the page Integrations.{' '}
							<Link href="https://my.leadbox.com.ua/admin/integrations" sx={linkStyles} target="_blank">
								Integrations
							</Link>
							.
						</Typography>
						<Typography component="div">Select the Uspacy integration (if you created it previously), or create a new one.</Typography>
						<List>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Select <span style={boldColor}>Add Integration</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Choose the <span style={boldColor}>CRM</span> section.
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Click on <span style={boldColor}>Uspacy</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText primary="➡️  Enter the desired name" />
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											{/* eslint-disable-next-line max-len */}
											➡️ Fill in the <span style={boldColor}>Api key</span> field with the Secret Key data, which you will get
											from the Uspacy integration page in the LeadBox service
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Click
											<span style={btnStyle}>Connect</span>
										</>
									}
								/>
							</ListItem>
						</List>
					</Box>
					<Box>
						<Typography gutterBottom variant="h5" component="div">
							STEP 2 - Connecting the Type Form integration:
						</Typography>
						<List>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Go to the{' '}
											<Link href="https://my.leadbox.com.ua/admin/integrations" sx={linkStyles} target="_blank">
												integration
											</Link>{' '}
											page in LeadBox
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Click <span style={boldColor}>Add Integration</span> and select from the list{' '}
											<span style={boldColor}>Analytics → Google Analytics</span>
										</>
									}
								/>
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText primary="➡️ Give the integration a name" />
							</ListItem>
							<ListItem sx={{ paddingY: 0 }}>
								<ListItemText
									primary={
										<>
											➡️ Complete the settings according to the{' '}
											<Link href={helpUrlEn} sx={linkStyles} target="_blank">
												instructions
											</Link>
											.
										</>
									}
								/>
							</ListItem>
						</List>
					</Box>
					<Box sx={{ marginTop: 4 }}>
						<Typography component="div">
							If you have any questions, please write to us in the support chat in your{' '}
							<Link href="https://my.leadbox.com.ua" sx={linkStyles} target="_blank">
								my.leadBox.com.ua
							</Link>{' '}
							account, or:
						</Typography>
						<Typography component="div">
							✉️{' '}
							<Link href="mailto:office@leadbox.com.ua" sx={linkStyles}>
								office@leadbox.com.ua
							</Link>
						</Typography>
						<Typography component="div">
							📱{' '}
							<Link href="tel:+380933164008" sx={linkStyles}>
								+38 (093) 316-40-08
							</Link>
						</Typography>
					</Box>
				</>
			)}
		</Box>
	);
}

export default IntegrationInstructions;
