import '/cookieconsent/cookieconsent.umd.js';

CookieConsent.run({

	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {},
		advertisement: {}
	},

	language: {
		default: 'pl',
		translations: {
			pl: {
				consentModal: {
					title: 'Używamy plików cookies',
					description: 'Akceptując, wyrażasz zgodę na używanie przez nas takich plików cookies.',
					acceptAllBtn: 'Zaakceptuj wszystkie',
					acceptNecessaryBtn: 'Tylko niezbędne',
					showPreferencesBtn: 'Ustawienia'
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Zaakceptuj wszystkie',
					acceptNecessaryBtn: 'Tylko niezbędne',
					savePreferencesBtn: 'Zapisz',
					closeIconLabel: 'Zamknij',
					sections: [
						{
							title: 'Pliki cookie niezbędne do działania',
							description: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania witryny i nie można ich wyłączyć.',
							linkedCategory: 'necessary'
						},
						{
							title: 'Wydajność i analityka',
							description: 'Te pliki cookie zbierają informacje o tym, jak korzystasz z naszej witryny. Wszystkie dane są anonimizowane i nie mogą być użyte do Twojej identyfikacji.',
							linkedCategory: 'analytics'
						},
						{
							title: 'Reklamy',
							description: 'Google wykorzystuje te pliki cookie do celów reklamowych, w tym do wyświetlania reklam, personalizowania oraz mierzenia ich skuteczności.',
							linkedCategory: 'advertisement'
						}
					]
				}
			}
		}
	}
});