(function () {
  /* ── Logo injection ── */
  var img = document.querySelector('.logo-wrap img');
  if (img) img.src = window.CUZZIOL_LOGO || '';

  /* ── Add scaglione row ── */
  window.addRow = function (tableId, type) {
    var tbody = document.querySelector('#' + tableId + ' tbody');
    if (!tbody) return;
    var tr = document.createElement('tr');
    var unitLabel = type === 'pct' ? '%' : '€';
    tr.innerHTML =
      '<td><input type="number" placeholder="0,00" min="0" step="0.01" /></td>' +
      '<td><input type="number" placeholder="0,00" min="0" step="0.01" /></td>' +
      '<td><div class="input-prefix"><span>' + unitLabel + '</span>' +
      '<input type="number" min="0" step="0.01" placeholder="0,00" /></div></td>' +
      '<td><button class="btn-del-row" onclick="delRow(this)" title="Rimuovi">\u2715</button></td>';
    tbody.appendChild(tr);
  };

  /* ── Delete scaglione row ── */
  window.delRow = function (btn) {
    var row = btn.closest('tr');
    var tbody = row.closest('tbody');
    if (tbody.rows.length > 1) row.remove();
  };

  /* ── Reset form ── */
  window.resetForm = function () {
    if (!confirm('Vuoi davvero azzerare il modulo?')) return;
    document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], textarea')
      .forEach(function (el) { el.value = ''; });
    document.querySelectorAll('input[type="checkbox"]')
      .forEach(function (el) { el.checked = false; });
    ['scaglioni-fatturato', 'scaglioni-consumo'].forEach(function (id) {
      var tbody = document.querySelector('#' + id + ' tbody');
      if (tbody) while (tbody.rows.length > 1) tbody.deleteRow(1);
    });
  };
})();
