import { openDB } from 'idb';

const dbPromise = openDB('Uspacy');

export const setToken = async (tokenId: number, token: string) => {
	const db = await dbPromise;
	await db.put('tokens', { id: tokenId, token });
};

export const getToken = async (tokenId: number) => {
	const db = await dbPromise;
	return db.get('tokens', tokenId);
};

export const getTokenByKey = async (key: string) => {
	const db = await dbPromise;
	return await db.get('tokens', key);
};
