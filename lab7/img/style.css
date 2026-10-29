(function () {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var icon = btn.querySelector(".theme-toggle__icon");
    var label = btn.querySelector(".theme-toggle__label");
    var KEY = "techportal-theme";

    function systemPrefersDark() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function apply(theme) {
        root.setAttribute("data-theme", theme);
        var dark = theme === "dark";
        btn.setAttribute("aria-pressed", String(dark));
        icon.textContent = dark ? "☀" : "☾";
        label.textContent = dark ? "Гэрэлт горим" : "Харанхуй горим";
    }

    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}

    apply(saved === "dark" || saved === "light" ? saved : (systemPrefersDark() ? "dark" : "light"));

    btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        apply(next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
    });
})();

(function () {
    var cards = document.querySelectorAll(".flip");

    cards.forEach(function (card) {
        var front = card.querySelector(".flip__face--front");
        var back = card.querySelector(".flip__face--back");
        var buttons = card.querySelectorAll(".flip__btn");
        function sync() {
            var flipped = card.classList.contains("flip--flipped");
            front.inert = flipped;
            back.inert = !flipped;
        }

        sync();

        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                card.classList.toggle("flip--flipped");
                sync();
                var target = card.classList.contains("flip--flipped") ? back : front;
                var next = target.querySelector(".flip__btn");
                if (next) next.focus({ preventScroll: true });
            });
        });
    });
})();
