export interface ISettings {
	apiKey: string;
	isConnected: boolean;
	installed: boolean;
	isActive: boolean;
}

export interface ISettingsError {
	message: string;
	error: string;
	statusCode: number;
}
