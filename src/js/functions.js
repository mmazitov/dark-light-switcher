document.addEventListener('DOMContentLoaded', function () {
	themeSiwtcher();
});


function themeSiwtcher() {
	let styleMode = localStorage.getItem('themeMode');
	const themeSwitcher = document.querySelector('.btn');

	const enableDarkMode = () => {
		document.body.classList.add('dark-style');
		localStorage.setItem('themeMode', 'dark');
	};
	const disableDarkMode = () => {
		document.body.classList.remove('dark-style');
		localStorage.setItem('themeMode', null);
	};

	themeSwitcher.addEventListener('click', function () {
		styleMode = localStorage.getItem('themeMode');
		if (styleMode !== 'dark') {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});

	if (styleMode === 'dark') {
		enableDarkMode();
	}
}
