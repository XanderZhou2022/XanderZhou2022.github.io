$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").on("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      $(this).trigger("click");
    }
  });
  $("a.bibtex").click(function () {
    $(this).attr("aria-expanded", $(this).attr("aria-expanded") !== "true");
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    if (!$myNav.find(".nav-link").length) {
      // remove related publications years from the TOC
      $(".publications h2").each(function () {
        $(this).attr("data-toc-skip", "");
      });
      Toc.init($myNav);
    }
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});

// Collapse only author lists that exceed two rendered lines, preserving their order.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".publications .author").forEach((row) => {
    const items = Array.from(row.querySelectorAll(".author-item"));
    const toggle = row.querySelector(".author-toggle");
    if (!toggle || !items.length) return;
    let expanded = false;
    let previousWidth = 0;
    const layout = () => {
      items.forEach((item) => {
        item.hidden = false;
      });
      toggle.hidden = true;
      const twoLines = parseFloat(getComputedStyle(row).lineHeight) * 2 + 2;
      if (row.getBoundingClientRect().height <= twoLines) return;
      toggle.hidden = false;
      toggle.setAttribute("aria-expanded", String(expanded));
      if (expanded) {
        toggle.textContent = "Show fewer";
        return;
      }
      let count = items.length;
      do {
        count -= 1;
        items[count].hidden = true;
        const remaining = items.length - count;
        toggle.textContent = `and ${remaining} more author${remaining === 1 ? "" : "s"}`;
      } while (count > 1 && row.getBoundingClientRect().height > twoLines);
    };
    toggle.addEventListener("click", () => {
      expanded = !expanded;
      layout();
    });
    const observer = new ResizeObserver(() => {
      const width = row.getBoundingClientRect().width;
      if (width !== previousWidth) {
        previousWidth = width;
        layout();
      }
    });
    observer.observe(row);
    document.fonts.ready.then(layout);
    layout();
  });
});
