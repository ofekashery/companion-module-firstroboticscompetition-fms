import type { ModuleInstance } from './main.js'

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		set_display: {
			name: 'Set Display',
			options: [
				{
					id: 'option',
					type: 'dropdown',
					label: 'Display',
					default: 3,
					choices: [
						{ id: 2, label: 'Video Only' },
						{ id: 3, label: 'Video and Score' },
						{ id: 1, label: 'Match Preview' },
						{ id: 8, label: 'Alliance selection' },
						{ id: 10, label: 'Bracket' },
						{ id: 11, label: 'Break' },
						{ id: 5, label: 'Qualification Rankings' },
						{ id: 15, label: 'Message' },
						{ id: 0, label: 'Background' },
					],
				},
			],
			callback: async (event) => {
				await fetch(`http://${self.config.host}/VideoSwitch/OptionChanged?optionParam=${event.options.option}`).then(
					async (response) => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status ${response.status} ${response.statusText}`)
						}
						return response.text()
					},
				)
			},
		},
	})
}
