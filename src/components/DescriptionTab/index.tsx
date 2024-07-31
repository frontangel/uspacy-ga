import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

import CustomTabPanel from '../CustomTabPanel';
// import ImageCarousel from '../ImageCarusel';

const DescriptionTab = ({ value }: { value: number }) => {
	return (
		<CustomTabPanel value={value} index={0}>
			{/* <ImageCarousel />*/}

			<Typography sx={{ marginBottom: '2rem' }}>
				Цей застосунок дозволить вам без написання коду налаштувати Smart-передачу лідів з будь якого вашого джерела лідогенерації в Uspacy
				відправивши дані на Webhook.
			</Typography>

			<Typography sx={{ marginBottom: '2rem' }}>
				{[
					'Більшість CMS, платформ конструкторів сайтів та квізів, онлайн чатів та',
					'інших сервісів мають вбудований функціонал відправки даних по запиту',
					'клієнта на Webhook. Відповідно всі ці сервіси можна інтегрувати з Uspacy через даний застосунок.',
				].join(' ')}
			</Typography>

			<Typography>Функціонал застосунку:</Typography>

			<List sx={{ marginBottom: '2rem' }}>
				<ListItem>
					<ListItemText>Створювати лід або контакт та угоду із кожної заявки, яку ви отримуєте з джерела лідогенерації</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>
						{[
							'При створені ліда або контакту з угодою виключити можливість створення',
							'дубля клієнта за рахунок перевірки наявності телефону / емейлу в Uspacy',
						].join(' ')}
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>Обрати сценарій створення повторної угоди по наявному клієнту</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>Створити схему розподілу нових замовлень на менеджерів під кожний окремий Webhook</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>Зручно, без написання коду, обрати в які поля Uspacy ви хочете передати інформацію по ліду</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>
						{[
							'Оновлювати дані у вже наявних угодах / контактах додатковою інформацією (наприклад про джерело трафіку)',
							'з новий замовлень клієнта',
						].join(' ')}
					</ListItemText>
				</ListItem>
			</List>

			<Typography sx={{ marginBottom: '2rem' }}>
				І все це можливо налаштувати через адмін панель сервісу LeadBox і змінювати в подальшому швидко та зручно.
			</Typography>

			<Typography>Окрім даних самого ліда та його запиту ви можете отримати на Webhook:</Typography>
			<List sx={{ marginBottom: '2rem' }}>
				<ListItem>
					<ListItemText>дані по джерелу трафіка (utm-мітки)</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>автоматично заповнити джерело в Uspacy</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>обрати назву створюваного ліда / угоди</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>в подальшому відправити дані з Uspacy в Google Analytics</ListItemText>
				</ListItem>
			</List>

			<Typography>Серед інших вбудованих інтеграцій сервісу LeadBox:</Typography>
			<Typography sx={{ marginBottom: '2rem' }}>
				{[
					'Google Analytucs / Meta лід-форми / TypeForms / Коллтрекінг Binotel / Weblium / Хорошоп',
					'/ Tilda / WordPress / Sendpulse Чат-боти та багато інших.',
				].join(' ')}
			</Typography>

			<Typography sx={{ marginBottom: '2rem' }}>
				Встановлюй будь які з них оплачуючи тільки обраний тарифний. Детальніше на сайті LeadBox (посилання на сайт).{' '}
			</Typography>
			<Typography sx={{ marginBottom: '2rem' }}>
				{[
					'Якщо вам не вистачає функціоналу в даній інтеграції чи є запитання - пишіть office@leadbox.com.ua',
					'або дзвоніть +380933164008 (даний номер також є в телеграм).',
				].join(' ')}
			</Typography>
		</CustomTabPanel>
	);
};

export default DescriptionTab;
