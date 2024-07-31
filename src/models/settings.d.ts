export interface ISettings {
	apiKey: string;
	isConnected: boolean;
	installed: boolean;
}

export interface ISettingsError {
	message: string;
	error: string;
	statusCode: number;
}
