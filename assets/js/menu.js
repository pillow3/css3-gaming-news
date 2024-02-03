document.addEventListener("DOMContentLoaded", (event) => {
	let mobile_btn = document.querySelector(".navbar__mobile-btn");
	let mobile_menu = document.querySelector(".navbar__mobile-list");

	mobile_btn.addEventListener("click", () => {
		let menu_open = document.querySelector(".menu__open"); // Debe ser ".menu_open" o ".menu__open" dependiendo de cómo lo uses en tu HTML

		if (!menu_open) {
			mobile_menu.style.display = "block";
			mobile_menu.classList.add("menu__open"); // Quita el punto antes de "menu__open"
		} else {
			mobile_menu.style.display = "none";
			mobile_menu.classList.remove("menu__open");
		}
	});

	const submenu = (boton, submenu, className) => {
		boton.addEventListener("click", () => {
			let drop = document.querySelector("." + className);

			if (!drop) {
				submenu.style.display = "block";
				submenu.classList.add(className);
			} else {
				submenu.style.display = "none";
				submenu.classList.remove(className);
			}
		});
	};
	let dropdown1_btn = document.querySelector("#icon1");
	let dropdown1_submenu = document.querySelector("#submenu1");

	let dropdown2_btn = document.querySelector("#icon2");
	let dropdown2_submenu = document.querySelector("#submenu2");

	// Ejecutar funcionalidad
	submenu(dropdown1_btn, dropdown1_submenu, "drop1");
	submenu(dropdown2_btn, dropdown2_submenu, "drop2");

	// Redimensiondo
	window.addEventListener("resize", () => {
		let win = parseFloat(document.body.clientWidth);

		if (win > 1024) {
			mobile_menu.style.display = "none";
			mobile_menu.classList.remove("menu_open");
		}
	});
});
