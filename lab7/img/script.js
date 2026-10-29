<!DOCTYPE html>
<html lang="mn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechPortal | Төхөөрөмжөөр үзэх</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        body {
            display: flex; flex-direction: column; align-items: center;
            font-family: Arial, sans-serif; color: #fff;
            background: radial-gradient(circle at 50% 0%, #4d248f 0%, #090d24 65%);
        }
        .bar {
            display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
            gap: 14px; width: 100%; padding: 16px;
        }
        .back {
            padding: 9px 16px; border: 1px solid #8657ff; border-radius: 25px;
            color: #fff; text-decoration: none; font-size: 14px;
        }
        .back:hover { background: #6534ed; }
        .tabs {
            display: flex; gap: 4px; padding: 5px; border-radius: 999px;
            background: #ffffff14; border: 1px solid #ffffff1f;
        }
        .tabs button {
            padding: 9px 18px; border: 0; border-radius: 999px; cursor: pointer;
            background: transparent; color: #c9c5e8; font-size: 14px; font-weight: 600;
        }
        .tabs button:hover { color: #fff; }
        .tabs button.active { background: linear-gradient(135deg, #6637f2, #a24cff); color: #fff; }
        .size { min-width: 90px; color: #a79fd6; font-size: 13px; }
        .stage {
            flex: 1; display: flex; align-items: center; justify-content: center;
            width: 100%; padding: 10px 20px 24px; overflow: hidden;
        }
        .holder { position: relative; flex: none; }
        .device {
            position: absolute; left: 0; top: 0; transform-origin: top left;
            background: #0b0d1f;
            box-shadow: 0 0 0 2px #2a2d4a, 0 40px 90px #00000099, 0 0 80px #6d3cf040;
        }
        .screen { width: 100%; height: 100%; background: #fff; overflow: hidden; }
        iframe { display: block; width: 100%; height: 100%; border: 0; background: #fff; }
        @media (max-width: 640px) { .size { display: none; } }
    </style>
</head>
<body>
    <div class="bar">
        <a href="index.html" class="back">← Сайт руу буцах</a>
        <div class="tabs">
            <button data-d="desktop">Desktop</button>
            <button data-d="tablet">Tablet</button>
            <button data-d="mobile">Mobile</button>
        </div>
        <div class="size"></div>
    </div>

    <div class="stage">
        <div class="holder">
            <div class="device">
                <div class="screen"><iframe src="index.html" title="TechPortal"></iframe></div>
            </div>
        </div>
    </div>

    <script>
        var DEVICES = {
            desktop: { w: 1440, h: 900,  bezel: 14, radius: 18 },
            tablet:  { w: 820,  h: 1180, bezel: 18, radius: 38 },
            mobile:  { w: 390,  h: 844,  bezel: 13, radius: 54 }
        };
        var current = "desktop";
        var holder = document.querySelector(".holder");
        var device = document.querySelector(".device");
        var screenBox = document.querySelector(".screen");
        var sizeLbl = document.querySelector(".size");
        var buttons = document.querySelectorAll(".tabs button");

        function layout() {
            var d = DEVICES[current];
            var fullW = d.w + d.bezel * 2;
            var fullH = d.h + d.bezel * 2;
            var bar = document.querySelector(".bar").offsetHeight;
            var scale = Math.min(1, (window.innerWidth - 40) / fullW, (window.innerHeight - bar - 40) / fullH);

            device.style.width = fullW + "px";
            device.style.height = fullH + "px";
            device.style.padding = d.bezel + "px";
            device.style.borderRadius = d.radius + "px";
            device.style.transform = "scale(" + scale + ")";
            screenBox.style.borderRadius = Math.max(d.radius - d.bezel, 4) + "px";
            holder.style.width = fullW * scale + "px";
            holder.style.height = fullH * scale + "px";
            sizeLbl.textContent = d.w + " × " + d.h;
            buttons.forEach(function (b) { b.classList.toggle("active", b.dataset.d === current); });
        }

        buttons.forEach(function (b) {
            b.addEventListener("click", function () { current = b.dataset.d; layout(); });
        });
        window.addEventListener("resize", layout);
        layout();
    </script>
</body>
</html>
