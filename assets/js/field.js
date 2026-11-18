/* field.js (QuanTAS): the live hero. A field of phase needles shows the summed amplitude of a few
 * slowly moving point sources, psi(r, t) = sum_s exp(i (k |r - r_s| - w t + phi_s)) / sqrt(1 + c |r - r_s|):
 * each needle points along arg psi, and its length and brightness follow |psi|. The cursor adds a source.
 * Source ~/Claude-Code/Websites/design/instrument/field-phase.js. Pauses when off screen; one still
 * frame under prefers-reduced-motion. */
(function () {
  var A = document.getElementById("field-a"), B = document.getElementById("field-b"), out = document.getElementById("readout");
  if (!A) return;
  if (B) B.style.display = "none";
  var ctx = A.getContext("2d"), W = 0, H = 0, mouse = null, running = true, raf = 0, t0 = performance.now(), frames = 0;
  var src = [{ ax: .26, ay: .40, rx: .10, ry: .08, k: 0.060, w: 1.5, ph: 0.0, sp: .11 },
             { ax: .70, ay: .56, rx: .12, ry: .10, k: 0.052, w: 1.2, ph: 2.1, sp: .09 },
             { ax: .52, ay: .22, rx: .14, ry: .05, k: 0.047, w: 0.9, ph: 4.0, sp: .07 },
             { ax: .86, ay: .24, rx: .05, ry: .09, k: 0.056, w: 1.1, ph: 1.0, sp: .13 }];
  function layout() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = A.clientWidth; H = A.clientHeight; A.width = W * dpr; A.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function draw(now) {
    var tt = (now - t0) / 1000, step = W < 700 ? 18 : 22, pos = [], i, s;
    for (i = 0; i < src.length; i++) {
      s = src[i];
      pos.push([(s.ax + s.rx * Math.sin(tt * s.sp + i)) * W, (s.ay + s.ry * Math.cos(tt * s.sp * 1.3 + 2 * i)) * H, s]);
    }
    if (mouse) pos.push([mouse[0], mouse[1], { k: 0.065, w: 2.0, ph: 0 }]);
    ctx.fillStyle = "#0A0B0D"; ctx.fillRect(0, 0, W, H);
    var sum = 0, n = 0, len = step * 0.42;
    for (var y = step / 2; y < H; y += step) {
      for (var x = step / 2; x < W; x += step) {
        var re = 0, im = 0;
        for (i = 0; i < pos.length; i++) {
          var dx = x - pos[i][0], dy = y - pos[i][1], r = Math.sqrt(dx * dx + dy * dy), q = pos[i][2];
          var ph = q.k * r - q.w * tt + q.ph, amp = 1 / Math.sqrt(1 + 0.012 * r);
          re += amp * Math.cos(ph); im += amp * Math.sin(ph);
        }
        var a = Math.sqrt(re * re + im * im), th = Math.atan2(im, re), m = Math.min(1, a / 1.25);
        sum += a * a; n++;
        var c = Math.cos(th) * len * (0.35 + 0.65 * m), d = Math.sin(th) * len * (0.35 + 0.65 * m);
        ctx.strokeStyle = m > 0.72 ? "rgba(139,108,255," + (0.35 + 0.6 * m).toFixed(3) + ")" : "rgba(236,234,228," + (0.08 + 0.32 * m).toFixed(3) + ")";
        ctx.lineWidth = m > 0.72 ? 1.6 : 1;
        ctx.beginPath(); ctx.moveTo(x - c, y - d); ctx.lineTo(x + c, y + d); ctx.stroke();
      }
    }
    frames++;
    if (out && frames % 6 === 0) out.innerHTML = "t <b>" + tt.toFixed(1) + " s</b><br>sources <b>" + pos.length + "</b> · needles <b>" + n.toLocaleString() +
      "</b><br>⟨|ψ|²⟩ <b>" + (sum / n).toFixed(3) + "</b><br><span class=\"hint\">the cursor adds a source</span>";
  }
  function loop(now) { draw(now); raf = running ? requestAnimationFrame(loop) : 0; }
  layout();
  var hero = A.parentNode;
  hero.addEventListener("mousemove", function (e) { var r = A.getBoundingClientRect(); mouse = [e.clientX - r.left, e.clientY - r.top]; });
  hero.addEventListener("mouseleave", function () { mouse = null; });
  var tm; window.addEventListener("resize", function () { clearTimeout(tm); tm = setTimeout(layout, 150); });
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { draw(t0 + 4000); return; }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { running = en[0].isIntersecting; if (running && !raf) raf = requestAnimationFrame(loop); }).observe(hero);
  }
  raf = requestAnimationFrame(loop);
})();
