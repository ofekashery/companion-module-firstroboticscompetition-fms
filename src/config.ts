import { Regex, type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	host: string
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'FMS IP Address',
			width: 8,
			regex: Regex.IP,
			default: '10.0.100.5',
		},
	]
}
