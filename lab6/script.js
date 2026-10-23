/* Лаб 6: dark mode товч + 3D flip card товч */

/* ---------- 1. Dark mode товч ---------- */
(function () {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var icon = btn.querySelector(".theme-icon");
    var label = btn.querySelector(".theme-label");
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

/* ---------- 2. Flip card товч ---------- */
(function () {
    var cards = document.querySelectorAll(".flip");

    cards.forEach(function (card) {
        var front = card.querySelector(".front");
        var back = card.querySelector(".back");
        var buttons = card.querySelectorAll(".flip-btn");

        // Харагдахгүй байгаа тал дээрх товч Tab-аар сонгогдохгүй, дэлгэц уншигчид уншихгүй
        function sync() {
            var flipped = card.classList.contains("is-flipped");
            front.inert = flipped;
            back.inert = !flipped;
        }

        sync();

        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                card.classList.toggle("is-flipped");
                sync();
                // Эргэсний дараа фокусыг шинэ талын товч руу шилжүүлнэ
                var target = card.classList.contains("is-flipped") ? back : front;
                var next = target.querySelector(".flip-btn");
                if (next) next.focus({ preventScroll: true });
            });
        });
    });
})();